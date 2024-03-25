"use client";
import { Typography, Box, Button } from "@mui/material";
import AuthButtons from "./AuthButtons";
import { SessionProvider } from "next-auth/react";
import SearchBar from "../Search/SearchBar";
import { useRouter } from "next/navigation";

const MainNavBar = ({
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
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: backgroundColor || "",
        height: height || "80px",
        width: width == "100%" ? "100%" : width || null,
        padding: padding || "",
        justifyContent: "space-between",
        boxShadow: boxShadow || "0px 0px 0px 0px #000000",
        borderBottom: border ? "1px solid black" : "none",
      }}
    >
      <Button
        onClick={() => router.push("/")}
        sx={{ padding: 0, margin: 0, width: 100 }}
        color="secondary"
      >
        <Typography fontWeight={"bold"}>Boundless</Typography>
      </Button>
      <SearchBar searchText={searchText || ""} />
      <SessionProvider>
        <AuthButtons />
      </SessionProvider>
    </Box>
  );
};

export default MainNavBar;
