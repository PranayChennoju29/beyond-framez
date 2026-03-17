"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function PhotographerPage() {

    const [filter, setFilter] = useState("all");

    const images = [
        { src: "/photographer/gallery1.jpg", category: "wedding" },
        { src: "/photographer/gallery2.jpg", category: "wedding" },
        { src: "/photographer/gallery3.jpg", category: "prewedding" },
        { src: "/photographer/gallery4.jpg", category: "baby" },
        { src: "/photographer/gallery5.png", category: "event" },
    ];

    const filteredImages =
        filter === "all"
            ? images
            : images.filter((img) => img.category === filter);

    return (
        <main className="bg-black text-white">

            {/* HERO */}
            <section
                className="relative h-screen flex items-center justify-center text-center bg-cover bg-center px-6"
                style={{ backgroundImage: "url('/photographer/hero bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-4xl">

                    <p className="text-yellow-400 tracking-[4px] text-sm uppercase mb-4">
                        Premium Photography Studio
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Capturing Your
                        <br />
                        <span className="text-yellow-400">Special Moments</span>
                    </h1>

                    <p className="text-gray-300 mt-6 max-w-xl mx-auto">
                        Transforming fleeting instants into timeless visual stories with our signature cinematic touch.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        <button className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400">
                            View Portfolio
                        </button>

                        <button className="border border-gray-400 px-6 py-3 rounded-md hover:bg-white hover:text-black">
                            Book Your Event
                        </button>
                    </div>

                </div>
            </section>

            {/* ABOUT */}
            <section className="py-24 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div>

                        <p className="text-yellow-400 tracking-widest text-sm uppercase mb-4">
                            The Vision
                        </p>

                        <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">
                            Crafting Memories <br /> with Precision
                        </h2>

                        <p className="text-gray-400 mb-6">
                            At Vamshi Photography, we believe every frame is a canvas and every client has a unique story waiting to be told.
                        </p>

                        <p className="text-gray-400 mb-10">
                            Our approach blends technical expertise with genuine emotion.
                        </p>

                        <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-8 text-center md:text-left">

                            <div>
                                <h3 className="text-xl font-semibold">500+</h3>
                                <p className="text-gray-500 text-sm">Weddings Shot</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">12</h3>
                                <p className="text-gray-500 text-sm">Years Experience</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">100%</h3>
                                <p className="text-gray-500 text-sm">Happy Clients</p>
                            </div>

                        </div>

                    </div>

                    <div className="relative flex justify-center">

                        <img
                            src="/photographer/owner.jpg"
                            className="rounded-md w-full max-w-[420px]"
                        />

                        <div className="absolute bottom-4 left-4 bg-gray-900/90 px-4 py-2 rounded-md flex items-center gap-3">

                            <img
                                src="/photographer/owner.jpg"
                                className="w-10 h-10 rounded-full"
                            />

                            <div>
                                <p className="text-sm font-semibold">Vamshi Krishna</p>
                                <p className="text-xs text-gray-400">Founder & Chief Artist</p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* SERVICES */}
            <section className="bg-gradient-to-b from-[#2a2a2a] to-[#111] py-24 px-6 md:px-16">

                <div className="max-w-7xl mx-auto text-center">

                    <p className="text-yellow-400 tracking-[4px] text-sm uppercase mb-3">
                        What We Do
                    </p>

                    <h2 className="text-3xl md:text-5xl font-serif font-semibold">
                        Our Signature Services
                    </h2>

                    <div className="w-14 h-[3px] bg-yellow-500 mx-auto mt-4 mb-14"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            "Wedding Stories",
                            "Baby & Maternity",
                            "Pre-Wedding",
                            "Candid Moments",
                            "Event Coverage",
                            "Cinematic Films",
                        ].map((service, index) => (
                            <div key={index} className="bg-[#3a3a3a] p-6 rounded-md text-left hover:bg-[#444]">
                                <div className="w-10 h-10 bg-[#4a4a4a] flex items-center justify-center rounded mb-4 text-yellow-400">
                                    📷
                                </div>

                                <h3 className="font-semibold text-lg mb-2">{service}</h3>

                                <p className="text-gray-300 text-sm">
                                    Professional storytelling and premium photography services.
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* GALLERY */}
            <section className="py-24 px-6 md:px-16">

                <div className="max-w-7xl mx-auto">

                    <div className="flex flex-col md:flex-row md:justify-between mb-12">

                        <div>
                            <p className="text-yellow-400 text-sm uppercase mb-2">
                                The Gallery
                            </p>

                            <h2 className="text-3xl md:text-5xl font-serif">
                                Recent Work Highlights
                            </h2>
                        </div>

                        <div className="flex gap-3 mt-6 md:mt-0 flex-wrap">
                            {["all", "wedding", "baby", "prewedding", "event"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 text-sm rounded border ${filter === cat
                                        ? "bg-yellow-500 text-black"
                                        : "border-gray-700 hover:border-yellow-500"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {filteredImages.map((img, index) => (
                            <img
                                key={index}
                                src={img.src}
                                className="rounded-md w-full hover:scale-105 transition"
                            />
                        ))}

                    </div>

                </div>

            </section>

            {/* BOOKING */}
            <section className="bg-gradient-to-b from-[#1a1a1a] to-black py-24 px-6">

                <div className="max-w-3xl mx-auto bg-[#111] p-6 md:p-10 rounded-lg">

                    <p className="text-yellow-400 text-center uppercase mb-2">
                        Secure Your Date
                    </p>

                    <h2 className="text-3xl md:text-4xl text-center font-serif mb-6">
                        Book Your Special Event
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <input className="bg-[#1f1f1f] p-3 rounded border border-gray-700" placeholder="Full Name" />
                        <input className="bg-[#1f1f1f] p-3 rounded border border-gray-700" placeholder="Email" />
                        <input className="bg-[#1f1f1f] p-3 rounded border border-gray-700" placeholder="Phone" />
                        <input type="date" className="bg-[#1f1f1f] p-3 rounded border border-gray-700" />

                    </div>

                    <textarea className="bg-[#1f1f1f] p-3 rounded border border-gray-700 w-full mt-6" rows={4} />

                    <button className="w-full mt-6 bg-yellow-500 text-black py-3 rounded">
                        Get Quote on WhatsApp
                    </button>

                </div>

            </section>

            {/* CTA */}
            <section className="bg-gradient-to-b from-[#1a1a1a] to-black py-24 px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                    Ready to create something beautiful?
                </h2>

                <p className="text-gray-400 mb-12">
                    Reach out for a free consultation.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-10">

                    {/* Studio */}
                    <div className="flex flex-col items-center">

                        <div className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center mb-3 text-yellow-400">
                            <MapPin size={20} />
                        </div>

                        <p className="font-medium">Studio Visit</p>
                        <p className="text-gray-400 text-sm">Warangal, Telangana</p>

                    </div>


                    {/* Email */}
                    <div className="flex flex-col items-center">

                        <div className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center mb-3 text-yellow-400">
                            <Mail size={20} />
                        </div>

                        <p className="font-medium">Inquiries</p>

                        <a
                            href="mailto:vamshikrishna529@gmail.com"
                            className="text-gray-400 text-sm hover:text-yellow-400 transition"
                        >
                            vamshikrishna529@gmail.com
                        </a>

                    </div>


                    {/* Phone */}
                    <div className="flex flex-col items-center">

                        <div className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center mb-3 text-yellow-400">
                            <Phone size={20} />
                        </div>

                        <p className="font-medium">Call Us</p>

                        <a
                            href="tel:+919059343663"
                            className="text-gray-400 text-sm hover:text-yellow-400 transition"
                        >
                            +91 90593 43663
                        </a>

                    </div>

                </div>

            </section>

            {/* FOOTER */}
            <footer className="bg-[#1a1a1a] py-16 px-6">

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                    <div>

                        <div className="flex items-center gap-3 mb-4">

                            <Image
                                src="/photographer/logo.png"
                                alt="logo"
                                width={60}
                                height={60}
                            />

                            <span className="text-yellow-400 font-semibold">
                                Vamshi Photography
                            </span>

                        </div>

                        <p className="text-gray-400 text-sm">
                            Capturing your special moments with cinematic elegance.
                        </p>

                    </div>

                    <div>
                        <h4 className="text-white mb-3">Explore</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Home</li>
                            <li>Portfolio</li>
                            <li>Videos</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white mb-3">Studio</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                            <li>Terms</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white mb-3">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>+91 9000000000</li>
                            <li>email@gmail.com</li>
                            <li>Warangal</li>
                        </ul>
                    </div>

                </div>

            </footer>

        </main>
    );
}