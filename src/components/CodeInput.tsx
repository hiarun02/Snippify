"use client";

import React, {useState} from "react";
import {Textarea} from "./ui/textarea";
import CodePreview from "./CodePreview";
export default function CodeInput() {
  const [code, setCode] = useState<string>("");

  return (
    <div className="flex w-full flex-col gap-6 items-center pt-40 sm:pt-32 justify-center max-sm:px-2 mb-8">
      <div className="w-full max-w-lg space-y-4 max-sm:space-y-4">
        <Textarea
          className="w-full h-40 p-4 rounded-xl bg-white text-black bg-opacity-20 backdrop-blur-lg border border-black/20 shadow-none"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
        />
      </div>

      <CodePreview code={code} />
    </div>
  );
}
