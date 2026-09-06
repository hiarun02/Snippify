import {NextRequest, NextResponse} from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

const SCREENSHOT_STUDIO_API_URL =
  process.env.SCREENSHOT_STUDIO_API_URL ??
  "https://www.screenshot-studio.com/api/screenshot";
const SCREENSHOT_TIMEOUT_MS = 45000;

function normalizeUrl(rawUrl: string | null) {
  if (!rawUrl) {
    return null;
  }

  try {
    const targetUrl = new URL(rawUrl);
    if (targetUrl.protocol !== "https:" && targetUrl.protocol !== "http:") {
      return null;
    }

    return targetUrl;
  } catch {
    return null;
  }
}

function getErrorMessage(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const errorPayload = payload as {
    error?: unknown;
    message?: unknown;
    hint?: unknown;
  };

  if (typeof errorPayload.message === "string") {
    return errorPayload.message;
  }

  if (typeof errorPayload.error === "string") {
    return errorPayload.error;
  }

  if (typeof errorPayload.hint === "string") {
    return errorPayload.hint;
  }

  return null;
}

function decodeScreenshot(screenshot: string) {
  const base64 = screenshot.includes(",")
    ? screenshot.split(",").at(-1)
    : screenshot;

  if (!base64) {
    return null;
  }

  return Buffer.from(base64, "base64");
}

export async function GET(request: NextRequest) {
  const targetUrl = normalizeUrl(request.nextUrl.searchParams.get("url"));

  if (!targetUrl) {
    return NextResponse.json(
      {error: "Enter a valid website URL."},
      {status: 400},
    );
  }

  const abortController = new AbortController();
  const timeout = setTimeout(() => {
    abortController.abort();
  }, SCREENSHOT_TIMEOUT_MS);

  try {
    const response = await fetch(SCREENSHOT_STUDIO_API_URL, {
      method: "POST",
      cache: "no-store",
      signal: abortController.signal,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: targetUrl.href,
        deviceType: "desktop",
        colorScheme: "light",
        forceRefresh: true,
      }),
    });

    const payload = (await response.json().catch(() => null)) as {
      screenshot?: unknown;
    } | null;

    if (!response.ok || typeof payload?.screenshot !== "string") {
      return NextResponse.json(
        {
          error:
            getErrorMessage(payload) ??
            "Could not capture this website. Try another URL.",
        },
        {status: response.ok ? 502 : response.status},
      );
    }

    const imageBuffer = decodeScreenshot(payload.screenshot);
    if (!imageBuffer?.length) {
      return NextResponse.json(
        {error: "Website capture did not return an image."},
        {status: 502},
      );
    }

    return new NextResponse(imageBuffer, {
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error && error.name === "AbortError"
        ? "Website capture timed out. Try again or use another URL."
        : "Could not capture this website. Try another URL.";

    return NextResponse.json({error: message}, {status: 502});
  } finally {
    clearTimeout(timeout);
  }
}
