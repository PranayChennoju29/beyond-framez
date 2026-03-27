"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  // hide navbar for photographer template
  const hideNavbar = pathname.startsWith("/photographer");

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <a
        href={href}
        className={`relative transition ${isActive ? "text-white" : "text-gray-400 hover:text-white"
          }`}
      >
        {label}
        {isActive && (
          <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-purple-500 rounded"></span>
        )}
      </a>
    );
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >

        {/* SHOW NAVBAR ONLY IF NOT /photographer */}
        {!hideNavbar && (
          <nav className="h-20 w-full bg-black border-b border-white/10">
            <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">

              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-md w-9 h-9 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/beyondl.png"
                    alt="Beyond Framez Logo"
                    width={60}
                    height={60}
                    className="object-cover w-16 h-16"
                  />
                </div>

                <span className="text-white font-semibold text-lg">
                  Beyond <span className="text-red-500">Framez</span>
                </span>
              </div>

              {/* Links */}
              <div className="hidden md:flex items-center gap-8 text-sm">
                {navLink("/", "Home")}
                {navLink("/about", "About Us")}
                {navLink("/services", "Services")}
                {navLink("/portfolio", "Portfolio")}
                {navLink("/contact", "Contact Us")}
              </div>

              {/* CTA */}
              <a
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-5 py-2 rounded-full font-medium transition"
              >
                Get a Quote →
              </a>

            </div>
          </nav>
        )}

        {children}
        <SpeedInsights />

      </body>
    </html>
  );
}