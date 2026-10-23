import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// To change the font, swap Manrope for any other Google font here.
const font = Manrope({ subsets: ["latin"], variable: "--font-main" });

export const metadata: Metadata = {
  title: "SEEK | Consultancy",
  description: "Clear advice for organisations making big decisions. Launching 2026.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.variable} bg-paper font-sans text-ink antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
