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
  border,
  searchText,
}: {
  width: number | string | undefined;
  height: number | string | undefined;
  backgroundColor: string | undefined;
  padding: number | string | undefined;
  boxShadow: string | undefined;
  border: boolean;
  searchText: string | null | undefined;
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
