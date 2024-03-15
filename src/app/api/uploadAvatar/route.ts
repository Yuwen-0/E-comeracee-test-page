import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import db from "@/lib/db";

export async function POST(request: Request) {
    const session = await getServerSession();
    if (!session?.user?.email) {
        return NextResponse.json({ success: false, error: "User not authenticated" });
    }
    const avatarFile = await request.formData();

    const file = avatarFile.get("file") as File;
    if (!file) {
        return NextResponse.json({ success: false, error: "No file provided" });
    }
    await db.customer.update({
        where: {
            email: session?.user?.email as string,
        },
        data: {
            avatar: JSON.stringify(file),
        },
    });
    return NextResponse.json({ success: true });
}

