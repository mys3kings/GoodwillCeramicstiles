"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FiPhone, FiMapPin, FiClock, FiMail } from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Showroom", href: "#showroom" },
  { label: "About", href: "#about" },
  { label: "Get a Quote", href: "#contact" },
];

const socials = [
  { icon: FaWhatsapp, href: "https://wa.me/message/NBEZSE7HP5UBH1", label: "WhatsApp" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-[#c9a35b]/20">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span
                className="block text-xl font-bold tracking-widest uppercase"
                style={{ fontFamily: "'Cinzel', serif", color: "#c9a35b" }}
              >
                Goodwill
              </span>
              <span className="text-xs tracking-[0.3em] text-white/40 uppercase">
                Ceramics Tiles
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium ceramics and tile solutions for every space. Bringing elegance,
              durability and style to homes and businesses across Nigeria.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#c9a35b] hover:text-[#c9a35b] transition-all duration-300"
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold text-white tracking-widest uppercase mb-5"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-white/50 hover:text-[#c9a35b] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="block w-4 h-px bg-[#c9a35b]/40 group-hover:bg-[#c9a35b] transition-colors duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold text-white tracking-widest uppercase mb-5"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+2348134734555"
                  className="flex items-start gap-3 text-white/50 hover:text-[#c9a35b] transition-colors duration-200 group"
                  data-testid="footer-phone"
                >
                  <FiPhone size={15} className="mt-0.5 flex-shrink-0 text-[#c9a35b]" />
                  <span className="text-sm">+234 813 473 4555</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/NBEZSE7HP5UBH1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-[#c9a35b] transition-colors duration-200"
                  data-testid="footer-whatsapp"
                >
                  <FaWhatsapp size={15} className="mt-0.5 flex-shrink-0 text-[#c9a35b]" />
                  <span className="text-sm">Chat on WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <FiMapPin size={15} className="mt-0.5 flex-shrink-0 text-[#c9a35b]" />
                <span className="text-sm">Kaduna State, Nigeria</span>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <FiMail size={15} className="mt-0.5 flex-shrink-0 text-[#c9a35b]" />
                <span className="text-sm">goodwillceramics@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="text-sm font-semibold text-white tracking-widest uppercase mb-5"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Opening Hours
            </h4>
            <div className="flex items-start gap-3 text-white/50 mb-6">
              <FiClock size={15} className="mt-0.5 flex-shrink-0 text-[#c9a35b]" />
              <div>
                <p className="text-sm text-[#c9a35b] font-medium">Always Open</p>
                <p className="text-xs text-white/40 mt-1">
                  We are available 24/7 via WhatsApp
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/message/NBEZSE7HP5UBH1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#c9a35b] text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#e0c080] transition-colors duration-300"
              data-testid="footer-whatsapp-cta"
            >
              <FaWhatsapp size={15} />
              Message Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Goodwill Ceramics Tiles. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Premium Tiles · Kaduna, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
