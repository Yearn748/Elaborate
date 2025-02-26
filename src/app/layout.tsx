import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import NavBar from "./components/navBar";
import Banner from "./components/Banner";
import SideBar from "./components/sideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="bg-[var(--page-bg)] transition text-[14px] md:text-[16px] data-overlayscrollbars-initialize">
      <meta charSet="UTF-8" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen transition`}>
          <NavBar></NavBar>
          {children}
          <div id="page-height-extend" className="hidden h-[300vh]"></div>
      </body>
    </html>
  );
}
