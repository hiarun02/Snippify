"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {AiFillStar, AiFillGithub} from "react-icons/ai";
import {Button} from "./ui/button";

export default function Footer() {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/hiarun02/Snippify",
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Failed to fetch stars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, []);

  return (
    <header className="fixed bottom-0 w-full p-4 backdrop-blur-md bg-transparent z-50">
      <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-0">
        <div className="flex items-center space-x-2">
          <p className="text-black text-xs sm:text-sm">
            Snippify Made with 🖤 by
          </p>
          <Link
            href={"https://x.com/hiarun02"}
            target="_blank"
            className="text-black text-xs sm:text-sm hover:text-gray-600 transition-colors hover:underline font-semibold"
          >
            @hiarun02
          </Link>
        </div>
        <div className="dark:text-gray-300 text-black text-xs sm:text-sm flex items-center space-x-2">
          <Button variant="link" className="p-0 h-auto">
            <Link
              href={"https://github.com/hiarun02/Snippify"}
              target="_blank"
              className="flex items-center gap-1 hover:text-gray-600 transition-colors"
            >
              <AiFillGithub className="w-4 h-4" />
              Proudly Open Source
              {loading ? (
                <span className="inline-block ml-1 w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
              ) : stars !== null ? (
                <span className="flex items-center gap-1 ml-1">
                  <AiFillStar className="w-3 h-3 text-black" />
                  {stars}
                </span>
              ) : null}
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
