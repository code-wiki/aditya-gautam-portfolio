import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "../style/globals.css";

const binancePlex = localFont({
  src: [
    {
      path: "../assets/fonts/BinancePlexRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/BinancePlex-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/BinancePlex-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Aditya Gautam",
  description: "Aditya Gautam Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={binancePlex.className}>{children}</body>
    </html>
  );
}
