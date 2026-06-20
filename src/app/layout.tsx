import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranav Neelam | Portfolio",
  description: "Computer Science Engineer Portfolio Sandbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="antialiased bg-black text-slate-200 min-h-screen w-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
