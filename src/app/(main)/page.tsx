import Image from "next/image";
import Link from "next/link";
import authOptions from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { Typography } from "@mui/material";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <div>
        <h1>Hello {session.user.username}</h1>
        <Typography>{session.user.email}</Typography>
        <Link href="/logout">Logout</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Hello </h1>
      <Link href="/login">Login</Link>
    </div>
  );
}
