"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="https://res.cloudinary.com/dsxeqehhp/image/upload/v1781001051/Screenshot_20260609-113020_aqsb6k.jpg"
        alt="Premium tile showroom"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.9 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm tracking-[0.4em] uppercase text-[#c9a35b] font-medium">
            <span className="block w-8 h-px bg-[#c9a35b]" />
            Premium Tiles. Timeless Beauty.
            <span className="block w-8 h-px bg-[#c9a35b]" />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6 text-shadow-lg"
          style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.02em" }}
        >
          Goodwill
          <span className="block" style={{ color: "#c9a35b" }}>
            Ceramics Tiles
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-base sm:text-lg lg:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          High-quality tiles that bring elegance, durability and style to every space.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleNav("#collections")}
            className="px-8 py-4 rounded-full bg-[#c9a35b] text-black font-semibold text-sm tracking-widest uppercase hover:bg-[#e0c080] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#c9a35b]/30"
            data-testid="hero-explore-btn"
          >
            Explore Tiles
          </button>
          <button
            onClick={() => handleNav("#contact")}
            className="px-8 py-4 rounded-full border border-white/60 text-white font-medium text-sm tracking-widest uppercase hover:border-[#c9a35b] hover:text-[#c9a35b] hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            data-testid="hero-quote-btn"
          >
            Get a Quote
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-[#c9a35b] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
