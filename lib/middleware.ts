import { NextRequest, NextResponse } from "next/server";


import jwt from "jsonwebtoken";

export async function middleware(req: NextRequest) {
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    // Optionally attach decoded user info to request headers
    req.headers.set("x-user-id", (decoded as any).id);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}

// Apply to protected routes
export const config = {
  matcher: ["/api/protected/:path*"], // all API routes under /api/protected
};
