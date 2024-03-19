"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <Box>
      <SessionProvider>
        <UserName />
      </SessionProvider>
    </Box>
  );
}

function UserName() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div>
        <p className="text-red-500">You are not signed in</p>
      </div>
    );
  }
  return (
    <div>
      <p className="text-green-500">Signed in as {session.user.username}</p>
    </div>
  );
}
