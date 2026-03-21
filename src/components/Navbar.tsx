"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "UX Case studies", href: "#projects" },
  { name: "Vibe Coding", href: "#vibe-coding" },
  { name: "Expertise", href: "#expertise" },
  { name: "Education", href: "#education" },
  { name: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-[2147483647] transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-2xl" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Name */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-xl font-black tracking-tighter text-accent-text hover:text-accent transition-colors duration-300"
        >
          HK.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative group ${
                activeSection === link.href.substring(1) 
                  ? "text-accent" 
                  : "text-accent-text/60 hover:text-accent-text"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button could go here if needed, but keeping it minimalist for now */}
      </div>
    </motion.nav>
  );
}
