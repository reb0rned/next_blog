import type { Metadata } from "next";
import { Staatliches } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/general/Navbar";
import { AuthProvider } from "@/components/general/AuthProvider";

const staatLich = Staatliches({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog on next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${staatLich.className} antialiased
          max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
