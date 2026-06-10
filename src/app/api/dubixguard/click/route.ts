import { NextRequest, NextResponse } from "next/server";

const UPSTREAM = "https://alucansrl.com/api/v1/click";

export async function POST(request: NextRequest) {
  const token =
    request.nextUrl.searchParams.get("t") ??
    request.headers.get("x-api-key");

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const body = await request.arrayBuffer();

  try {
    const upstream = await fetch(
      `${UPSTREAM}?t=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": token,
        },
        body,
      }
    );

    return new NextResponse(null, { status: upstream.status });
  } catch {
    return NextResponse.json({ error: "Upstream failed" }, { status: 502 });
  }
}
