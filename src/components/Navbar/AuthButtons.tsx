"use client";
import { Avatar, Box, Button, IconButton } from "@mui/material";
import ButtonSignOut from "@/components/Navbar/ButtonSignOut";
import Link from "next/link";
import { useSession } from "next-auth/react";
const AuthButtons = () => {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <>
          <Box
            width={180}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="small"
              aria-label="account of current user"
              color="inherit"
              sx={{ mr: 2, padding: 0 }}
            >
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                }}
                alt="Avatar"
                src="/avatarTest.jpg"
              />
            </IconButton>
            <ButtonSignOut />
          </Box>
        </>
      ) : (
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Link href="/sign-up">
            <Button
              color="secondary"
              variant="outlined"
              sx={{ background: "secondary.main", fontWeight: "600" }}
            >
              Sign Up
            </Button>
          </Link>
          <Link href="/login">
            <Button
              color="secondary"
              sx={{ fontWeight: "600" }}
              variant="outlined"
            >
              Login
            </Button>
          </Link>
        </Box>
      )}
    </>
  );
};

export default AuthButtons;
