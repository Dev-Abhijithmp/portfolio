import type { Metadata, Viewport } from "next";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Abhijith M P | Senior Systems, Android & Mobile Engineer",
  description:
    "Engineering high-performance native Android apps with Kotlin & Jetpack Compose, Flutter & Supabase mobile platforms, Next.js web applications, and low-latency C++ audio engines (Google Oboe).",
  keywords: [
    "Abhijith M P",
    "Kotlin",
    "Jetpack Compose",
    "Android Developer",
    "Flutter",
    "Supabase",
    "Next.js",
    "Shopify",
    "Google Oboe",
    "C++ Audio",
    "ESP32",
    "IoT",
  ],
  authors: [{ name: "Abhijith M P" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#08090D] text-gray-100 min-h-screen flex flex-col justify-between selection:bg-kotlin/30 selection:text-white">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen justify-between">
            <div>
              <Navbar />
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
