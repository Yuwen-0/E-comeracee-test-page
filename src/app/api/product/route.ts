import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { ...productData } = await request.json();
    const product = await db.product.create({
        data: {
            ...productData,
        },
    });
    return NextResponse.json({ product });
}