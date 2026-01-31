"use client";

import {AiFillGithub} from "react-icons/ai";
import {Button} from "./ui/button";
import Link from "next/link";
import {FiMoon, FiSun} from "react-icons/fi";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
// import {FaHeart} from "react-icons/fa";
// import SupportDialog from "./landing/SupportDialog";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const {theme, systemTheme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="fixed bottom-0 w-full p-4 backdrop-blur-2xl bg-white/20 dark:bg-white/5 z-50 border-t border-white/20 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30">
      <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-800 dark:text-gray-100">
          <Link
            href="/"
            className="font-semibold hover:text-gray-900 dark:hover:text-white"
          >
            Snippify |
          </Link>{" "}
          <span>Made by</span>
          <Link
            href={"https://x.com/hiarun02"}
            target="_blank"
            className="font-semibold text-gray-900 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            @hiarun02
          </Link>
        </div>
        <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <Button
            variant="outline"
            className="h-7 w-7 rounded-full border border-black/20 bg-white/80 p-0 shadow-sm hover:bg-white dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
            onClick={() => {
              const currentTheme = theme === "system" ? systemTheme : theme;
              setTheme(currentTheme === "dark" ? "light" : "dark");
            }}
          >
            {mounted &&
            ((theme === "system" ? systemTheme : theme) ?? "light") ===
              "dark" ? (
              <FiSun className="h-4 w-4 text-yellow-400" />
            ) : (
              <FiMoon className="h-4 w-4 text-gray-700" />
            )}{" "}
          </Button>
          |
          {/* <SupportDialog>
            <Button variant="link" className="p-0 h-auto">
              <span className="flex items-center gap-1 hover:text-gray-600 transition-colors cursor-pointer">
                Support <FaHeart className="w-4 h-4 text-red-700" />
              </span>
            </Button>
          </SupportDialog> */}
          <Button variant="link" className="p-0 h-auto">
            <Link
              href={"https://github.com/hiarun02/Snippify"}
              target="_blank"
              className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Open Source <AiFillGithub className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </footer>
  );
}
