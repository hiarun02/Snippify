"use client";

import {Github} from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed bottom-0 w-full p-4 z-50 bg-transparent backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <p className="text-black ">Snippify Made by</p>{" "}
          <Link
            href={"https://x.com/hiarun02"}
            target="_blank"
            className="text-black hover:text-gray-600 transition-colors"
          >
            @hiarun02
          </Link>
        </div>
        <div className="text-black text-sm flex items-center space-x-2">
          <Github className="bg-blend-color-burn" />
          <Link
            href={"https://x.com/fardeentwt"}
            target="_blank"
            className="text-black hover:text-gray-600 transition-colors"
          >
            Star on Github
          </Link>
        </div>
      </nav>
    </header>
  );
}
