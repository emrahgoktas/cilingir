"use client";

import { useEffect } from "react";
import type { Region } from "@/data/regions";
import { trackPageRegionView } from "@/lib/events";

type Props = { region: Region };

export function RegionPageViewTracker({ region }: Props) {
  useEffect(() => {
    trackPageRegionView({
      region_name: region.name,
      region_slug: region.slug,
      region_priority: region.priority,
    });
  }, [region.name, region.priority, region.slug]);

  return null;
}
