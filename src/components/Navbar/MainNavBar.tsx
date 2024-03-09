"use client";
import { Typography, Box } from "@mui/material";
import AuthButtons from "./AuthButtons";
import { SessionProvider } from "next-auth/react";
import SearchBar from "../SearchBar";

const MainNavbar = () => {
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
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontFamily: "monospace" }}
      >
        Boundless
      </Typography>

      <SearchBar />

      <SessionProvider>
        <AuthButtons />
      </SessionProvider>
    </Box>
  );
};

export default MainNavbar;
