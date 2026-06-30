import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Marcel Steffen — AI Product Builder",
  description:
    "Product Owner with experience in AI platforms, digital products, and cloud services. Combining product strategy with frontend development expertise.",
  keywords: [
    "Product Owner",
    "AI",
    "Product Management",
    "Marcel Steffen",
    "Digital Products",
  ],
  authors: [{ name: "Marcel Steffen" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Marcel Steffen — AI Product Builder",
    description:
      "Product Owner with experience in AI platforms, digital products, and cloud services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
