"use client";
import { useState } from "react";

export type LazyMapProps = {
  embedSrc: string;
  mapHeight?: number;
  title: string;
  className?: string;
};

export function LazyMap({
  embedSrc,
  mapHeight = 400,
  title,
  className = "",
}: LazyMapProps) {
  const [clicked, setClicked] = useState(false);

  if (!clicked) {
    return (
      <div
        onClick={() => setClicked(true)}
        className={`relative cursor-pointer w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center ${className}`}
        style={{ minHeight: mapHeight }}
      >
        <div className="text-center text-gray-600">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-medium">Haritayı Göster</span>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={embedSrc}
      title={title}
      width="100%"
      height={mapHeight}
      className={`w-full rounded-lg border-0 ${className}`}
      style={{ minHeight: mapHeight }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
