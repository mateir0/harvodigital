import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HARVO DIGITAL — Premium Digital Agency",
    template: "%s | HARVO DIGITAL",
  },
  description:
    "HARVO DIGITAL is a premium digital agency crafting world-class web experiences, brands, and digital products.",
  keywords: [
    "digital agency",
    "web design",
    "web development",
    "branding",
    "UI/UX",
    "HARVO DIGITAL",
  ],
  authors: [{ name: "HARVO DIGITAL" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HARVO DIGITAL",
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
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Future: <Header /> */}
        <main>{children}</main>
        {/* Future: <Footer /> */}
      </body>
    </html>
  );
}
