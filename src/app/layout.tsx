import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import EnquiryModal from "./components/EnquiryModal";

const headingFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['700', '800'],
  display: 'swap',
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const handFont = Caveat({
  subsets: ['latin'],
  variable: '--font-hand',
  weight: ['600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Prajha Group | Leading Construction & Real Estate Developers in Chennai",
  description: "With 15+ years of experience and 106+ completed projects, Prajha Group delivers exceptional residential, commercial, industrial and infrastructure developments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${handFont.variable} font-body h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-[#FBFBFB] text-[#1D2939]">
        <Navbar/>
        <EnquiryModal />
        {children}
      </body>
    </html>
  );
}
