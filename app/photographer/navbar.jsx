"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 px-6 md:px-8 py-4">

            <div className="flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3">

                    <Image
                        src="/photographer/logo.png"
                        alt="Vamshi Photography"
                        width={50}
                        height={50}
                        className="rounded-md"
                    />

                    <span className="text-yellow-400 font-semibold text-lg">
                        Vamshi Photography
                    </span>

                </div>


                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm">

                    <li>
                        <Link href="/" className="hover:text-yellow-400 transition">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="#gallery" className="hover:text-yellow-400 transition">
                            Gallery
                        </Link>
                    </li>

                    <li>
                        <Link href="#videos" className="hover:text-yellow-400 transition">
                            Videos
                        </Link>
                    </li>

                    <li>
                        <Link href="#booking" className="hover:text-yellow-400 transition">
                            Booking
                        </Link>
                    </li>

                    <li>
                        <Link href="#contact" className="hover:text-yellow-400 transition">
                            Contact
                        </Link>
                    </li>

                </ul>


                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/919059343663"
                    target="_blank"
                    className="hidden md:block border border-gray-600 px-4 py-2 rounded-md text-sm hover:border-green-500 hover:text-green-400 transition"
                >
                    WhatsApp
                </a>


                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white text-2xl"
                >
                    ☰
                </button>

            </div>


            {/* Mobile Menu */}
            {menuOpen && (

                <div className="md:hidden mt-4 border-t border-gray-800 pt-4">

                    <ul className="flex flex-col gap-4 text-gray-300">

                        <li>
                            <Link href="/" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="#gallery" onClick={() => setMenuOpen(false)}>
                                Gallery
                            </Link>
                        </li>

                        <li>
                            <Link href="#videos" onClick={() => setMenuOpen(false)}>
                                Videos
                            </Link>
                        </li>

                        <li>
                            <Link href="#booking" onClick={() => setMenuOpen(false)}>
                                Booking
                            </Link>
                        </li>

                        <li>
                            <Link href="#contact" onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>

                        <li>
                            <a
                                href="https://wa.me/919059343663"
                                target="_blank"
                                className="border border-gray-600 px-4 py-2 rounded-md text-sm w-fit"
                            >
                                WhatsApp
                            </a>
                        </li>

                    </ul>

                </div>

            )}

        </nav>
    );
}