"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("subscribers")
      .insert([{ email }]);

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Something went wrong. Try again.");
    } else {
      setMessage("You're on the list 🚀");
      setEmail("");
    }
  };

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/coming-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        {/* Logo */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <div className="bg-white rounded-md w-9 h-9 flex items-center justify-center overflow-hidden">
            <Image
              src="/beyondlogo.png"
              alt="Beyond Framez Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          <span className="text-2xl font-semibold">
            Beyond <span className="text-red-500">Framez</span>
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Coming Soon
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          We’re working on something amazing. Stay tuned!
        </p>

        {/* Email Section */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-80 px-6 py-3 rounded-full bg-black/50 border border-white/30 focus:outline-none focus:border-purple-500 placeholder-gray-400"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50"
          >
            {loading ? "Saving..." : "Notify Me"}
          </button>

        </div>

        {/* Message */}
        {message && (
          <p className="mt-4 text-sm text-purple-400">
            {message}
          </p>
        )}

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-12 text-gray-300">
          <Facebook className="hover:text-white transition cursor-pointer" />
          <Instagram className="hover:text-white transition cursor-pointer" />
          <Twitter className="hover:text-white transition cursor-pointer" />
          <Linkedin className="hover:text-white transition cursor-pointer" />
        </div>

      </div>
    </main>
  );
}
