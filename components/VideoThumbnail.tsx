"use client";

import { useState, useRef } from "react";

interface VideoThumbnailProps {
  videoUrl: string;
  alt: string;
  caption?: string;
}

export default function VideoThumbnail({ videoUrl, alt, caption }: VideoThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  return (
    <>
      {/* Thumbnail View */}
      {!isPlaying && (
        <div className="relative group cursor-pointer" onClick={handlePlay}>
          <div className="aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-contain"
              preload="metadata"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          {caption && (
            <p className="mt-2 text-sm text-gray-600 text-center">{caption}</p>
          )}
        </div>
      )}

      {/* Modal/Fullscreen Player */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-auto">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="fixed top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6 text-white"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}

          {/* Video Player - Vertical (9:16) optimized */}
          <div className="relative w-full max-w-[500px] mx-auto">
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg"
              controls
              controlsList="nodownload"
              playsInline
              onCanPlay={handleCanPlay}
              onEnded={() => setIsPlaying(false)}
              style={{ maxHeight: '90vh' }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
