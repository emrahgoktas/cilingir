import { GoogleReviewCta } from "@/components/ui/GoogleReviewCta";
import {
  getGoogleMapsPlaceUrl,
  getPlaceRating,
  getPlaceReviews,
  type PlaceReview,
} from "@/lib/google-places";

const MAX_REVIEWS = 5;
const MAX_TEXT_LEN = 180;

function truncateText(text: string, max: number): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max).trim()}...`;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (
      parts[0]![0]! + parts[parts.length - 1]![0]!
    ).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase() || "?";
}

function sortByRatingDesc(reviews: PlaceReview[]): PlaceReview[] {
  return [...reviews].sort((a, b) => b.rating - a.rating);
}

function StarRow({ rating }: { rating: number }) {
  const full = Math.round(Math.min(5, Math.max(0, rating)));
  return (
    <div className="flex gap-0.5 text-base leading-none" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < full ? "text-accent" : "text-muted/40"}
        >
          {i < full ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export async function ReviewsSection() {
  const [reviews, summary] = await Promise.all([
    getPlaceReviews(),
    getPlaceRating(),
  ]);

  if (!reviews.length) {
    return null;
  }

  const display = sortByRatingDesc(reviews).slice(0, MAX_REVIEWS);
  const mapsUrl = getGoogleMapsPlaceUrl();

  return (
    <section className="overflow-x-hidden border-t border-border bg-surface px-4 py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-6xl w-full">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">
          Müşterimiz Ne Diyor?
        </h2>

        {summary ? (
          <p className="mt-6 flex justify-center text-center text-sm md:text-base">
            <span className="inline-flex max-w-full min-w-0 flex-wrap items-center justify-center gap-x-1 break-words rounded-full border border-border bg-white px-4 py-2 font-medium text-primary shadow-sm">
              <span className="text-accent" aria-hidden>
                ★
              </span>
              <span>{summary.rating.toFixed(1)} · {summary.total} </span>
              {mapsUrl ? (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#4285F4] underline-offset-2 hover:underline"
                >
                  Google
                </a>
              ) : (
                <span>Google</span>
              )}
              <span> Yorumu</span>
            </span>
          </p>
        ) : null}

        <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {display.map((review) => (
            <li key={`${review.author_name}-${review.time}`} className="min-w-0">
              <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-white p-4 shadow-sm">
                <div className="flex gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mid text-sm font-bold text-white"
                    aria-hidden
                  >
                    {getInitials(review.author_name)}
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <p className="break-words font-bold text-primary">
                      {review.author_name}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <StarRow rating={review.rating} />
                      <span className="text-sm text-muted">
                        {review.relative_time_description}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 overflow-hidden break-words text-sm leading-relaxed text-primary/90">
                  {truncateText(review.text, MAX_TEXT_LEN)}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <GoogleReviewCta className="mt-10 md:mt-12" />
      </div>
    </section>
  );
}
