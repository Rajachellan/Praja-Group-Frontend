import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FBFBFB] text-[#1D2939]">
        {children}
      </body>
    </html>
  );
}
