"use client";
import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";
export default function ButtonSignOut() {
  return (
    <Button
      variant="contained"
      onClick={() => {
        void signOut();
      }}
    >
      Sign Out
    </Button>
  );
}
