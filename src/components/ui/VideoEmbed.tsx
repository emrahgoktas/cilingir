"use client";

import { useEffect, useRef, useState } from "react";

interface VideoEmbedProps {
  youtubeId: string;
  title?: string;
}

export default function VideoEmbed({
  youtubeId,
  title = "Çilingir Hizmet Videosu",
}: VideoEmbedProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="my-6 aspect-video w-full overflow-hidden rounded-xl bg-gray-900"
    >
      {isVisible && !isPlaying && (
        <button
          onClick={() => setIsPlaying(true)}
          className="group relative h-full w-full"
          aria-label="Videoyu oynat"
        >
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/20">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:scale-110">
              <svg
                className="ml-1 h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <p className="absolute bottom-3 left-3 text-sm font-medium text-white drop-shadow">
            {title}
          </p>
        </button>
      )}
      {isVisible && isPlaying && (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {!isVisible && <div className="h-full w-full animate-pulse bg-gray-800" />}
    </div>
  );
}
