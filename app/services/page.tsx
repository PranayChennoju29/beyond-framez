"use client";

import Image from "next/image";
import { Video, Megaphone, Palette, Code, Camera, Sparkles, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const FluidBackground = dynamic(
    () => import("@/components/FluidBackground"),
    { ssr: false }
);



export default function ServicesPage() {
    return (
        <main className="bg-black text-white">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">

                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/services_hero.png')",
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

                {/* Content */}
                <div className="relative z-10 max-w-3xl px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Our Services
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        We craft cinematic visuals, powerful brands, and high-performances digital
                        platforms that elevate businesses to the next level.
                    </p>
                </div>
            </section>

            {/* ================= EXPERTISE GRID ================= */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Our Expertise
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                    {[
                        {
                            icon: <Video size={24} />,
                            title: "Video Production",
                            desc: "From concept to final cut, we create cinematic visuals that tell compelling stories.",
                        },
                        {
                            icon: <Megaphone size={24} />,
                            title: "Reels & Digital Ads",
                            desc: "Short-form content and ads designed to convert and capture attention instantly.",
                        },
                        {
                            icon: <Camera size={24} />,
                            title: "Hotel & Hospitality Videos",
                            desc: "Immersive storytelling crafted for hospitality brands and luxury experiences.",
                        },
                        {
                            icon: <Sparkles size={24} />,
                            title: "Branding & Creative Design",
                            desc: "Crafting brand identities that resonate through powerful visuals and storytelling.",
                        },
                        {
                            icon: <Megaphone size={24} />,
                            title: "Social Media Marketing",
                            desc: "Strategic campaigns and content that grow your audience and engagement.",
                        },
                        {
                            icon: <Code size={24} />,
                            title: "Website & App Development",
                            desc: "Modern, high-performance websites and apps built for seamless user experiences.",
                        },
                    ].map((service, i) => (
                        <div
                            key={i}
                            className="bg-[#111] border border-white/10 rounded-xl p-8
              hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20
              transition-all duration-300 group"
                        >
                            <div
                                className="w-14 h-14 rounded-full bg-purple-500/10
                flex items-center justify-center mb-6
                text-purple-500 group-hover:bg-purple-500 group-hover:text-white
                transition-all duration-300"
                            >
                                {service.icon}
                            </div>

                            <h3 className="text-lg font-semibold mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="bg-[#0d0d0d] py-24">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold mb-16">
                        Why Choose Beyond Framez?
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">

                        {[
                            { number: "10+", label: "Projects Delivered" },
                            { number: "10+", label: "Brands Collaborated" },
                            { number: "2+", label: "Years Experience" },
                            { number: "100%", label: "Client Satisfaction" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <h3 className="text-4xl font-bold text-purple-500 mb-3">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ================= DEEP DIVE SECTION ================= */}
            <section className="max-w-6xl mx-auto px-6 py-24">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Deep Dive into Our Offerings
                </h2>

                <DeepDiveAccordion />

            </section>


            {/* ================= CALL TO ACTION ================= */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 text-center
          bg-gradient-to-r from-purple-900/20 via-black to-black
          border border-white/10 rounded-2xl p-14">

                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Transform Your Digital Presence?
                    </h2>

                    <p className="text-gray-400 mb-10">
                        Let’s collaborate and bring your vision to life with cinematic precision
                        and digital innovation.
                    </p>

                    <a
                        href="/contact"
                        className="bg-purple-600 hover:bg-purple-700
            px-8 py-3 rounded-full font-medium
            transition-all duration-300
            shadow-lg shadow-purple-500/20"
                    >
                        Get a Quote →
                    </a>
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
function DeepDiveAccordion() {
    const [open, setOpen] = useState<number | null>(0);

    const services = [
        {
            title: "Cinematic Video Production",
            content:
                "Our award-winning team specializes in crafting high-definition video content, from short films and documentaries to corporate videos and event coverage. We leverage cutting-edge equipment and VFX expertise to deliver visual narratives that captivate audiences and leave a lasting impression. Our services include scriptwriting, storyboarding, shooting, editing, color grading, and motion graphics integration.",
            image: "/services_hero.png",
        },
        {
            title: "Dynamic Reels & Digital Ads",
            content:
                "High-impact short-form content optimized for social platforms and ad campaigns that drive conversions and brand awareness.",
        },
        {
            title: "Exclusive Hotel & Hospitality Videos",
            content:
                "Luxury storytelling and immersive visuals tailored specifically for hospitality brands and premium experiences.",
        },
        {
            title: "Strategic Social Media Marketing",
            content:
                "Content strategies, paid campaigns, and audience engagement systems designed to grow your brand consistently.",
        },
        {
            title: "Innovative Branding & Creative Design",
            content:
                "Brand identities, visual systems, and storytelling frameworks that position your business uniquely in the market.",
        },
        {
            title: "Cutting-Edge Website & App Development",
            content:
                "Modern, scalable, high-performance websites and mobile applications built for seamless user experiences.",
        },
    ];

    return (
        <div className="space-y-5">
            {services.map((service, index) => (
                <div
                    key={index}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 
            ${open === index
                            ? "border-purple-500 shadow-lg shadow-purple-500/10"
                            : "border-white/10"
                        }`}
                >
                    {/* Header */}
                    <button
                        onClick={() => setOpen(open === index ? null : index)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition"
                    >
                        <span className="font-medium">{service.title}</span>
                        <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${open === index ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {/* Expanded Content */}
                    {open === index && (
                        <div className="border-t border-white/10 px-6 py-10">
                            <div className="grid md:grid-cols-2 gap-10 items-center">

                                {/* LEFT CONTENT */}
                                <div>
                                    <h3 className="text-2xl font-semibold mb-5">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {service.content}
                                    </p>

                                    {/* <a
                                        href="/portfolio"
                                        className="inline-block border border-purple-500 text-purple-400 
                               px-5 py-2 rounded-md text-sm 
                               hover:bg-purple-500 hover:text-white 
                               transition"
                                    >
                                        View Portfolio
                                    </a> */}
                                </div>

                                {/* RIGHT IMAGE (only if exists) */}
                                {service.image && (
                                    <div>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="rounded-xl w-full object-cover"
                                        />
                                    </div>
                                )}

                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

