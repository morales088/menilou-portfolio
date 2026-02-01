"use client";

import { useEffect, useState } from "react";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const portfolioItems = [
    {
      title: "Australian Fitness Coach",
      category: "Social Media & Lead Generation",
      image: "🏋️",
    },
    {
      title: "US Real Estate Lawyer",
      category: "Email Marketing & Community Management",
      image: "🏛️",
    },
    {
      title: "Pet Wellness Shop",
      category: "GHL Funnels & Automation",
      image: "🐾",
    },
    {
      title: "E-commerce Brands",
      category: "Shopify & Email Marketing",
      image: "🛍️",
    },
    {
      title: "International Swimwear",
      category: "Influencer Marketing & Pinterest",
      image: "👙",
    },
    {
      title: "US Restaurant",
      category: "Social Media Strategy & Analytics",
      image: "🍽️",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-background-dark">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white">
            Real Results for Real Businesses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From fitness coaches to e-commerce brands, I&apos;ve delivered measurable growth across diverse industries through strategic marketing campaigns.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800 aspect-square cursor-pointer animate-scale-in"
                style={mounted ? { animationDelay: `${index * 0.1}s` } : undefined}
              >
              <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-gray-700 to-gray-900 transition-transform duration-500 group-hover:scale-110">
                {item.image}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-gray-400 mb-6 text-lg">
            Explore more case studies and campaign results
          </p>
          <button className="btn-primary">VIEW ALL CASE STUDIES</button>
        </div>
      </div>
    </section>
  );
}
