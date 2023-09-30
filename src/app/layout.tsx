import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
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
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
  // openGraph: {
  //   url: siteConfig.url,
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   siteName: siteConfig.title,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   type: 'website',
  //   locale: 'en_US',
  // },
  twitter: {
    card: "summary_large_image",
    title: "@_aditya_gautam",
    description:
      "Co-Founder @turf_fi  | 2x Founder | Prev engineering lead  @HP | Creating, developing, and building remarkable products from scratch is my forte.",
    creator: "@_aditya_gautam",
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={binancePlex.className}>{children}</body>
    </html>
  );
}
