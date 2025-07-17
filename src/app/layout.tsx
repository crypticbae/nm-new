import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neon Murer AG - Lichtwerbung & Werbetechnik seit 1949",
  description: "Seit 75 Jahren Ihr Partner für professionelle Lichtwerbung und Werbetechnik in der Ostschweiz. Leuchtschriften, Beschriftungen, Digital Signage und mehr.",
  keywords: "Lichtwerbung, Werbetechnik, Neon, LED, Beschriftung, Fahrzeugbeschriftung, Digital Signage, Rapperswil-Jona, Uznach, Ostschweiz",
  authors: [{ name: "Neon Murer AG" }],
  creator: "Neon Murer AG",
  publisher: "Neon Murer AG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.neonmurer.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neon Murer AG - Lichtwerbung & Werbetechnik seit 1949",
    description: "Seit 75 Jahren Ihr Partner für professionelle Lichtwerbung und Werbetechnik in der Ostschweiz.",
    url: "https://www.neonmurer.ch",
    siteName: "Neon Murer AG",
    images: [
      {
        url: "/images/leistungen-1.jpg",
        width: 1200,
        height: 630,
        alt: "Neon Murer AG - Lichtwerbung",
      },
    ],
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neon Murer AG - Lichtwerbung & Werbetechnik seit 1949",
    description: "Seit 75 Jahren Ihr Partner für professionelle Lichtwerbung und Werbetechnik in der Ostschweiz.",
    images: ["/images/leistungen-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "CH-SG",
    "geo.placename": "Rapperswil-Jona",
    "geo.position": "47.2269;8.8186",
    "ICBM": "47.2269, 8.8186",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" data-theme="neon-murer">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
