import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email } = body;

  const client = await clientPromise;
  const db = client.db("waterofheaven");
  const members = db.collection("members");

  await members.insertOne({ name, email, joinedAt: new Date() });

  return NextResponse.json({ success: true, message: "Member added" });
}

export async function GET() {
  const client = await clientPromise;
  const db = client.db("waterofheaven");
  const members = db.collection("members");

  const allMembers = await members.find({}).toArray();

  return NextResponse.json(allMembers);
}
