import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Artisan from "@/models/Artisan";

export async function GET(req: NextRequest) {
  await dbConnect();
  const userId = req.headers.get("x-user-id");

  if (!userId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const artisan = await Artisan.findById(userId);
  return NextResponse.json({ artisan });
}
