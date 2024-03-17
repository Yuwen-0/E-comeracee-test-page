import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { value, key }: { value: string; key: string } = body;
  const customer = await db.customer.findFirst({
    where: {
      [key]: value,
    },
  });
  return NextResponse.json({ customerExists: !!customer });
}
