"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "E-Commerce Reimagined",
    category: "Web Development",
    desc: "A completely custom 3D shopping experience mapping real world interactions.",
  },
  {
    title: "Fintech Dashboard",
    category: "Product Design",
    desc: "A sleek, dark-mode focused application helping users track portfolio returns.",
  },
  {
    title: "Agency Website",
    category: "Creative Coding",
    desc: "Scrollytelling and webgl shaders pushing browser performance.",
  },
  {
    title: "Mobile App Companion",
    category: "React Native",
    desc: "Cross platform architecture with rich gestural interfaces.",
  }
];

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-[#121212] py-32 px-8 md:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-accent-text mb-8 flex items-center gap-6">
            <span className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center text-[#121212] font-black text-2xl md:text-4xl">
              *
            </span>
            Selected Work
          </h2>
          <div className="w-full h-[1px] bg-accent/20 mt-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-10 md:p-14 rounded-[2rem] flex flex-col justify-end group hover:bg-accent/10 transition-all duration-700 cursor-pointer min-h-[450px] border border-accent/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mt-auto relative z-10 flex flex-col h-full justify-end">
                <p className="text-xs md:text-sm font-bold tracking-[0.25em] text-accent-text/50 uppercase mb-4">
                  {p.category}
                </p>
                <h3 className="text-3xl md:text-5xl font-bold text-accent-text mb-6 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                  {p.title}
                </h3>
                <p className="text-base md:text-lg text-accent-text/70 font-light leading-relaxed max-w-sm">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
