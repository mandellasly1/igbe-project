import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;

    // Use the existing MongoDB database
    const db = client.db("waterofheaven");

    // Get Igbe documentary sections from the new collections
    const history = await db.collection("igbe_history").find({}).toArray();
    const beliefs = await db.collection("igbe_beliefs").find({}).toArray();
    const worship = await db.collection("igbe_worship").find({}).toArray();
    const culture = await db.collection("igbe_culture").find({}).toArray();
    const leadership = await db.collection("igbe_leadership").find({}).toArray();
    const timeline = await db.collection("igbe_timeline").find({}).toArray();

    return NextResponse.json({
      history,
      beliefs,
      worship,
      culture,
      leadership,
      timeline,
    });
  } catch (error) {
    console.error("Igbe API error:", error);

    return NextResponse.json(
      { error: "Failed to load Igbe documentary data" },
      { status: 500 }
    );
  }
}