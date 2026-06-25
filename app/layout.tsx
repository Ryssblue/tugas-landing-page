import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WanderGo | Premium Travel Experiences",
  description:
    "Discover breathtaking destinations, curated travel packages, and premium travel services with WanderGo.",
  keywords: [
    "WanderGo",
    "travel",
    "destinations",
    "travel packages",
    "Bali",
    "Raja Ampat",
    "Labuan Bajo",
    "Mount Bromo"
  ],
  openGraph: {
    title: "WanderGo | Premium Travel Experiences",
    description:
      "Book unforgettable journeys to Bali, Mount Bromo, Raja Ampat, Labuan Bajo, and beyond.",
    type: "website",
    locale: "en_US",
    siteName: "WanderGo"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
