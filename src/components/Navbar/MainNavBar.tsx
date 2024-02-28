import { getServerSession } from "next-auth";
import Link from "next/link";
import ButtonSignOut from "./ButtonSignOut";
import authOptions from "@/app/api/auth/[...nextauth]/options";
import {
  AppBar,
  Typography,
  Avatar,
  IconButton,
  Box,
  Button,
} from "@mui/material";

const MainNavbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}
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
    </Box>
  );
};

export default MainNavbar;
