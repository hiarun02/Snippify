"use client";

import React, {useState} from "react";
import CodePreview from "./CodePreview";
export default function CodeInput() {
  const [code, setCode] = useState<string>("");

  return (
    <div className="flex w-full flex-col gap-4 sm:gap-6 items-center justify-center min-h-screen px-4 sm:px-2 py-24">
      <div className="w-full max-w-lg space-y-4 max-sm:space-y-4">
        <textarea
          className="w-full h-40 p-4 rounded-xl bg-white text-black bg-opacity-20 backdrop-blur-lg border border-black/20 shadow-none resize-y focus:outline-none focus:ring-2 focus:ring-black/30 placeholder:text-gray-500 dark:bg-gray-900/60 dark:text-gray-100 dark:border-white/20 dark:focus:ring-white/30 dark:placeholder:text-gray-400"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code here..."
        />
      </div>

      <CodePreview code={code} />
    </div>
  );
}
