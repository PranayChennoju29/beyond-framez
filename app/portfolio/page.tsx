"use client";

import { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const categories = [
    "All",
    "VFX & Compositing",
    "Motion Graphics",

    "Video Production",
    "Interactive Experiences",
];

const projects = [
    // {
    //     title: "Quantum Leap VFX",
    //     category: "VFX & Compositing",
    //     image: "/sample.png",
    // },
    // {
    //     title: "Nebula Nexus",
    //     category: "Motion Graphics",
    //     image: "/sample.png",
    // },
    // // {
    // //     title: "Chrono-Drive 3D Animation",
    // //     category: "3D Animation",
    // //     image: "/sample.png",
    // // },
    {
        title: "Ethereal Echoes",
        category: "Video Production",
        image: "/sample.png",
    },
    // {
    //     title: "Cybernetics",
    //     category: "Interactive Experiences",
    //     image: "/sample.png",
    // },
    // {
    //     title: "Cosmic Drift VFX",
    //     category: "VFX & Compositing",
    //     image: "/sample.png",
    // },
];

export default function PortfolioPage() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <main className="bg-black text-white">

            {/* ================= HERO ================= */}
            <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/portfolio.jpg')" }}
                />

                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                <div className="relative z-10 max-w-3xl px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Experience the Future of Visuals
                    </h1>
                    <p className="text-gray-300 mb-8">
                        Dive into our most impactful projects ranging from cinematic VFX to immersive digital experiences.
                    </p>
                    {/* <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full">
                        Watch Reel
                    </button> */}
                </div>
            </section>


            {/* ================= MASTERPIECES ================= */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <h2 className="text-3xl font-bold text-center mb-6">
                    Our Masterpieces
                </h2>

                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Explore a curated selection of our most impactful projects.
                </p>

                {/* FILTER BUTTONS */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm border transition
                ${active === cat
                                    ? "bg-purple-600 border-purple-600"
                                    : "border-white/20 hover:border-purple-500"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-8">
                    {filtered.map((project, i) => (
                        <div
                            key={i}
                            className="group bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/40 transition"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {project.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            {/* FOOTER */}
            <footer className="bg-black text-white border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="grid gap-12 md:grid-cols-4">

                        {/* BRAND */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                {/* White logo container – tight */}
                                <div className="bg-white rounded-md w-9 h-9 overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/beyondlogo.png"
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

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                                Crafting cinematic digital experiences through VFX, motion graphics,
                                website & app development that captivate and convert.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-5 text-gray-400">
                                <a href="#" className="hover:text-white transition">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="hover:text-white transition">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="hover:text-white transition">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="hover:text-white transition">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* COMPANY */}
                        <div>
                            <h4 className="font-semibold mb-5 text-white">Company</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><a href="/" className="hover:text-white transition">Home</a></li>
                                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                                <li><a href="/services" className="hover:text-white transition">Services</a></li>
                                <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
                                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>

                        {/* SERVICES */}
                        <div>
                            <h4 className="font-semibold mb-5 text-white">Services</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li>Video Production</li>
                                <li>VFX & Motion Graphics</li>
                                <li>Branding</li>
                                <li>Website Development</li>
                                <li>App Development</li>
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h4 className="font-semibold mb-5 text-white">Contact</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex items-center gap-3">
                                    <Mail size={16} />
                                    beyondframez2801@gmail.com
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={16} />
                                    +91 7981464973, 9381774128
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="mt-0.5" />
                                    Warangal, India
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} Beyond Framez. All rights reserved.
                    </div>

                </div>
            </footer>

        </main>
    );
}
