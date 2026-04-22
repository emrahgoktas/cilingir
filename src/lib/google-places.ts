export type PlaceReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
};

type PlaceDetailsResponse = {
  status?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: PlaceReview[];
  };
};

export async function getPlaceReviews(): Promise<PlaceReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return [];

  const params = new URLSearchParams({
    place_id: placeId,
    fields: "reviews,rating,user_ratings_total",
    language: "tr",
    key: apiKey,
  });

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`,
    { next: { revalidate: 3600 } }
  );

  const data = (await res.json()) as PlaceDetailsResponse;
  if (data.status !== "OK" || !data.result?.reviews?.length) {
    return [];
  }

  return data.result.reviews;
}

export async function getPlaceRating(): Promise<{
  rating: number;
  total: number;
} | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  const params = new URLSearchParams({
    place_id: placeId,
    fields: "rating,user_ratings_total",
    language: "tr",
    key: apiKey,
  });

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`,
    { next: { revalidate: 3600 } }
  );

  const data = (await res.json()) as PlaceDetailsResponse;
  if (data.status !== "OK" || !data.result) return null;

  const rating = data.result.rating;
  const total = data.result.user_ratings_total;
  if (typeof rating !== "number" || typeof total !== "number") {
    return null;
  }

  return { rating, total };
}

/** Server-only: Google Haritalar işletme sayfası (Place ID). */
export function getGoogleMapsPlaceUrl(): string | null {
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!placeId) return null;
  return `https://www.google.com/maps/search/?api=1&query_place_id=${encodeURIComponent(placeId)}`;
}

/** Google işletme yorumu bırakma URL’si (Place ID yoksa genel Haritalar). */
export function getGoogleReviewUrl(): string {
  const placeId = process.env.GOOGLE_PLACE_ID;
  return placeId
    ? `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`
    : "https://maps.google.com";
}
