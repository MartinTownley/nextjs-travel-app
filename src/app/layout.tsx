import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/app/components/Navbar";
import Footer from "@/src/app/components/Footer";

export const metadata: Metadata = {
  title: "Sparrowhawk Trees",
  description: "Tree Surgery and Garden Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden"></main>
        {children}
        <Footer />
      </body>
    </html>
  );
}
