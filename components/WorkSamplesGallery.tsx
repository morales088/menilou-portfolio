"use client";

import VideoThumbnail from "./VideoThumbnail";
import { Media } from "@/lib/clientsData";

interface WorkSamplesGalleryProps {
  videos: Media[];
  title?: string;
}

export default function WorkSamplesGallery({ 
  videos, 
  title = "Additional Work Samples" 
}: WorkSamplesGalleryProps) {
  if (videos.length === 0) return null;

  return (
    <section className="mt-20 pt-12 border-t border-gray-200">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        <p className="text-gray-600">
          View additional work samples and examples from this project
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoThumbnail
            key={index}
            videoUrl={video.url}
            alt={video.alt}
            caption={video.alt}
          />
        ))}
      </div>
    </section>
  );
}
