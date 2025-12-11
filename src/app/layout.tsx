import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chido FX Academy | Master Currency Trading & Start Earning",
  description: "Join 500+ successful traders at Chido FX Academy. Learn our proven one-strategy system for consistent forex profits. Free signals, mentorship & prop firm support. Start today!",
  keywords: "forex trading, currency trading, trading academy, mentorship, prop firm, trading signals, forex education, Chido FX, learn forex, make money trading",
  authors: [{ name: "Chido FX Academy" }],
  openGraph: {
    title: "Chido FX Academy | Master Currency Trading & Start Earning",
    description: "Join 500+ successful traders. Learn our proven strategy for consistent forex profits. Free signals included!",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${montserrat.variable} font-[family-name:var(--font-montserrat)] antialiased bg-[#000042] text-white`}
      >
        <div className="stars" />
        {children}
      </body>
    </html>
  );
}
