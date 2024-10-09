import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const khyayReg = localFont({
  src: "./fonts/Khyay-Regular.ttf",
  variable: "--font-khyayReg",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cilukba Dimsum",
  description: "Ayo Pesan Sekarang!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${khyayReg.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
