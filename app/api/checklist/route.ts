import { NextResponse } from "next/server";
import { checklistTemplate } from "@/lib/mock-data";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    serviceType?: string;
    action?: string;
    customerName?: string;
  };

  const serviceType = body.serviceType?.trim();
  const action = body.action?.trim();

  if (!serviceType || !action) {
    return NextResponse.json(
      { error: "serviceType and action are required" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    items: checklistTemplate.map((item) => ({
      ...item,
      detail: `${item.detail} Context: ${action} for ${body.customerName ?? "target customer"} on ${serviceType}.`
    }))
  });
}
