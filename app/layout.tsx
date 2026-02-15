import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/src/context/ThemeContext";
import Layout from "@/src/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: {
    default: "Martin Wachiye Wafula | Engineering & Communication Systems",
    template: "%s | Martin Wachiye Wafula",
  },
  description:
    "Personal website of Martin Wachiye Wafula - Engineering Scientist, Lecturer, and Researcher in Communication and Information Systems.",
  authors: [{ name: "Martin Wachiye Wafula" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Martin Wachiye Wafula",
    description:
      "Engineering Scientist, Lecturer, and Researcher in Communication and Information Systems.",
    type: "website",
    images: [
      {
        url: "/images/martin-wafula.png",
        width: 1200,
        height: 630,
        alt: "Martin Wachiye Wafula",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Wachiye Wafula",
    description:
      "Engineering Scientist, Lecturer, and Researcher in Communication and Information Systems.",
    images: ["/images/martin-wafula.png"],
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetBrainsMono.variable} bg-background text-foreground antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const theme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const shouldUseDark = theme === 'dark' || (!theme && prefersDark);
              document.documentElement.classList.toggle('dark', shouldUseDark);
              document.documentElement.style.colorScheme = shouldUseDark ? 'dark' : 'light';
            } catch {
              document.documentElement.classList.remove('dark');
              document.documentElement.style.colorScheme = 'light';
            }
          })();`}
        </Script>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

