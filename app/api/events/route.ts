import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("waterofheaven");
    const events = await db.collection("events").find({}).toArray();

    return NextResponse.json({ events });
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}
