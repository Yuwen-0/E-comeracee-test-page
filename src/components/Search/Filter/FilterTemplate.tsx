"use client";
import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";

export default function FilterTemplate({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const TitleRef = useRef<HTMLSpanElement>(null);
  const ContentRef = useRef<HTMLDivElement>(null);
  const HideContent = (e: any) => {
    e.preventDefault();
    setOpen(!open);
    if (TitleRef.current) {
      TitleRef.current.style.transform = open
        ? "rotate(0deg)"
        : "rotate(-90deg)";
    }
  };
  return (
    <Box>
      <Typography
        sx={{ paddingInline: "10px", cursor: "pointer" }}
        fontWeight={"bold"}
        fontSize={"20px"}
        color={"text.secondary"}
        display={"flex"}
        alignItems={"center"}
        onClick={HideContent}
      >
        <span
          style={{
            paddingInline: "7px",
            transform: open ? "rotate(0deg)" : "rotate(-90deg)",
          }}
          ref={TitleRef}
        >
          ▼
        </span>
        {title}
      </Typography>
      <Box sx={{ display: open ? "block" : "none" }} ref={ContentRef}>
        {children}
      </Box>
    </Box>
  );
}
