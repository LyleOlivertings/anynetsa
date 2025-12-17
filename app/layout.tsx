import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// 1. Set your primary domain here
const BASE_URL = 'https://www.anynetsa.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AnyNet SA | Custom Website Development & SEO",
    template: "%s | AnyNet SA"
  },
  description: "Affordable, modern websites for your business. Starting from R2500. We build high-performance, SEO-optimized sites in South Africa.",
  
  // 2. This tells Google: "Even if you are on .site, the real version is .co.za"
  alternates: {
    canonical: '/',
  },

  // 3. Open Graph for Facebook/LinkedIn/WhatsApp previews
  openGraph: {
    title: 'AnyNet SA - Custom Website Development',
    description: 'Affordable, modern websites for your business in Cape Town.',
    url: BASE_URL,
    siteName: 'AnyNet SA',
    locale: 'en_ZA',
    type: 'website',
  },
  
  // 4. Twitter Card data
  twitter: {
    card: 'summary_large_image',
    title: 'AnyNet SA - Custom Website Development',
    description: 'Affordable, modern websites for your business.',
  },
  
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}