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
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Avatar
              sx={{ bgcolor: "primary.main", height: "60px", width: "60px" }}
              alt="Avatar"
              src="/avatarTest.jpg"
            />
          </IconButton>
          {session?.user ? (
            <ButtonSignOut></ButtonSignOut>
          ) : (
            <Link href="/sign-up">
              <Button variant="contained">Sign Up</Button>
            </Link>
          )}
        </Box>
      </AppBar>
    </nav>
  );
}
