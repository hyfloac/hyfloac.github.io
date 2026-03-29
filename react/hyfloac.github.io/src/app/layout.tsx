import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://donovanmaas.dev"),
  title: "Donovan Maas",
  description: "Software engineer focused on systems programming, graphics, parsers, and low-level software.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Donovan Maas",
    description: "Software engineer focused on systems programming, graphics, parsers, and low-level software.",
    url: "https://donovanmaas.dev/",
    siteName: "Donovan Maas",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Donovan Maas",
    description: "Software engineer focused on systems programming, graphics, parsers, and low-level software.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
