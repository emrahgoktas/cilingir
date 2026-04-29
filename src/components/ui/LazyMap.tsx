"use client";

import { useEffect, useRef, useState } from "react";

export type LazyMapProps = {
  embedSrc: string;
  mapHeight: number;
  title: string;
  className?: string;
};

/**
 * Harita iframe’ini yalnızca görünür alana yaklaşınca yükler (LCP / ana iş parçacığı rahatlar).
 */
export function LazyMap({
  embedSrc,
  mapHeight,
  title,
  className = "",
}: LazyMapProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative min-h-0 w-full ${className}`}>
      {!isVisible ? (
        <div
          className="flex w-full animate-pulse flex-col justify-center rounded-xl bg-surface/80"
          style={{ minHeight: mapHeight }}
          aria-hidden
        >
          <span className="sr-only">Harita yükleniyor</span>
          <div className="mx-auto h-12 w-12 rounded-full bg-mid/30" />
          <p className="mt-4 text-center text-xs text-muted">
            Harita kaydırınca yüklenecek
          </p>
        </div>
      ) : (
        <iframe
          src={embedSrc}
          width="100%"
          height={mapHeight}
          style={{
            border: 0,
            borderRadius: "12px",
            minHeight: mapHeight,
          }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="w-full max-w-full bg-surface/50"
        />
      )}
    </div>
  );
}
