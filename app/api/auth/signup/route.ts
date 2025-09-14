import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Artisan from "@/models/Artisan";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const existing = await Artisan.findOne({ email });
  if (existing) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const artisan = await Artisan.create({ ...body, password: hashedPassword });

  const token = jwt.sign({ id: artisan._id }, process.env.JWT_SECRET!, { expiresIn: "7d" });

  return NextResponse.json({ message: "User created", token, artisan });
}
