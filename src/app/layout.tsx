import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Layout } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-body",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Flora Fauna Foundation — Animal Welfare in Bhilai",
    template: "%s | Flora Fauna Foundation",
  },
  description:
    "Flora Fauna Foundation is a Bhilai-based animal welfare initiative that rescues, shelters, feeds, and rehomes animals in need. Led by Gaurav Verma, we work tirelessly to build a compassionate community for animals across Bhilai, Chhattisgarh.",
  keywords: [
    "animal rescue Bhilai",
    "dog adoption Bhilai",
    "animal welfare Chhattisgarh",
    "Flora Fauna Foundation",
    "Gaurav Verma",
    "help animals Bhilai",
    "donate animals India",
    "stray dog rescue",
    "animal shelter Bhilai",
  ],
  authors: [{ name: "Gaurav Verma" }],
  creator: "Flora Fauna Foundation",
  metadataBase: new URL("https://florafaunafoundation.org"),
  openGraph: {
    title: "Flora Fauna Foundation — Animal Welfare in Bhilai",
    description:
      "Rescuing, sheltering, feeding, and rehoming animals across Bhilai. Join us in creating a compassionate world.",
    url: "https://florafaunafoundation.org",
    siteName: "Flora Fauna Foundation",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flora Fauna Foundation — Animal Welfare in Bhilai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flora Fauna Foundation — Animal Welfare in Bhilai",
    description:
      "Rescuing, sheltering, feeding, and rehoming animals across Bhilai. Join us in creating a compassionate world.",
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
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Flora Fauna Foundation",
              description:
                "A Bhilai-based animal welfare initiative that rescues, shelters, feeds, and rehomes animals in need.",
              url: "https://florafaunafoundation.org",
              founder: { "@type": "Person", name: "Gaurav Verma" },
              areaServed: {
                "@type": "City",
                name: "Bhilai",
                sameAs: "https://en.wikipedia.org/wiki/Bhilai",
              },
              knowsAbout: ["Animal Rescue", "Animal Welfare", "Pet Adoption"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhilai",
                addressRegion: "Chhattisgarh",
                addressCountry: "IN",
              },
              email: "gauravverma9112001@gmail.com",
              sameAs: ["https://www.instagram.com/_flora_founa_foundation_inda_/"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
