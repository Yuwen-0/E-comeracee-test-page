import authOptions from "@/app/api/auth/[...nextauth]/options";
import {
  AppBar,
  Typography,
  Avatar,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ButtonSignOut from "./ButtonSignOut";

export default async function Navbar() {
  const OpenMenu = () => {
    //* logic to open account menu
  };
  const session = await getServerSession(authOptions);
  return (
    <nav>
      <AppBar
        sx={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingInline: "20px",
        }}
        position="static"
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          E-Commerce
        </Typography>
        <Box>
          {session?.user ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <Avatar
                  sx={{
                    bgcolor: "primary.main",
                    height: "60px",
                    width: "60px",
                  }}
                  alt="Avatar"
                  src="/avatarTest.jpg"
                />
              </IconButton>
              <ButtonSignOut></ButtonSignOut>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Link href="/sign-up">
                <Button
                  sx={{ color: "white", fontWeight: "600" }}
                  variant="contained"
                >
                  Sign Up
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  sx={{ color: "white", fontWeight: "600" }}
                  variant="contained"
                >
                  Login
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </AppBar>
    </nav>
  );
}
