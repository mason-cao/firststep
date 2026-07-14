import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, League_Spartan, Shantell_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const shantell = Shantell_Sans({
  variable: "--font-shantell",
  subsets: ["latin"],
  weight: ["500"],
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
    images: [
      {
        url: "/photos/paddle_cleanup.png",
        width: 1280,
        height: 719,
        alt: "First Step volunteer collecting trash from the river by kayak",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${archivo.variable} ${plexMono.variable} ${shantell.variable}`}
    >
      <body>
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
