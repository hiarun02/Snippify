"use client";

import React, {useState} from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {coldarkDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import {useGradient} from "@/hooks/useGradient";
import {useTheme} from "@/hooks/useTheme";
import {useLanguage} from "@/hooks/useLanguage";
import {useFontSize} from "@/hooks/useFontSize";
import {useBackground} from "@/hooks/useBackground";
import {useCodePreview} from "@/hooks/useCodePreview";
import {Textarea} from "./ui/textarea";

export default function CodeInput() {
  const [code, setCode] = useState<string>("");
  const {gradient} = useGradient();
  const {theme} = useTheme();
  const {language} = useLanguage();
  const {fontSize} = useFontSize();
  const {isBackgroundHidden} = useBackground();
  const {setPreviewRef} = useCodePreview();

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

      <div
        ref={setPreviewRef}
        className={`w-fit min-w-[20vw] max-sm:w-full py-8 px-10 max-sm:px-2 max-sm:p-2 rounded-xl ${
          isBackgroundHidden ? "!bg-none shadow-none" : ""
        }`}
        style={{background: gradient}}
      >
        <div className="relative">
          <div className="flex items-center space-x-2 mt-1 absolute left-3 top-2 z-10">
            <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-red-500"></span>
            <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-yellow-500"></span>
            <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-green-500"></span>
          </div>

          <SyntaxHighlighter
            language={language}
            style={typeof theme === "string" ? coldarkDark : theme}
            customStyle={{
              fontSize: `${fontSize}px`,
              borderRadius: "8px",
              padding: "45px 35px 30px 10px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
              overflow: "hidden",
              opacity: 0.85,
            }}
            wrapLongLines
            showLineNumbers
          >
            {code ||
              `export default function useDebounce(fn, delay=300) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  }}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
