import type { Metadata, Viewport } from "next";
import "./../globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { LanguageProvider } from "./providers/LanguageProvider";
import "highlight.js/styles/github.css";
import { Analytics } from "@vercel/analytics/next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mdbahrulilmi.my.id";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Muhammad Bahrul Ilmi | Fullstack & Backend Developer",
    template: "%s | Muhammad Bahrul Ilmi",
  },
  description:
    "Personal website & portfolio of Muhammad Bahrul Ilmi, a Fullstack and Backend Engineer specializing in Web Development, System Design, and Modern Web Architectures.",

  keywords: [
    "Muhammad Bahrul Ilmi",
    "Fullstack Developer",
    "Backend Developer",
    "Software Engineer Indonesia",
    "Next.js",
    "React",
    "TypeScript",
    "System Design",
    "Portfolio",
  ],

  authors: [{ name: "Muhammad Bahrul Ilmi", url: SITE_URL }],
  creator: "Muhammad Bahrul Ilmi",
  publisher: "Muhammad Bahrul Ilmi",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Muhammad Bahrul Ilmi | Fullstack Developer",
    description:
      "Personal website & portfolio of Muhammad Bahrul Ilmi, Fullstack Developer.",
    siteName: "Muhammad Bahrul Ilmi",
    images: [
      {
        url: `${SITE_URL}/mdbahrulilmi.png`,
        width: 1200,
        height: 630,
        alt: "Muhammad Bahrul Ilmi Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bahrul Ilmi | Fullstack & Backend Developer",
    description:
      "Personal portfolio & tech insights by Muhammad Bahrul Ilmi.",
    images: [`${SITE_URL}/og`],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Muhammad Bahrul Ilmi",
        description: "Portfolio and Personal Website of Muhammad Bahrul Ilmi",
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Muhammad Bahrul Ilmi",
        url: SITE_URL,
        jobTitle: "Fullstack Developer",
        sameAs: [
          "https://github.com/mdbahrulilmi",
          "https://linkedin.com/in/mdbahrulilmi",
        ],
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}