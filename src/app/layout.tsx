import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Water_Brush, Caveat_Brush } from "next/font/google";

import "./globals.css";
import { siteMeta } from "@/data/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

const waterBrush = Water_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-water-brush",
  display: "swap",
});

const caveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat-brush",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteMeta.name,
    template: "%s | Araneri",
  },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  openGraph: {
    title: siteMeta.name,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.name,
    description: siteMeta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${waterBrush.variable} ${caveatBrush.variable}`}>
      <body>
        <div className="relative z-10 flex min-h-screen flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-palm-950"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="mx-auto w-full max-w-6xl flex-1 px-6 pb-16 pt-28">
            <ErrorBoundary>
              <PageTransitionWrapper>{children}</PageTransitionWrapper>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
