import type { Metadata } from "next";
import { Balsamiq_Sans } from "next/font/google";
import "./(main)/globals.css";
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
      <body className={balsamiq.className}>{children}</body>
    </html>
  );
}
