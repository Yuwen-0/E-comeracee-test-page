"use client";
import { Typography, Box } from "@mui/material";
import AuthButtons from "./AuthButtons";
import { SessionProvider } from "next-auth/react";
import SearchBar from "../SearchBar";

const MainNavbar = ({
  width = undefined,
  height = undefined,
  backgroundColor = undefined,
  padding = undefined,
  boxShadow = undefined,
}: {
  width: number | string | undefined;
  height: number | string | undefined;
  backgroundColor: string | undefined;
  padding: number | string | undefined;
  boxShadow: string | undefined;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        backgroundColor: backgroundColor || "",
        height: height || "80px",
        width: width || "100%",
        padding: padding || "",
        justifyContent: "space-between",
        boxShadow: boxShadow || "0px 0px 0px 0px #000000",
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
