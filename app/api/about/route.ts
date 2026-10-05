import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("waterofheaven");

    const about = await db.collection("about").findOne({ page: "about" });

    if (!about) {
      return NextResponse.json(
        { error: "About page content not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(about);
  } catch (error) {
    console.error("Failed to fetch About page:", error);

    return NextResponse.json(
      { error: "Failed to fetch About page content" },
      { status: 500 }
    );
  }
}

