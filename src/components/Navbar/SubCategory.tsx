"use client";
import { Box } from "@mui/material";
import { useRef } from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

const SubCategory = ({ label }: { label: string }) => {
  const subCatRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (subCatRef.current) {
      subCatRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
  };

  const handleMouseLeave = () => {
    if (subCatRef.current) {
      subCatRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  };

  return (
    <Link href={`/search?category=${label}`}>
      <Box
        ref={subCatRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingInline: "10px",
          alignItems: "center",
          height: "100%",
          width: "100%",
          gap: "10px",
        }}
      >
        <p style={{ margin: "0", padding: "0" }}>{label}</p>
      </Box>
    </Link>
  );
};

export default SubCategory;
