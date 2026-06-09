import { NextResponse } from "next/server";
import { activeVersion, sampleDocuments } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    activeVersion,
    documents: sampleDocuments
  });
}
