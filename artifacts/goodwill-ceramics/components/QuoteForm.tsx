"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";

type FormData = {
  fullName: string;
  phone: string;
  tileType: string;
  quantity: string;
  message: string;
};

const tileTypes = [
  "Tiles & Flooring",
  "Bathroom Tiles",
  "Kitchen Tiles",
  "Luxury Marble Tiles",
  "Tile Showcase",
  "Other",
];

export default function QuoteForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const message = `Hello Goodwill Ceramics Tiles! I'd like to request a quote.

*Name:* ${data.fullName}
*Phone:* ${data.phone}
*Tile Type:* ${data.tileType}
*Quantity:* ${data.quantity}
*Message:* ${data.message}`;
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/2348134734555?text=${encodedMsg}`, "_blank");
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,163,91,0.08)_0%,_transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #c9a35b 0, #c9a35b 1px, transparent 0, transparent 50%), repeating-linear-gradient(180deg, #c9a35b 0, #c9a35b 1px, transparent 0, transparent 50%)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a35b] font-medium mb-3">
            Get in Touch
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white section-title"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Request a Free Quote
          </h2>
          <p className="mt-8 text-white/50 text-sm leading-relaxed max-w-lg mx-auto">
            Tell us about your project and we'll help you find the perfect tiles.
          </p>
        </motion.div>

        {/* Glassmorphism form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-dark rounded-3xl p-8 sm:p-10"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-xl bg-[#c9a35b]/20 border border-[#c9a35b]/40 text-center"
            >
              <p className="text-[#c9a35b] font-medium">
                Opening WhatsApp with your quote request...
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-wider uppercase text-white/50 font-medium">
                  Full Name *
                </label>
                <input
                  {...register("fullName", { required: true })}
                  placeholder="Your full name"
                  className={`bg-white/5 border ${errors.fullName ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#c9a35b]/60 transition-colors duration-200`}
                  data-testid="input-fullname"
                />
                {errors.fullName && (
                  <span className="text-red-400 text-xs">Name is required</span>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-wider uppercase text-white/50 font-medium">
                  Phone Number *
                </label>
                <input
                  {...register("phone", { required: true })}
                  placeholder="+234 000 000 0000"
                  type="tel"
                  className={`bg-white/5 border ${errors.phone ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#c9a35b]/60 transition-colors duration-200`}
                  data-testid="input-phone"
                />
                {errors.phone && (
                  <span className="text-red-400 text-xs">Phone is required</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Tile Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-wider uppercase text-white/50 font-medium">
                  Tile Type *
                </label>
                <select
                  {...register("tileType", { required: true })}
                  className={`bg-white/5 border ${errors.tileType ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a35b]/60 transition-colors duration-200 appearance-none`}
                  defaultValue=""
                  data-testid="select-tiletype"
                >
                  <option value="" disabled className="bg-[#111] text-white/50">
                    Select tile type
                  </option>
                  {tileTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#111] text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-wider uppercase text-white/50 font-medium">
                  Quantity (m² or boxes)
                </label>
                <input
                  {...register("quantity")}
                  placeholder="e.g. 50 m²"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#c9a35b]/60 transition-colors duration-200"
                  data-testid="input-quantity"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-wider uppercase text-white/50 font-medium">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Tell us more about your project, dimensions, budget..."
                rows={4}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#c9a35b]/60 transition-colors duration-200 resize-none"
                data-testid="input-message"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-[#c9a35b] hover:bg-[#e0c080] text-black font-semibold text-sm tracking-widest uppercase transition-colors duration-300 shadow-lg shadow-[#c9a35b]/30"
              data-testid="button-submit-quote"
            >
              <FaWhatsapp size={18} />
              Request Quote via WhatsApp
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
