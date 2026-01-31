"use client";

import Image from "next/image";
import Link from "next/link";
import {FaArrowAltCircleRight, FaStar} from "react-icons/fa";
import {FiMoon, FiSun} from "react-icons/fi";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";

export default function Navbar() {
  const [stars, setStars] = useState<number | null>(null);
  const [displayStars, setDisplayStars] = useState(0);
  const [mounted, setMounted] = useState(false);
  const {theme, systemTheme, setTheme} = useTheme();

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/hiarun02/Snippify",
        );
        const data = await res.json();
        if (typeof data?.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error("Failed to fetch stars", error);
      }
    };

    fetchStars();
  }, []);

  useEffect(() => {
    if (stars === null) return;
    let current = 0;
    const target = stars;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplayStars(current);
      if (current >= target) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [stars]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-4 z-50 border-b border-white/60 dark:border-transparent">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/20 dark:border-gray-700 bg-transparent dark:bg-gray-900 px-4 py-3 shadow-sm shadow-black/5 backdrop-blur-2xl dark:shadow-black/50">
          <div className="flex items-center ">
            <span className="flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold text-white">
              <Image
                className="rounded-full"
                src="/icon.svg"
                alt="Snippify logo"
                width={24}
                height={24}
                priority
              />
            </span>
            <div className="leading-tight">
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                Snippify
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-10 w-10 rounded-full border-white/30 bg-white/5 p-0 hover:bg-white/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
              onClick={() => {
                const currentTheme = theme === "system" ? systemTheme : theme;
                setTheme(currentTheme === "dark" ? "light" : "dark");
              }}
            >
              {mounted &&
              ((theme === "system" ? systemTheme : theme) ?? "light") ===
                "dark" ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-gray-700" />
              )}
            </Button>
            <Button
              variant="outline"
              className="border-white/30 bg-white/5 hover:bg-white/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              asChild
            >
              <Link
                href="https://github.com/hiarun02/Snippify"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  Star on GitHub
                </span>
                <FaStar className="text-yellow-500" />
                {stars === null ? (
                  <span
                    className="inline-block ml-1 h-3 w-3 rounded-full border-2 border-gray-400 border-t-transparent animate-spin dark:border-gray-400"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {displayStars.toLocaleString()}
                  </span>
                )}
              </Link>
            </Button>
            <Button
              variant="default"
              className="hidden sm:inline-flex rounded-3xl"
              asChild
            >
              <Link href="/editor">
                Editor <FaArrowAltCircleRight />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
