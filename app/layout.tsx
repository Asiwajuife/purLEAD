import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const ChatWidget = dynamic(() => import("./components/ChatWidget"), { ssr: false });

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "purLEAD — AI-Powered Outbound That Books Calls While You Sleep",
  description:
    "purLEAD deploys a fully done-for-you AI outbound system that fills your calendar with 10–20 qualified sales calls every month — without hiring a single SDR.",
  metadataBase: new URL("https://purlead.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://purlead.com",
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
        <ChatWidget />
      </body>
    </html>
  );
}
