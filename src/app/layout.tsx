import type { Metadata } from "next";
import { Balsamiq_Sans } from "next/font/google";
import "./(main)/globals.css";
import StoreProvider from "@/store/StoreProvider";
const balsamiq = Balsamiq_Sans({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-balsamiq",
});

export const metadata: Metadata = {
  title: "an e-commerce website",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={balsamiq.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
