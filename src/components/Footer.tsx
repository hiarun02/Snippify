"use client";

import Link from "next/link";
import {Button} from "./ui/button";

export default function Header() {
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
            className="text-black text-xs sm:text-sm hover:text-gray-600 transition-colors underline font-semibold"
          >
            @hiarun02
          </Link>
        </div>
        <div className="dark:text-gray-300 text-black text-xs sm:text-sm flex items-center space-x-2">
          <Button variant="link" className="p-0 underline h-auto">
            <Link href={"https://github.com/hiarun02/Snippify"} target="_blank">
              Star on Github
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
