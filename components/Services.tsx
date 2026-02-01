"use client";

import { useEffect, useState } from "react";

export default function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const services = [
    {
      title: "Social Media Marketing",
      description:
        "Strategic social media management across Facebook, Instagram, TikTok, and Pinterest. Content creation, community engagement, and campaigns that boost brand visibility and drive sales.",
      icon: "📱",
      bgColor: "bg-pink-50",
    },
    {
      title: "Email Marketing",
      description:
        "Automated email campaigns using Klaviyo, Mailchimp, and HighLevel. From welcome sequences to abandoned cart flows, I create emails that convert and nurture leads effectively.",
      icon: "✉️",
      bgColor: "bg-blue-50",
    },
    {
      title: "Content & Design",
      description:
        "High-quality visuals, video editing, and copywriting that aligns with your brand. From social graphics to reel scripts, I create content that captures attention and drives engagement.",
      icon: "✨",
      bgColor: "bg-purple-50",
    },
    {
      title: "Lead Generation & Funnels",
      description:
        "Strategic lead generation campaigns, funnel design using GoHighLevel, and marketing automation with ManyChat. Convert prospects into customers with proven systems.",
      icon: "🎯",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
            WHAT I OFFER
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Services That Drive Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive social media and advertising solutions tailored to grow your business and engage your audience effectively.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card ${service.bgColor} group cursor-pointer animate-scale-in`}
              style={mounted ? { animationDelay: `${index * 0.1}s` } : undefined}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
