import type { Metadata } from "next";
import { Lilita_One } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/general/Navbar";
import { AuthProvider } from "@/components/general/AuthProvider";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Head from "next/head";

const staatLich = Lilita_One({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Reb0rnedBlog",
    template: "%s | Reb0rnedBlog",
  },
  description: "A modern blog built with Next.js",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <AuthProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/logo.png" />
        </Head>
        <body
          className={`${staatLich.className} antialiased
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
        >
          <Navbar user={user} />
          <main className="py-8">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
