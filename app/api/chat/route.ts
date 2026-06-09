import { NextResponse } from "next/server";
import { buildMockAnswer } from "@/lib/mock-data";

export async function POST(request: Request) {
  const body = (await request.json()) as { question?: string };
  const question = body.question?.trim();

  if (!question) {
    return NextResponse.json(
      { error: "question is required" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: buildMockAnswer(question)
  });
}
