"use client";
import { useState } from "react";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
}

export function LiteYouTube({ videoId, title }: LiteYouTubeProps) {
  const [clicked, setClicked] = useState(false);

  if (!clicked) {
    return (
      <div
        onClick={() => setClicked(true)}
        className="relative cursor-pointer aspect-video bg-black rounded-lg overflow-hidden"
        style={{ maxWidth: "100%" }}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full aspect-video rounded-lg"
    />
  );
}
