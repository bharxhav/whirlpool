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
    <html lang="en" className="h-full w-full">
      <head>
        <link rel="icon" href="/whirlpool.png" />
      </head>
      <body
        className={`${jetBrainsMono.variable} antialiased flex flex-col h-full w-full`}
      >
        <header className="flex justify-between items-center p-4 border-b-2 border-foreground">
          <Link href="/" className="flex flex-row items-center gap-2">
            <Image
              src="/whirlpool.png"
              alt="Whirlpool"
              width={32}
              height={32}
            />
            <h1 className="text-2xl">Whirlpool</h1>
          </Link>
        </header>
        <div className="flex flex-row h-full w-full">{children}</div>
      </body>
    </html>
  );
}
