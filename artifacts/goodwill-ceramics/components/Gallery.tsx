"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const gallery = [
  {
    src: "https://res.cloudinary.com/dsxeqehhp/image/upload/v1780998744/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_lxbr5d.jpg",
    alt: "Luxury hotel lobby with premium tiles",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://res.cloudinary.com/dsxeqehhp/image/upload/v1781000395/tidy-bathroom-with-shiny-tiles_osstum.jpg",
    alt: "Elegant bathroom with shiny tiles",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://res.cloudinary.com/dsxeqehhp/image/upload/v1781000601/3d-rendering-white-minimal-kitchen-with-wood-decoration_ebdzsj.jpg",
    alt: "Minimal white kitchen with wood decoration",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://res.cloudinary.com/dsxeqehhp/image/upload/v1781000731/elegant-stools-table-huge-bright-hall_b9mmgq.jpg",
    alt: "Elegant bright hall with marble",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://res.cloudinary.com/dsxeqehhp/image/upload/v1781000818/Screenshot_20260609-103839_asx3qi.jpg",
    alt: "Showroom tile display",
    span: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="showroom" className="py-24 bg-[#f9f7f4]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a35b] font-medium mb-3">
            Showroom Gallery
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 section-title"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Beautiful Spaces,{" "}
            <span style={{ color: "#c9a35b" }}>Endless Possibilities</span>
          </h2>
          <p className="mt-8 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            See how our tiles transform ordinary spaces into extraordinary experiences.
          </p>
        </motion.div>

        {/* Desktop masonry grid */}
        <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
          {gallery.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`group relative rounded-2xl overflow-hidden ${item.span} cursor-pointer`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="glass-dark rounded-xl px-4 py-3">
                  <p
                    className="text-sm font-medium text-[#c9a35b]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.alt}
                  </p>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#c9a35b] rounded-tl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#c9a35b] rounded-br-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {gallery.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-xl overflow-hidden ${i === 0 ? "col-span-2 h-52" : "h-40"}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
