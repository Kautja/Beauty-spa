// app/layout.tsx or app/layout.js
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import PageAnimator from "@/components/PageAnimator";
import SeoJsonLd from '@/components/SeoJsonLd';

// ✅ Nunito as default font
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Aura Spa Botswana | Luxury Wellness, Massage & Beauty',
  description: 'Experience Botswana\'s premier luxury wellness sanctuary. Offering personalized massages, facials, body treatments, and premium nail care.',
  keywords: 'luxury spa botswana, massage gaborone, facials botswana, aura spa, premium beauty treatments, wellness retreat',
  authors: [{ name: 'Aura Spa Botswana', url: 'https://auraspa.co.bw' }],
  openGraph: {
    title: 'Aura Spa Botswana',
    description: 'Experience unparalleled tranquility and premium beauty treatments in Botswana.',
    url: 'https://auraspa.co.bw',
    siteName: 'Aura Spa Botswana',
    images: [
      {
        url: '/images/luxury_spa_hero.png',
        width: 1200,
        height: 630,
        alt: 'Aura Spa Botswana',
      },
    ],
    locale: 'en_BW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Spa Botswana',
    description: 'Experience unparalleled tranquility and premium beauty treatments in Botswana.',
    site: '@auraspabw',
    images: ['/images/luxury_spa_hero.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body className="font-nunito antialiased">
        <SeoJsonLd />
        <Toaster position="top-right" />
        <PageAnimator>
          {children}
        </PageAnimator>
      </body>
    </html>
  );
}
