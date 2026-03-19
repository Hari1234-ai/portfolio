"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, PencilRuler, Brush } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      role: "Product Manager",
      company: "Edzy",
      url: "https://www.edzy.ai/",
      logo: "/edzy.png",
      sideImage: "/edzy-mockup.png",
      duration: "Aug 2025 – Present",
      location: "Gurugram, India",
      points: [
        "Lead full product lifecycle for AI-based learning platform supporting NCERT students.",
        "Define product strategy and roadmap in collaboration with engineering, design, and content teams.",
        "Drive user growth and retention through deep data analysis and A/B testing methodologies.",
        "Advocate for user-centered design to improve overall engagement and learning outcomes."
      ]
    },
    {
      role: "Jr. Product Manager",
      company: "Paraheights",
      url: "https://www.paraheights.com/",
      logo: "/paraheights.png",
      sideImage: "/edzy-mockup.png",
      duration: "Jan 2025 – Aug 2025",
      location: "Gurugram, India",
      points: [
        "Managed agile product development initiatives and sprint planning.",
        "Gathered actionable user feedback, conducted thorough market research, and defined specifications.",
        "Translated complex requirements into structured development tasks.",
        "Worked closely with cross-functional engineering and design teams to ensure rapid delivery."
      ]
    },
    {
      role: "User Experience Designer",
      company: "Paraheights",
      url: "https://www.paraheights.com/",
      logo: "/paraheights.png",
      sideImage: "/edzy-mockup.png",
      duration: "Aug 2024 – Jan 2025",
      location: "Gurugram, India",
      points: [
        "Designed end-to-end UI/UX for the Edzy application (Classes I–XII).",
        "Built beautifully responsive web and mobile interfaces leveraging Figma.",
        "Created sophisticated educator tools for content curation and management.",
        "Conducted in-depth usability testing, iterating designs to significantly improve CX."
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Guru Nanak Institutions (GNI), Hyderabad",
      duration: "Oct 2024 – Aug 2026",
    },
    {
      degree: "Bachelor of Arts (B.A) in Social Sciences",
      school: "Kavitha Memorial PG College, Telangana",
      duration: "2021 – 2024",
    }
  ];

  const skillCategories = [
    {
      name: "Product",
      skills: ["Product Strategy", "Roadmap Planning", "User Research", "Data Analysis", "A/B Testing", "Agile / Scrum", "Stakeholder Management", "Product Analytics"]
    },
    {
      name: "Design & UX",
      skills: ["UX Design", "Wireframing", "Prototyping", "Figma", "Information Architecture", "Usability Testing", "Accessibility"]
    },
    {
      name: "Domain & Tech",
      skills: ["EdTech", "AI-driven Products", "LMS", "K-12 Education", "API Integration", "Mobile App Development", "Cross-Platform Design"]
    }
  ];

  const caseStudies = [
    {
      title: "Walletwise",
      subtitle: "Track Smart, Spend Wise",
      description: "A comprehensive personal finance management solution designed to help users track expenses and manage budgets intuitively.",
      url: "https://www.behance.net/gallery/204666317/Walletwise-Track-Smart-Spend-Wise",
      image: "/edzy.png", // Temporarily using working image to test
      tags: ["FinTech", "Mobile App", "UI/UX"]
    },
    {
      title: "Ecoshop",
      subtitle: "Sustainably yours, today & tomorrow",
      description: "An eco-conscious e-commerce platform promoting sustainable products and mindful consumption through a clean, nature-inspired interface.",
      url: "https://www.behance.net/gallery/203559589/Ecoshop-sustainably-yours-today-tomorrow",
      image: "/ecoshop.png",
      tags: ["E-commerce", "Sustainability", "Product Design"]
    },
    {
      title: "Quickserve",
      subtitle: "Order taking app for waiters",
      description: "A streamlined digital ordering system for hospitality staff, focusing on speed, accuracy, and operational efficiency in high-pressure environments.",
      url: "https://www.behance.net/gallery/203219799/Quickserve-Orders-taking-app-for-waiters-UI",
      image: "/quickserve.png",
      tags: ["B2B", "Service Design", "Waitstaff App"]
    },
    {
      title: "Precise",
      subtitle: "The research library",
      description: "A digital research repository for educational institutions, optimizing information gathering and organization for students and academics.",
      url: "https://www.behance.net/gallery/199440613/Precise-The-research-library",
      image: "/precise.png",
      tags: ["EdTech", "Knowledge Management", "LMS"]
    }
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-24 z-20 text-white font-sans overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Intro Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="text-xl md:text-2xl font-light text-white/60 uppercase tracking-[0.2em] mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl font-normal leading-relaxed tracking-normal text-white/80">
            Product Manager with 2+ years of experience specializing in <span className="font-semibold text-white">AI-driven EdTech</span>, currently leading end-to-end product development at Edzy for scalable learning platforms serving NCERT students across India. Experienced in product strategy, user research, and data-driven growth, with a background in UX design and cross-functional collaboration. Skilled in building user-centric web and mobile solutions, with expertise in AI/ML products, Agile methodologies, and educational platforms.
          </p>
        </motion.div>

        {/* Experience Section - Vertical Timeline */}
        <div className="space-y-16 relative">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter flex items-center gap-6"
          >
            <span className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center text-white">
              <BriefcaseBusiness size={24} className="md:w-8 md:h-8" />
            </span>
            Experience
          </motion.h3>

          <div className="relative pl-12 md:pl-32 py-8">
            {/* The Vertical Line - Centered in the gutter */}
            <div className="absolute left-[24px] md:left-[64px] top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>
            
            <div className="space-y-24">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Horizontal Connection Line - Centered on the card's height */}
                  <div className="absolute -left-[24px] md:-left-[64px] top-1/2 w-[24px] md:w-[64px] h-px bg-white/20 z-10 pointer-events-none"></div>

                  <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-500 group relative overflow-hidden flex flex-col xl:flex-row gap-12 items-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    
                    <div className="flex-1 w-full relative z-10">
                      <div className="flex flex-col mb-8">
                        <div className="flex items-center gap-6">
                          {exp.logo && (
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                               <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div>
                            <p className="text-white/40 text-sm font-mono tracking-widest uppercase mb-1">{exp.duration}</p>
                            <h4 className="text-2xl md:text-3xl font-bold">{exp.role}</h4>
                            <p className="text-white/60 text-base">
                              <a href={exp.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{exp.company}</a>
                              <span className="mx-2 opacity-30">/</span>
                              <span className="text-white/40">{exp.location}</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-4">
                        {exp.points.map((point, j) => (
                          <li key={j} className="text-white/70 text-lg font-light flex items-start leading-relaxed">
                            <span className="text-white/30 mr-4 mt-1.5 shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.sideImage && (
                      <div className="w-full xl:w-5/12 relative z-10 flex items-center justify-center shrink-0 mt-8 xl:mt-0">
                        <div className="glass w-full p-4 rounded-2xl border border-white/10 bg-white/[0.03] shadow-xl overflow-hidden group-hover:bg-white/5 transition-all duration-500">
                          <img 
                            src={exp.sideImage} 
                            alt="Mockup" 
                            className="w-full h-auto object-contain max-h-[300px] group-hover:scale-105 transition-transform duration-700" 
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* UX Case Studies Section */}
        <div className="space-y-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter flex items-center gap-6"
          >
            <span className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center text-white">
              <Brush size={24} className="md:w-8 md:h-8" />
            </span>
            UX Case Studies
          </motion.h3>

          <div className="flex overflow-x-auto hide-scrollbar gap-8 pb-8 px-2 -mx-2 snap-x">
            {caseStudies.map((project, i) => (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 md:p-10 rounded-[2rem] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-500 group relative overflow-hidden flex flex-col min-w-[300px] md:min-w-[450px] snap-start"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -mr-24 -mt-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      {project.image && (
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-110 transition-transform duration-500">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=' + project.title;
                            }}
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h4>
                        <p className="text-white/50 text-sm font-medium tracking-wide uppercase">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-lg font-light leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-[10px] uppercase tracking-widest text-white/40 group-hover:border-white/10 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="space-y-12">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter flex items-center gap-4"
          >
            <span className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center text-white">
              <PencilRuler size={24} className="md:w-8 md:h-8" />
            </span>
            Expertise
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5"
              >
                <h4 className="text-lg uppercase tracking-widest text-white/50 mb-6 font-semibold">{cat.name}</h4>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 hover:bg-white/20 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-12">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter flex items-center gap-4"
          >
            <span className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center text-white">
              <GraduationCap size={24} className="md:w-8 md:h-8" />
            </span>
            Education
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300"
              >
                <p className="text-white/50 text-sm mb-2 font-mono">{edu.duration}</p>
                <h4 className="text-xl md:text-2xl font-bold mb-2">{edu.degree}</h4>
                <p className="text-white/70 font-light">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer / Contact */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-24 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Let's Talk.</h2>
            <p className="text-white/60 text-lg">Currently available for new opportunities.</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="mailto:hari@edzy.ai" className="text-xl md:text-2xl hover:text-white/70 transition-colors underline decoration-white/20 underline-offset-8">hari@edzy.ai</a>
            <p className="text-white/50">Hyderabad, India • +91 6301374802</p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/hari-krishna-chenna-54014124b/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/80 transition-colors">LinkedIn</a>
              <a href="https://www.behance.net/harichenna1" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">Behance</a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
