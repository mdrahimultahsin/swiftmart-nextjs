"use client";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import SessionProviderWrapper from "./components/SessionProviderWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({children}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProviderWrapper>
          {/* Navbar */}
          <Navbar />
          <main className="min-h-[calc(100vh-170px)]">{children}</main>
          {/* Footer */}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
