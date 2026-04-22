import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function parseBlockedFingerprints(): string[] {
  const raw = process.env.BLOCKED_FINGERPRINTS ?? "";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function middleware(request: NextRequest) {
  const blocked = parseBlockedFingerprints();
  if (blocked.length === 0) {
    return NextResponse.next();
  }

  const fpId = request.cookies.get("fp_id")?.value;
  if (fpId && blocked.includes(fpId)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
  ],
};
