"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface ClientCardProps {
  client: {
    id: string;
    slug: string;
    name: string;
    industry: string;
    coverImage: string;
    services: { name: string }[];
  };
  index: number;
  mounted: boolean;
}

export default function ClientCard({ client, index, mounted }: ClientCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={`/clients/${client.slug}`}
      className="group cursor-pointer animate-scale-in block"
      style={mounted ? { animationDelay: `${index * 0.1}s` } : undefined}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gray-200 aspect-square mb-4 md:mb-6">
        {!imageError ? (
          <Image
            src={client.coverImage}
            alt={client.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
            <div className="text-center p-6">
              <div className="text-6xl mb-4">📁</div>
              <p className="text-white text-sm">
                Add {client.name.toLowerCase()} images
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Text Content Below Image */}
      <div className="px-2">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2 group-hover:text-accent-orange transition-colors">
          {client.name}
        </h3>
        <p className="text-gray-400 text-sm md:text-base">
          {client.services.map((s) => s.name).join(", ")}
        </p>
      </div>
    </Link>
  );
}
