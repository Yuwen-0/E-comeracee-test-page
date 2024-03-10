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

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category')|| "*";
    const name = searchParams.get('name') || "";
    const products = await db.product.findMany({
        where: {
            category: category,
            name: {
                contains: name || " ",
            },
        },
    });
    return NextResponse.json({ products });
}