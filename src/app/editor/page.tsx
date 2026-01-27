"use client";

import CodeInput from "@/components/CodeInput";
import EditorHeader from "@/components/EditorHeader";
import Footer from "@/components/Footer";

export default function EditorPage() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-white via-white to-gray-50">
      <main className="flex flex-col items-center h-full overflow-hidden">
        <EditorHeader />
        <CodeInput />
        <Footer />
      </main>
    </div>
  );
}
