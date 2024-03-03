import { Avatar, Box, Button, IconButton } from "@mui/material";
import ButtonSignOut from "@/components/Navbar/ButtonSignOut";
import Link from "next/link";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/[...nextauth]/options";

const AuthButtons = async () => {
  const session: any = await getServerSession(authOptions);
  return (
    <>
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
    </>
  );
};

export default AuthButtons;
