"use client";

export default function LandingFooter() {
  return (
    <footer className="bg-white/10 dark:bg-white/5 border-t border-white/20 dark:border-white/10 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 py-5">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            Snippify
          </span>{" "}
          © 2026
        </div>
      </div>
    </footer>
  );
}
