"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const collections = [
  {
    title: "Tiles & Flooring",
    desc: "Sophisticated flooring solutions that command attention and elevate any commercial or residential space.",
    image:
      "https://res.cloudinary.com/dsxeqehhp/image/upload/v1780998744/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_lxbr5d.jpg",
  },
  {
    title: "Bathroom Tiles",
    desc: "Transform your bathroom into a private sanctuary with our water-resistant, stunning tile collections.",
    image:
      "https://res.cloudinary.com/dsxeqehhp/image/upload/v1781000395/tidy-bathroom-with-shiny-tiles_osstum.jpg",
  },
  {
    title: "Kitchen Tiles",
    desc: "Clean, modern kitchen tiles designed to withstand heat, grease and daily wear without losing elegance.",
    image:
      "https://res.cloudinary.com/dsxeqehhp/image/upload/v1781000601/3d-rendering-white-minimal-kitchen-with-wood-decoration_ebdzsj.jpg",
  },
  {
    title: "Luxury Marble Tiles",
    desc: "The timeless elegance of marble — now in durable, easy-care tile formats for the modern home.",
    image:
      "https://res.cloudinary.com/dsxeqehhp/image/upload/v1781000731/elegant-stools-table-huge-bright-hall_b9mmgq.jpg",
  },
  {
    title: "Tile Showcase",
    desc: "Exclusive designer tiles that push the boundaries of texture, pattern and artistic expression.",
    image:
      "https://res.cloudinary.com/dsxeqehhp/image/upload/v1781001416/Screenshot_20260609-113609_vkue0s.jpg",
  },
];

export default function Collections() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="collections" className="py-24 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a35b] font-medium mb-3">
            Our Portfolio
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white section-title"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Explore Our Tile Collections
          </h2>
        </motion.div>

        {/* Desktop grid + Mobile horizontal scroll */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <CollectionCard key={col.title} col={col} i={i} inView={inView} />
          ))}
        </div>

        <div className="flex lg:hidden gap-5 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
          {collections.map((col, i) => (
            <div key={col.title} className="flex-none w-[280px]">
              <CollectionCard col={col} i={i} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({
  col,
  i,
  inView,
}: {
  col: (typeof collections)[0];
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.7 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#111]"
      data-testid={`collection-card-${i}`}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={col.image}
          alt={col.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 1024px) 280px, 33vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Gold corner accent */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#c9a35b]/60 rounded-tr-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#c9a35b]/60 rounded-bl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3
          className="text-xl font-semibold text-white mb-1.5 group-hover:text-[#c9a35b] transition-colors duration-300"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {col.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed line-clamp-2">{col.desc}</p>
        <div className="flex items-center gap-2 mt-3 text-[#c9a35b] text-xs tracking-widest uppercase font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span>View Collection</span>
          <span>→</span>
        </div>
      </div>
    </motion.div>
  );
}
