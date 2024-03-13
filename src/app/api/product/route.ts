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
  
    // Sanitize and validate user input (optional but recommended)
    const sanitizedName = searchParams.get('name')?.split(',').map(item => item.trim().toLowerCase()) || [];
    const sanitizedCategory = searchParams.get('category')?.split(',').map(item => item.trim().toLowerCase()) || [];
  
    // Construct flexible WHERE clause with OR and AND operators
    const whereClause = [];
  
    // Filter by name (optional, case-insensitive)
    if (sanitizedName.length > 0) {
      whereClause.push({
        OR: sanitizedName.map(name => ({ name: { contains: name, mode: "insensitive" } })),
      });
    }
  
    // Filter by category (optional, case-insensitive)
    if (sanitizedCategory.length > 0) {
      whereClause.push({
        OR: sanitizedCategory.map(category => ({ category: { contains: category, mode: "insensitive" } })),
      });
    }
  
    // Combine AND and OR clauses using logical operators (if needed)
    // For example, to find products matching both "laptop" and "Dell":
    // const whereClause = [
    //   { OR: [...name filters...] },
    //   { category: { equals: "laptop" } } // Filter by exact category (optional)
    // ];
  
    const products = await db.product.findMany({
      where: {
        // Combine WHERE clauses using AND operator (optional)
        AND: whereClause as any, // Replace with appropriate operator(s) if needed
      },
    });
  
    return NextResponse.json({ products });
  }