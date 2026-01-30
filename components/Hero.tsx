"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const stats = [
    { number: "08+", label: "Years Experience in Social Media Management & Advertising", icon: "💼" },
    { number: "500+", label: "Successful Ad Campaigns Delivered Worldwide", icon: "🎯" },
    { number: "100%", label: "Client Satisfaction With Result-Driven Strategies", icon: "⭐" },
  ];

  return (
    <section
      id="home"
      className="section-padding bg-background-pink pt-20 md:pt-24 relative overflow-visible"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-[28%_40%_32%] gap-8 lg:gap-12 items-end">
          {/* Left Column - Text Content */}
          <div className="space-y-5 animate-fade-in order-2 lg:order-1">
            <div className="inline-block">
              <span className="bg-white/80 backdrop-blur-sm text-gray-700 text-sm px-4 py-2 rounded-full font-medium">
                Hello, I&apos;m
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Menilou Marvida
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-700">
              Virtual Assistant, Social Media Manager & Ads Specialist
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              I help businesses grow through strategic social media management, effective ad campaigns, and reliable virtual assistance. Let&apos;s elevate your brand together.
            </p>
            <div className="pt-2">
              <button className="bg-accent-orange text-white text-base px-8 py-3.5 rounded-full font-medium hover:bg-accent-orange/90 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg">
                Hire Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Center - Hero Image (No Box, Natural Blend) */}
          <div className="order-1 lg:order-2 animate-fade-in flex justify-center items-end">
            <div className="relative w-full">
              <img
                src="/hero-image.png"
                alt="Professional portrait"
                className="w-full h-auto object-contain object-bottom"
                style={{ maxHeight: '650px' }}
                onError={(e) => {
                  // Fallback 
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="order-3 space-y-5 animate-fade-in">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={mounted ? { animationDelay: `${index * 0.15}s` } : undefined}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                    {stat.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600 leading-snug">
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
