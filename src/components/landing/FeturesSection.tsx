import React from "react";
import {
  FaCode,
  FaPalette,
  FaDownload,
  FaBolt,
  FaCheckCircle,
  FaImage,
} from "react-icons/fa";

const FeturesSection = () => {
  const highlights = [
    {
      title: "20+ Premium Themes",
      description:
        "From classic dark to modern gradients find the perfect look for your code.",
      icon: <FaPalette className="text-indigo-600" />,
    },
    {
      title: "100% Free Forever",
      description:
        "No hidden fees, no credit card required. Unlimited exports for everyone.",
      icon: <FaCheckCircle className="text-emerald-600" />,
    },
    {
      title: "Instant PNG Export",
      description:
        "High-resolution downloads ready for presentations, docs, and social media.",
      icon: <FaDownload className="text-amber-600" />,
    },
    {
      title: "Live Preview",
      description:
        "See every change in real-time before exporting your beautiful code snippet.",
      icon: <FaBolt className="text-purple-600" />,
    },
    {
      title: "Multiple Languages",
      description:
        "Full support for JavaScript, Python, TypeScript, Rust, Go, and more.",
      icon: <FaCode className="text-blue-600" />,
    },
    {
      title: "20+ Backgrounds",
      description:
        "Choose from stunning gradients ranging from vibrant sunsets to elegant monochromes.",
      icon: <FaImage className="text-pink-600" />,
    },
  ];

  return (
    <div className="w-full max-w-6xl mt-10 space-y-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Everything you need to create stunning code visuals
        </h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Professional grade features, zero learning curve. Get started in
          seconds.
        </p>
      </div>

      <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="group relative flex flex-col items-start gap-3 rounded-2xl border bg-white/70 p-6 text-left shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:border-white/10 dark:bg-gray-900/60"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white to-gray-50 text-2xl shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <div className="space-y-1">
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {item.title}
              </p>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeturesSection;
