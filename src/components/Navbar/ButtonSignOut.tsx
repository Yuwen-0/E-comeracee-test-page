"use client";
import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";
export default function ButtonSignOut() {
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={() => {
        signOut();
      }}
    >
      Sign Out
    </Button>
  );
}
