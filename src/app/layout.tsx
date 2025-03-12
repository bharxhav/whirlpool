import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whirlpool",
  description: "Whirlpool - 24/7 Scheduler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/whirlpool.png" />
      </head>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <header className="flex justify-between items-center p-4">
          <Link href="/" className="flex flex-row items-center gap-2">
            <Image
              src="/whirlpool.png"
              alt="Whirlpool"
              width={32}
              height={32}
            />
            <h1>Whirlpool</h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
