"use client";

import CodeInput from "@/components/CodeInput";
import EditorHeader from "@/components/EditorHeader";
import Footer from "@/components/Footer";

export default function EditorPage() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 flex flex-col">
      <EditorHeader />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col items-center">
          <CodeInput />
          <Footer />
        </div>
      </main>
    </div>
  );
}
