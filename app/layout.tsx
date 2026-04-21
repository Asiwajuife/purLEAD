import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "purLEAD — AI-Powered Outbound That Books Calls While You Sleep",
  description:
    "purLEAD deploys a fully done-for-you AI outbound system that fills your calendar with 10–20 qualified sales calls every month — without hiring a single SDR.",
  metadataBase: new URL("https://purlead.co"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://purlead.co",
    title: "purLEAD — AI-Powered Outbound That Books Calls While You Sleep",
    description:
      "purLEAD deploys a fully done-for-you AI outbound system that fills your calendar with 10–20 qualified sales calls every month.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@purlead",
    images: ["/og.png"],
  },
  themeColor: "#0A1C35",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body bg-bg text-t2 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
