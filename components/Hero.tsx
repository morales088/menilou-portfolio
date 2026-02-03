"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const stats = [
    { number: "4+", label: "Years Experience in Social Media Management & Advertising", icon: "💼" },
    { number: "15+", label: "Successful Client Projects Across Multiple Industries", icon: "🎯" },
    { number: "100%", label: "Client Satisfaction With Result-Driven Strategies", icon: "⭐" },
  ];

  return (
    <section
      id="home"
      className="bg-background-pink pt-20 md:pt-24 pb-12 md:pb-16 lg:section-padding relative overflow-visible"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:grid lg:grid-cols-[28%_40%_32%] gap-6 md:gap-8 lg:gap-12 lg:items-center">
          {/* Mobile Order 1 / Desktop Order 1 - Text Content */}
          <div className="space-y-4 md:space-y-4 lg:space-y-5 animate-fade-in order-1 text-center lg:text-left">
            <div className="inline-block">
              <span className="bg-white/80 backdrop-blur-sm text-gray-700 text-sm md:text-sm px-4 md:px-4 py-2 md:py-2 rounded-full font-medium">
                Hello, I&apos;m
              </span>
            </div>
            <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
              Menilou Marvida
            </h1>
            <h2 className="text-lg md:text-lg lg:text-xl font-semibold text-gray-800 leading-snug">
              Marketing Strategist | Social Media & Email Marketing Expert
            </h2>
            <p className="text-base md:text-base text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Results-driven marketing strategist with 4 years of experience boosting sales and brand visibility through data-driven digital campaigns. Specialized in social media management, email marketing, and lead generation that delivers measurable business growth.
            </p>
            <div className="pt-2 md:pt-4 flex justify-center lg:justify-start">
              <a
                href="https://wa.me/639311816804?text=Hi%20Menilou,%20I'd%20like%20to%20discuss%20a%20project%20with%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-orange text-white text-base md:text-base px-8 md:px-8 py-3 md:py-3.5 rounded-full font-medium hover:bg-accent-orange/90 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Hire Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Order 2 / Desktop Order 2 - Hero Image */}
          <div className="order-2 animate-fade-in flex justify-center items-end -mx-4 md:mx-0">
            <div className="relative w-full">
              <img
                src="/hero-image.png"
                alt="Professional portrait"
                className="w-full h-auto object-contain object-bottom"
                style={{ maxHeight: '85vh' }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Mobile Order 3 / Desktop Order 3 - Stats Cards */}
          <div className="order-3 space-y-6 md:space-y-8 animate-fade-in flex flex-col items-center lg:items-start">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="transition-all duration-300 animate-slide-up w-full max-w-md lg:max-w-none"
                style={mounted ? { animationDelay: `${index * 0.15}s` } : undefined}
              >
                <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center text-2xl md:text-3xl flex-shrink-0 shadow-md">
                    {stat.icon}
                  </div>
                  <div className="flex-1 min-w-0 text-center lg:text-left">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 md:mb-2 leading-none">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-gray-700 leading-tight font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
