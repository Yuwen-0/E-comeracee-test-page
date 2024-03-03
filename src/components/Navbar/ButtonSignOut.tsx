"use client";
import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";
import authOptions from "@/app/api/auth/[...nextauth]/options";
export default function ButtonSignOut() {
  return (
    <Button
      variant="contained"
      onClick={() => {
        signOut();
      }}
    >
      Sign Out
    </Button>
  );
}
