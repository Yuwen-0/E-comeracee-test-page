import type { Metadata } from "next";
import { Inter, Balsamiq_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "@/lib/theme";
import { createTheme } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const balsamiq = Balsamiq_Sans({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-balsamiq",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={balsamiq.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}