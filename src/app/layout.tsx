import { ProgressBar } from "@/components/progress-bar";
import Providers from "@/components/providers";
import { TConfig } from "@/stores/config";
import "@/styles/globals.css";
import "@bprogress/core/css";
import type { Metadata } from "next";
import { Manrope, Pixelify_Sans } from "next/font/google";
import { Suspense } from "react";
import Header from "@/components/header";

const fontPixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fontManrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GUMZ",
  description: "Step Into a World of Chaos Colour",
  openGraph: {
    title: "GUMZ",
    description:
      "GUMZ is a collection of 10,000 unique NFTs on the Ethereum blockchain.",
    url: "",
    images: [
      {
        url: "",
        alt: "GUMZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GUMZ",
    description:
      "GUMZ is a collection of 10,000 unique NFTs on the Ethereum blockchain.",
    images: ["GUMZ"],
  },
  icons: {
    icon: "",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = {
    title: metadata?.title,
    description: metadata?.description,
  };

  return (
    <html lang="en">
      <body
        className={`${fontPixelifySans.variable} ${fontManrope.variable} font-manrope antialiased`}
      >
        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
        <Providers config={config as TConfig}>{children}</Providers>
      </body>
    </html>
  );
}
