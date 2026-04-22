import { getGoogleReviewUrl } from "@/lib/google-places";

type GoogleReviewCtaProps = {
  className?: string;
};

export function GoogleReviewCta({ className }: GoogleReviewCtaProps) {
  const href = getGoogleReviewUrl();

  return (
    <div
      className={`flex flex-col items-center text-center ${className ?? ""}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border-2 border-mid px-6 py-3 font-semibold text-mid transition-colors hover:bg-mid hover:text-white"
      >
        <span aria-hidden>⭐</span>
        <span className="ml-1.5">Google&apos;da Yorum Bırakın</span>
      </a>
      <p className="mt-3 max-w-md text-sm text-muted">
        Deneyiminizi paylaşın, başkalarına yardımcı olun
      </p>
    </div>
  );
}
