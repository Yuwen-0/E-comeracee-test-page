"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeOptions } from "@/lib/theme";
import { ReactNode } from "react"; // Import ReactNode type

const Theme = ({ children }: { children: ReactNode }) => {
  // Explicitly type children as ReactNode
  const theme = createTheme(themeOptions);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
