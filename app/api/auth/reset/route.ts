import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Artisan from "@/models/Artisan";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  await dbConnect();
  const { email, newPassword } = await req.json();

  if (!email || !newPassword) {
    return NextResponse.json({ message: "Missing email or new password" }, { status: 400 });
  }

  const artisan = await Artisan.findOne({ email });
  if (!artisan) return NextResponse.json({ message: "User not found" }, { status: 404 });

  artisan.password = await bcrypt.hash(newPassword, 10);
  await artisan.save();

  return NextResponse.json({ message: "Password reset successful" });
}
