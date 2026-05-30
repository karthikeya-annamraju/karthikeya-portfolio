import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Background from "@/components/layout/Background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Karthik Annamraju — Full Stack Developer",
  description:
    "Premium developer portfolio of Sai Karthik Annamraju — Full Stack Developer specializing in Flutter, Express.js, Spring Boot and AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-dark-950 text-ink antialiased`}
      >
        <Background />
        <Sidebar />
        <main className="relative z-10 lg:pl-[260px]">{children}</main>
      </body>
    </html>
  );
}
