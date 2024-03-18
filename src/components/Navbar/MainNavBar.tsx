"use client";
import { Typography, Box, Button } from "@mui/material";
import AuthButtons from "./AuthButtons";
import { SessionProvider } from "next-auth/react";
import SearchBar from "../SearchBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
        sx={{ padding: 0, margin: 0, width: 100, height: "100%" }}
      >
        <Image priority src="/icon.png" alt="logo" width={100} height={0} />
      </Button>

      <SearchBar searchText={searchText || ""} />

      <SessionProvider>
        <AuthButtons />
      </SessionProvider>
    </Box>
  );
};

export default MainNavbar;
