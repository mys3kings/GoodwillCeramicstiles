"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 10 }}
            className="relative glass-dark rounded-2xl px-4 py-3 max-w-[200px] shadow-xl"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label="Close tooltip"
            >
              <FiX size={11} />
            </button>
            <p className="text-white text-xs leading-snug font-medium">
              Chat with us on WhatsApp!
            </p>
            <p className="text-white/50 text-[10px] mt-0.5">Always available</p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-5 w-3 h-3 bg-white/8 rotate-45 border-b border-r border-white/10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/message/NBEZSE7HP5UBH1"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-2xl shadow-[#25d366]/40 relative"
        data-testid="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} className="text-white" />
        {/* Pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-[#25d366]/50"
        />
      </motion.a>
    </div>
  );
}
