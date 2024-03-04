"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { Box, Typography, Link as Mlink, Button } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import SubCategory from "@/components/Navbar/SubCategory";
import { useRef, useState } from "react";
import Link from "next/link";
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
