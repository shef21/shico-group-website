import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandName, positioningStatement } from "@/lib/brand";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${brandName} | Build, Optimize, Scale Your Business`,
  description: positioningStatement,
  keywords: [
    "construction",
    "software development",
    "business consulting",
    "media marketing",
    "business optimization",
    "strategic partner",
  ],
  openGraph: {
    title: `${brandName} | Build, Optimize, Scale Your Business`,
    description: positioningStatement,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
