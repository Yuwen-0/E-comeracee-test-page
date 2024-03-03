import Link from "next/link";
import ButtonSignOut from "./ButtonSignOut";
import { Typography, Avatar, IconButton, Box, Button } from "@mui/material";
import authOptions from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

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
        Boundless
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
            <ButtonSignOut />
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
      </Box>
    </Box>
  );
};

export default MainNavbar;
