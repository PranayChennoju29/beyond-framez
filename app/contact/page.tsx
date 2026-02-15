"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
} from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.placeholder.includes("Name")
                ? "name"
                : e.target.placeholder.includes("example")
                    ? "email"
                    : e.target.placeholder.includes("Company")
                        ? "company"
                        : e.target.placeholder.includes("Inquiry")
                            ? "subject"
                            : "message"]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const { error } = await supabase.from("Contacts").insert([
            {
                name: formData.name,
                email: formData.email,
                company: formData.company || null,
                subject: formData.subject,
                message: formData.message,
            },
        ]);

        if (error) {
            console.error(error);
            setStatus("error");
        } else {
            setStatus("success");
            setFormData({
                name: "",
                email: "",
                company: "",
                subject: "",
                message: "",
            });
        }

        setLoading(false);
    };

    return (
        <main className="bg-black text-white">
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* ================= LEFT - FORM ================= */}
                    <div className="bg-[#111] border border-white/10 rounded-2xl p-10">

                        <h2 className="text-2xl font-bold mb-4">
                            Send Us a Message
                        </h2>

                        <p className="text-gray-400 mb-8">
                            Ready to start your next visionary project? Fill out the form below to get in touch with our team.
                        </p>

                        <form className="space-y-6" onSubmit={handleSubmit}>

                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-black border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
                                />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-black border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Your Company (Optional)"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
                            />

                            <input
                                type="text"
                                placeholder="Project Inquiry, Support, etc."
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
                            />

                            <textarea
                                rows={5}
                                placeholder="Tell us about your project or inquiry..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-medium transition disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Message →"}
                            </button>

                            {status === "success" && (
                                <p className="text-green-500 text-sm">
                                    ✅ Message sent successfully!
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-red-500 text-sm">
                                    ❌ Something went wrong. Please try again.
                                </p>
                            )}

                        </form>
                    </div>


                    {/* ================= RIGHT SIDE ================= */}
                    <div className="space-y-8">

                        <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Our Details
                            </h3>

                            <div className="space-y-6 text-gray-400">

                                <div className="flex items-start gap-4">
                                    <Mail className="text-purple-500 mt-1" size={18} />
                                    <div>
                                        <p className="text-white font-medium">Email</p>
                                        <p>beyondframez2801@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="text-purple-500 mt-1" size={18} />
                                    <div>
                                        <p className="text-white font-medium">Phone</p>
                                        <p>+91 7981469473, 9381774128</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="text-purple-500 mt-1" size={18} />
                                    <div>
                                        <p className="text-white font-medium">Address</p>
                                        <p>Warangal, India</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* <div className="bg-[#111] border border-white/10 rounded-2xl h-52 flex items-center justify-center text-gray-500">
                            Google Map Here
                        </div> */}

                        <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Connect With Us
                            </h3>

                            <div className="flex gap-6 text-gray-400">
                                <Facebook className="hover:text-purple-500 cursor-pointer" />
                                <a
                                    href="https://www.instagram.com/beyondframez.co?igsh=MTg2bHpucHo1c3Q3YQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram className="hover:text-purple-500 cursor-pointer transition duration-300" />
                                </a>

                                {/* <Twitter className="hover:text-purple-500 cursor-pointer" /> */}
                                <Linkedin className="hover:text-purple-500 cursor-pointer" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
