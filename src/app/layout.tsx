import "./globals.css";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audiophile E-Commerce Solution",
  description: "Created by chatcharin rangsisawat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="any" />
      </head>
      <body className={manrope.className}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
