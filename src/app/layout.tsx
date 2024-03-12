import type { Metadata } from "next";
import { Balsamiq_Sans } from "next/font/google";
import "./(main)/globals.css";
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
    <html lang="en">
      <body
        className={balsamiq.className}
        style={{ margin: 0, overflow: "hidden" }}
      >
        {children}
      </body>
    </html>
  );
}
