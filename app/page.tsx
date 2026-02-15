"use client";
import Image from "next/image";


import {
    Video,
    Sparkles,
    Layers,
    Brush,
    Code,
    TrendingUp,
} from "lucide-react";
import {
    Target,
    Rocket,
    Users,
    BarChart3,
} from "lucide-react";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";


import { useState } from "react";




export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section
                className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center text-center px-6 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/Hero.png')",
                    backgroundPosition: "center 20%",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/80" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
                    <h1 className="text-5xl md:text-5xl font-extrabold leading-tight tracking-tight">
                        Beyond Expectation<br />
                        <span className="text-white">Beyond Marketing, Beyond Growth </span>
                    </h1>

                    <p className="max-w-2xl text-gray-300 text-base md:text-lg">
                        Beyond Framez is a passion-led creative studio turning bold ideas
                        into visuals that move people and drive results.
                    </p>

                    <div className="flex gap-4 mt-4">
                        {/* Primary CTA */}
                        <a
                            href="/contact"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg"
                        >
                            Get Started
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href="/services"
                            className="bg-black/70 border border-white/20 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </section>
            {/* CAPABILITIES SECTION */}
            <section className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Our Capabilities
                        </h2>
                        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                            A full spectrum of creative and digital capabilities designed to
                            transform ideas into high-impact experiences.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "Video Production",
                                desc: "From concept to final cut, we create cinematic visuals that tell your brand story.",
                                icon: Video,
                            },
                            {
                                title: "Motion Graphics",
                                desc: "Dynamic animations and visual effects that bring your message to life.",
                                icon: Sparkles,
                            },
                            {
                                title: "VFX Integration",
                                desc: "Seamless visual effects integration to add an extra layer of magic.",
                                icon: Layers,
                            },
                            {
                                title: "Brand & Creative",
                                desc: "Build a strong brand identity with compelling creative strategies.",
                                icon: Brush,
                            },
                            {
                                title: "Web Development",
                                desc: "High-performance, visually engaging websites built to convert.",
                                icon: Code,
                            },
                            {
                                title: "Digital Strategy",
                                desc: "Data-driven strategies designed to maximize reach and results.",
                                icon: TrendingUp,
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-[#0f0f0f] border border-white/10 rounded-xl p-8 hover:border-purple-500/50 transition"
                                >
                                    {/* Icon */}
                                    <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-lg bg-purple-600/10">
                                        <Icon className="w-6 h-6 text-purple-500" />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
            {/* FEATURED WORKS */}
            {/* FEATURED WORKS */}
            <section className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Featured Works
                        </h2>
                        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                            A selection of our recent work across branding, video, and digital.
                        </p>
                    </div>

                    {/* Grid */}
                    <WorksGrid />

                </div>
            </section>
            {/* WHY PARTNER SECTION */}
            <section className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Why Partner with Beyond Framez?
                        </h2>
                        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                            We’re not just another creative agency. We’re a growth partner
                            focused on strategy, execution, and real results.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                title: "Strategy First",
                                desc: "Every project starts with clarity, research, and a plan—never guesswork.",
                                icon: Target,
                            },
                            {
                                title: "Creative That Converts",
                                desc: "We blend creativity with performance to turn attention into action.",
                                icon: Rocket,
                            },
                            {
                                title: "Built for Brands",
                                desc: "From startups to growing businesses, we design for long-term brand value.",
                                icon: Users,
                            },
                            {
                                title: "Results You Can Measure",
                                desc: "Transparent metrics, clear insights, and growth you can track.",
                                icon: BarChart3,
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-[#0f0f0f] border border-white/10 rounded-xl p-8 hover:border-purple-500/50 transition"
                                >
                                    {/* Icon */}
                                    <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-lg bg-purple-600/10">
                                        <Icon className="w-6 h-6 text-purple-500" />
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
            {/* FINAL CTA */}
            <section className="bg-black text-white py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Ready to Transform Your Digital Presence?
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Let’s collaborate to create impactful visuals, powerful campaigns,
                        and meaningful brand experiences.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <a
                            href="/contact"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold transition shadow-lg"
                        >
                            Start a Project
                        </a>

                        {/* <a
                            href="mailto:hello@beyondframez.com"
                            className="border border-white/20 px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
                        >
                            Contact Us
                        </a> */}
                    </div>

                </div>
            </section>
            {/* FOOTER */}
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
                                <a
                                    href="https://www.linkedin.com/company/beyond-framez"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-purple-500 transition duration-300 hover:scale-110"
                                >
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
                                    +91 7981469473, 9381774128
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="mt-0.5" />
                                    Waranagal, India
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



const works = [
    { title: "Brand Campaign", category: "Branding", image: "/Brand_Campaign.jpg" },
    { title: "Product Reel", category: "Video Production", image: "/Video_Production.jpg" },
    { title: "Creative Ad", category: "Paid Ads", image: "/creative_ads.png" },
    { title: "Social Media Marketing", category: "Content", image: "/social_media.png" },
    { title: "Website Launch", category: "Web Design", image: "/website.png" },
    { title: "Motion Visual", category: "Motion Graphics", image: "graphics.png" },
];

function WorksGrid() {
    const [showAll, setShowAll] = useState(false);

    const visibleWorks = showAll ? works : works.slice(0, 3);

    return (
        <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {visibleWorks.map((item, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl border border-white/10"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

                        {/* Text */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition">
                            <span className="text-sm text-purple-400">
                                {item.category}
                            </span>
                            <h3 className="text-lg font-semibold">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All / Show Less */}
            <div className="mt-14 text-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition"
                >
                    {showAll ? "Show Less" : "View All"}
                </button>
            </div>
        </>
    );
}
