import { NextResponse } from "next/server";
import db from "@/lib/db";
import { hash } from "bcrypt";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, username, password } = body;

    //check if email or username exists

    const existingUser = await db.customer.findFirst({
      where: {
        OR: [
          {
            email,
          },
          {
            username,
          },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "customer already exists" },
        { status: 400 },
      );
    }

    //hash password

    const hashedPassword = await hash(password, 10);

    //create user

    const customer = await db.customer.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    const { password: _password, ...rest } = customer;

    //return user

    return NextResponse.json(
      { rest, message: "customer created successfully" },
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
  }
}
