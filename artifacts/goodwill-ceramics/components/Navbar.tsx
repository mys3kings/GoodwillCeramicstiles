"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Showroom", href: "#showroom" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex flex-col leading-tight group"
            data-testid="nav-logo"
          >
            <span
              className="text-lg sm:text-xl font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif", color: "#c9a35b" }}
            >
              Goodwill
            </span>
            <span className="text-xs tracking-[0.3em] text-white/70 uppercase font-light">
              Ceramics Tiles
            </span>
          </button>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm tracking-wider uppercase text-white/80 hover:text-[#c9a35b] transition-colors duration-300 relative group"
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a35b] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/message/NBEZSE7HP5UBH1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a35b]/50 text-[#c9a35b] hover:bg-[#c9a35b] hover:text-black transition-all duration-300 text-sm font-medium"
              data-testid="nav-whatsapp"
            >
              <FaWhatsapp size={16} />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+2348134734555"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a35b] text-black hover:bg-[#e0c080] transition-all duration-300 text-sm font-semibold"
              data-testid="nav-call"
            >
              <FiPhone size={16} />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            data-testid="nav-hamburger"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[66px] left-0 w-full z-40 bg-black/95 backdrop-blur-md border-t border-[#c9a35b]/20"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-base tracking-wider uppercase text-white/80 hover:text-[#c9a35b] transition-colors duration-300 w-full text-left py-2 border-b border-white/5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <a
                  href="https://wa.me/message/NBEZSE7HP5UBH1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#c9a35b] text-[#c9a35b] text-sm font-medium"
                >
                  <FaWhatsapp size={16} /> WhatsApp
                </a>
                <a
                  href="tel:+2348134734555"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#c9a35b] text-black text-sm font-semibold"
                >
                  <FiPhone size={16} /> Call Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
