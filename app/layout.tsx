import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bemnet | Creative Professional Portfolio & Resume",
  description: "Explore Bemnet’s resume and portfolio showcasing skills, experience, and creative projects in a sleek, easy-to-navigate format.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
      <Footer />

    </html>

  );
}
