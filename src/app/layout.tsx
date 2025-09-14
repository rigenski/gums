import { ProgressBar } from "@/components/progress-bar";
import Providers from "@/components/providers";
import { TConfig } from "@/stores/config";
import "@/styles/globals.css";
import "@bprogress/core/css";
import { Manrope, Pixelify_Sans } from "next/font/google";
import { Suspense } from "react";

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

// export const metadata: Metadata = {
//   title: "GUMZ",
//   description: "Step Into a World of Chaos",
//   openGraph: {
//     title: "GUMZ",
//     description:
//       "GUMZ is a collection of 10,000 unique NFTs on the Ethereum blockchain.",
//     url: "https://gums.kevinvarian.com/",
//     images: [
//       {
//         url: "/banner.png",
//         alt: "GUMZ",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "GUMZ",
//     description:
//       "GUMZ is a collection of 10,000 unique NFTs on the Ethereum blockchain.",
//     images: ["/banner.png"],
//   },
//   icons: {
//     icon: "/favicon.png",
//   },
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = {
    title: "GUMS",
    description: "Step Into a World of Chaos",
  };

  return (
    <html lang="en">
      <head>
        <title>GUMS</title>
        <meta name="description" content="Step Into a World of Chaos" />
        <meta
          name="keywords"
          content="GUMS, NFT, collection, Ethereum, blockchain"
        />
        <meta name="author" content="GUMS Team" />
        <meta name="creator" content="GUMS" />
        <meta name="publisher" content="GUMS" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://gums.kevinvarian.com/" />
        <meta property="og:site_name" content="GUMS" />
        <meta property="og:title" content="GUMS" />
        <meta property="og:description" content="Step Into a World of Chaos" />
        <meta
          property="og:image"
          content="https://gums.kevinvarian.com/banner.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="GUMS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="GUMS" />
        <meta
          property="twitter:description"
          content="Step Into a World of Chaos"
        />
        <meta property="twitter:creator" content="@gumz" />
        <meta property="twitter:site" content="@gumz" />
        <meta
          property="twitter:image"
          content="https://gums.kevinvarian.com/banner.png"
        />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="630" />
        <meta property="twitter:image:alt" content="GUMS" />

        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
      </head>
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
