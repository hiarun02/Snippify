import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <Navbar />
      <main className="flex flex-col gap-16 pb-24">
        <Hero />
      </main>
    </div>
  );
}
