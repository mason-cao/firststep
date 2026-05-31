import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/ui/PageTransition";

const display = Plus_Jakarta_Sans({
  variable: "--font-sans-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.firststepteam.org"),
  title: {
    default: "First Step Team | Youth-Led Community Impact",
    template: "%s | First Step Team",
  },
  description:
    "First Step Team is a youth-led nonprofit in Metro Atlanta turning cleanups, service, culture, and environmental research into measurable local impact.",
  openGraph: {
    title: "First Step Team",
    description:
      "Youth-led service, environmental action, culture, and public impact in Metro Atlanta.",
    url: "https://www.firststepteam.org",
    siteName: "First Step Team",
    images: ["/images/service-cleanup.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
