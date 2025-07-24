import { connectDB } from "@/lib/mongoDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: "Connected to MongoDB" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error connecting to MongoDB" },
      { status: 500 }
    );
  }
}
