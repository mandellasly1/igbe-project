import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("waterofheaven");

    const event = await db
      .collection("events")
      .findOne({ _id: new ObjectId(params.id) });

    if (!event) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ event });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid event ID" },
      { status: 400 }
    );
  }
}
