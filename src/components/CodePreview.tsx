"use client";

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {coldarkDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import {useEditorStore} from "@/store/useEditorStore";
import type {ThemeStyle} from "@/lib/theme";

interface CodePreviewProps {
  code: string;
}

export default function CodePreview({code}: CodePreviewProps) {
  const gradient = useEditorStore((state) => state.gradient);
  const theme = useEditorStore((state) => state.theme);
  const language = useEditorStore((state) => state.language);
  const fontSize = useEditorStore((state) => state.fontSize);
  const isBackgroundHidden = useEditorStore(
    (state) => state.isBackgroundHidden,
  );
  const showLineNumbers = useEditorStore((state) => state.showLineNumbers);
  const setPreviewRef = useEditorStore((state) => state.setPreviewRef);

  return (
    <div
      ref={setPreviewRef}
      className={`w-fit min-w-[20vw] max-sm:w-full max-sm:mx-auto py-6 px-10 max-sm:py-4 max-sm:px-4 rounded-xl ${
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
          style={(theme as ThemeStyle) || coldarkDark}
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
          showLineNumbers={showLineNumbers}
        >
          {code ||
            `// Your code preview will appear here...\nfunction helloWorld() {\n  console.log("Hello, world!");\n}`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
