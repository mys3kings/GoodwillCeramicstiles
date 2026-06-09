"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiGrid, FiShield, FiTag } from "react-icons/fi";

const features = [
  {
    icon: FiAward,
    title: "Premium Quality",
    desc: "Crafted from the finest raw materials, our tiles meet international quality standards for every installation.",
  },
  {
    icon: FiGrid,
    title: "Wide Selection",
    desc: "From floor to wall, bathroom to kitchen — hundreds of designs, finishes and sizes to suit any space.",
  },
  {
    icon: FiShield,
    title: "Durable & Strong",
    desc: "Built to last decades. Our tiles resist wear, moisture and stains, maintaining their beauty year after year.",
  },
  {
    icon: FiTag,
    title: "Affordable Prices",
    desc: "Luxury doesn't have to break the bank. Exceptional tiles at prices that make premium design accessible.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a35b] font-medium mb-3">
            Why Choose Us
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 section-title"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Promise to You
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative p-8 rounded-2xl border border-gray-100 hover:border-[#c9a35b]/40 bg-white hover:bg-[#faf8f4] transition-all duration-400 shadow-sm hover:shadow-xl hover:shadow-[#c9a35b]/10 hover:-translate-y-1"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-8 w-12 h-0.5 bg-[#c9a35b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#c9a35b]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a35b]/20 transition-colors duration-300">
                <f.icon size={26} className="text-[#c9a35b]" />
              </div>

              <h3
                className="text-lg font-semibold text-gray-900 mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
