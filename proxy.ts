import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/"],
};
