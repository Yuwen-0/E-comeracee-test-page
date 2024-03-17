import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import db from "@/lib/db";

export async function POST(request: Request,searchparams:any) {
    const session = await getServerSession();
    
    const avatarFile = searchparams;
    console.log(avatarFile);
    if (!session?.user) {
        return NextResponse.json({ success: false, error: "User not authenticated" });
    }
    if (!avatarFile) {
        return NextResponse.json({ success: false, error: "No file provided" });
    }
    const customer = await db.customer.update({
        where: {
            email: session?.user?.email as string,
        },
        data: {
            avatar: JSON.stringify(avatarFile),
        },
    });
    return NextResponse.json({ file: avatarFile,customer:customer, success: true});
}

