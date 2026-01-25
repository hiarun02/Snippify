"use client";
import CodeInput from "@/components/CodeInput";
import EditorHeader from "@/components/EditorHeader";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pb-24 px-4 max-sm:px-0">
      <EditorHeader />
      <CodeInput />
    </main>
  );
}
