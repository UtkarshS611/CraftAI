import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Artisan from "@/models/Artisan";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  await dbConnect();
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "Missing email or password" }, { status: 400 });
  }

  const artisan = await Artisan.findOne({ email });
  if (!artisan) return NextResponse.json({ message: "User not found" }, { status: 404 });

  const isMatch = await bcrypt.compare(password, artisan.password);
  if (!isMatch) return NextResponse.json({ message: "Invalid password" }, { status: 401 });

  const token = jwt.sign({ id: artisan._id }, process.env.JWT_SECRET!, { expiresIn: "7d" });

  return NextResponse.json({ message: "Login successful", token, artisan });
}
