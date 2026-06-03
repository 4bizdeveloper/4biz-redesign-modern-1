import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import your custom application layout shells
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Eliminates text flash & layout shifts (CLS)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO Optimization: Essential structural metadata definitions
export const metadata: Metadata = {
  title: "Enterprise Cloud & ERP Systems | 4Biz",
  description: "Accelerate growth with customizable 4Biz ERP systems, high-performance web solutions, and secure corporate IT infrastructure.",
  metadataBase: new URL("https://4biz.com"), // Replace with your production domain
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: [
      { url: "/4biz_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/4biz_logo.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/4biz_logo.png",
    apple: "/4biz_logo.png",
  },
};

// GTmetrix/Core Web Vitals: Mobile and responsive scaling layout lock down
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allows accessibility zooming but blocks arbitrary responsive scaling shifts
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      {/* NOTE: Google Translate style overrides have been extracted from here and safely embedded 
        within globals.css to bypass blocking HTML parsing cycles, maximizing LCP/FCP response speeds.
      */}
      <body className="w-full min-h-screen bg-white text-zinc-900 overflow-x-hidden block normal-nums selection:bg-[#151569] selection:text-white">
        
        {/* Persistent App Shell Header Navigation System */}
        <Header />

        {/* DYNAMIC ROUTE VIEWPORT WORKSPACE WRAPPER 
          Isolated with hardware accelerated triggers to handle the overlapping hero transitions 
          and structural changes seamlessly across mobile, tablet, and desktop viewports.
        */}
        <main className="w-full relative block clear-both will-change-scroll-transform">
          {children}
        </main>

        {/* Responsive Interactive Footer Foundation */}
        <Footer />
      </body>
    </html>
  );
}