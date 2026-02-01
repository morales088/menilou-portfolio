"use client";

import { useEffect, useState } from "react";
import { clientsData } from "@/lib/clientsData";
import ClientCard from "./ClientCard";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="portfolio" className="py-12 md:py-20 lg:py-24 bg-background-dark">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-xs md:text-sm font-semibold text-accent-orange uppercase tracking-wider">
            QUALITY WORK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6 text-white leading-tight">
            Some of our <span className="text-accent-orange">Finest</span> Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-4">
            From fitness coaches to e-commerce brands, I&apos;ve delivered measurable growth across diverse industries through strategic marketing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
          {clientsData.map((client, index) => (
            <ClientCard
              key={client.id}
              client={client}
              index={index}
              mounted={mounted}
            />
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-gray-400 mb-6 text-base md:text-lg">
            Click any client to see detailed work samples and results
          </p>
        </div>
      </div>
    </section>
  );
}
