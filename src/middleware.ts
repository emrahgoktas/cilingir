import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PPC_FRAUD_SIGNATURES = [
  "PetalBot",
  "SemrushBot",
  "AhrefsBot",
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "DataForSeoBot",
  "serpstatbot",
  "rogerbot",
  "linkdexbot",
  "Baiduspider",
  "YandexBot",
  "archive.org_bot",
  "ia_archiver",
] as const;

/** Aynı fp_id için pencere başına üst istek sınırı (10 sn içinde en fazla bu kadar). */
const MAX_REQUESTS_PER_WINDOW = 10;
const WINDOW_MS = 10000;
const FP_RL_COOKIE = "fp_rl";

function parseBlockedFingerprints(): string[] {
  const raw = process.env.BLOCKED_FINGERPRINTS ?? "";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function isPpcFraudBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return PPC_FRAUD_SIGNATURES.some((sig) =>
    ua.includes(sig.toLowerCase())
  );
}

function applyFpRateLimit(
  request: NextRequest,
  response: NextResponse
): NextResponse | null {
  const fpId = request.cookies.get("fp_id")?.value;
  if (!fpId) return null;

  const now = Date.now();
  const bucket = Math.floor(now / WINDOW_MS);
  const raw = request.cookies.get(FP_RL_COOKIE)?.value ?? "";
  let count = 1;

  if (raw) {
    const parts = raw.split(":");
    const storedFp = parts[0] ?? "";
    const storedBucket = Number(parts[1]);
    const prev = Number(parts[2]);
    if (
      storedFp === fpId &&
      storedBucket === bucket &&
      Number.isFinite(prev)
    ) {
      count = prev + 1;
    }
  }

  if (count > MAX_REQUESTS_PER_WINDOW) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  response.cookies.set(FP_RL_COOKIE, `${fpId}:${bucket}:${count}`, {
    path: "/",
    maxAge: 120,
    httpOnly: true,
    sameSite: "lax",
  });

  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isNextInternal =
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    request.nextUrl.searchParams.has("_rsc");

  if (isNextInternal) {
    return NextResponse.next();
  }

  const ua = request.headers.get("user-agent") ?? "";

  if (isPpcFraudBot(ua)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (!ua || ua.length < 20) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const blocked = parseBlockedFingerprints();
  const fpId = request.cookies.get("fp_id")?.value;
  if (fpId && blocked.length > 0 && blocked.includes(fpId)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const response = NextResponse.next();
  const rateLimited = applyFpRateLimit(request, response);
  if (rateLimited) return rateLimited;

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
  ],
};
