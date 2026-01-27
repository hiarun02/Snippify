import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";

import "@/styles/globals.css";
import Providers from "@/provider/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snippify - Generate Code Snippets",
  description: "Designed and Developed by Arun kumar  ",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 min-h-screen overflow-x-hidden overflow-y-auto`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
