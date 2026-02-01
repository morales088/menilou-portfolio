"use client";

import { useEffect, useState } from "react";

export default function Technologies() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const technologies = [
    { name: "Klaviyo", icon: "✉️" },
    { name: "Mailchimp", icon: "📧" },
    { name: "GoHighLevel", icon: "🚀" },
    { name: "ManyChat", icon: "💬" },
    { name: "Canva", icon: "🎨" },
    { name: "Shopify", icon: "🛒" },
    { name: "Facebook", icon: "📘" },
    { name: "Instagram", icon: "📷" },
    { name: "TikTok", icon: "🎵" },
    { name: "Pinterest", icon: "📌" },
    { name: "Skool", icon: "🎓" },
  ];

  return (
    <section className="section-padding bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
            PLATFORMS & TOOLS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Tools & Platforms I Use
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert in email marketing platforms, automation tools, social media management, and e-commerce solutions that streamline workflows and maximize results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="card bg-white w-24 h-24 flex flex-col items-center justify-center group cursor-pointer animate-scale-in"
              style={mounted ? { animationDelay: `${index * 0.05}s` } : undefined}
            >
              <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-125">
                {tech.icon}
              </div>
              <span className="text-xs font-medium text-gray-600 group-hover:text-accent-orange transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
