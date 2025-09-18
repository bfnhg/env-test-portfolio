import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { generatePersonStructuredData, generateWebsiteStructuredData, generatePortfolioStructuredData } from "@/lib/structuredData";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Adham Ait Reqba - Software Engineer",
    template: "%s | Adham's Portfolio",
  },
  description: "Adham Ait Reqba is a passionate Software Engineer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and experience in React, Next.js, and modern web technologies.",
  keywords: ["Adham Ait Reqba", "Software Engineer", "Frontend Developer", "React", "Next.js", "Web Development", "Portfolio", "Morocco"],
  authors: [{ name: "Adham Ait Reqba" }],
  creator: "Adham Ait Reqba",
  publisher: "Adham Ait Reqba",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "fr-FR": "/fr",
    },
  },
  openGraph: {
    title: "Adham Ait Reqba - Software Engineer Portfolio",
    description: "Explore Adham Ait Reqba's portfolio: a Software Engineer specializing in React, Next.js, and modern web development.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Adham's Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Adham Ait Reqba Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adham Ait Reqba - Software Engineer Portfolio",
    description: "Explore Adham Ait Reqba's portfolio: a Software Engineer specializing in React, Next.js, and modern web development.",
    creator: "@yourtwitterhandle",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/twitter-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        {/* Structured Data */}
        <Script
          id="structured-data-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonStructuredData())
          }}
        />
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteStructuredData())
          }}
        />
        <Script
          id="structured-data-portfolio"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePortfolioStructuredData())
          }}
        />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
