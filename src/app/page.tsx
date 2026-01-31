"use client";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import LandingFooter from "@/components/landing/Footer";
import SupportDialog from "@/components/landing/SupportDialog";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <Navbar />
      <main className="flex min-h-screen flex-col justify-between pb-0">
        <Hero />
        <LandingFooter />
      </main>
      <SupportDialog />
    </div>
  );
}
