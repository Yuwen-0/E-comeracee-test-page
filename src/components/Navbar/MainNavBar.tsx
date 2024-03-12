"use client";
import { Typography, Box } from "@mui/material";
import AuthButtons from "./AuthButtons";
import { SessionProvider } from "next-auth/react";
import SearchBar from "../SearchBar";

const MainNavbar = ({
  width,
  height,
  backgroundColor,
  padding,
  boxShadow,
  border,
  searchText,
}: {
  width?: number | string;
  height?: number | string | null;
  backgroundColor?: string | null;
  padding?: number | string | null;
  boxShadow?: string | null;
  border?: boolean | null;
  searchText?: string | null | null;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: backgroundColor || "",
        height: height || "80px",
        width: width == "100%" ? "100%" : width || null,
        paddingInline: padding || "",
        justifyContent: "space-between",
        boxShadow: boxShadow || "0px 0px 0px 0px #000000",
        borderBottom: border ? "1px solid black" : "none",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontFamily: "monospace" }}
      >
        Boundless
      </Typography>

      <SearchBar searchText={searchText || ""} />

      <SessionProvider>
        <AuthButtons />
      </SessionProvider>
    </Box>
  );
};

export default MainNavbar;
