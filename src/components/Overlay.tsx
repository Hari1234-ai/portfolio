"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Volume2 } from "lucide-react";
import { useRef, useState } from "react";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1 (0 -> 10% fade in, 15 -> 20% fade out)
  // Ensure the text moves completely off-screen by translating it -100vh
  const o1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [1, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], ["0vh", "-100vh"]); 

  // Section 2 (25 -> 30% fade in, 45 -> 50% fade out)
  // Added a gap (20% to 25%) where nothing is fully visible to prevent overlap
  const o2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.3, 0.5], ["20vh", "0vh", "-100vh"]); 

  // Section 3 (55 -> 60% fade in, 80 -> 85% fade out)
  // Gap of 50% to 55%
  const o3 = useTransform(scrollYProgress, [0.55, 0.6, 0.8, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.6, 0.85], ["20vh", "0vh", "-100vh"]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center px-4 z-[100]">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: o1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium font-monospace-custom mb-6 text-white drop-shadow-2xl leading-tight inline-flex items-center gap-4 text-left">
          <span>
            Hello,
            <br />I'm Hari Krishna
          </span>
          <button 
            type="button"
            onClick={toggleAudio}
            className={`p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/audio pointer-events-auto z-[100] cursor-pointer ${isPlaying ? 'text-blue-400' : 'text-white/40'}`}
            title="Listen to intro"
          >
            <Volume2 size={24} className={`transition-transform duration-300 ${isPlaying ? 'scale-110' : 'group-hover/audio:scale-110'}`} />
          </button>
          <audio 
            ref={audioRef} 
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          >
            <source src="/audio1.mp3" type="audio/mpeg" />
          </audio>
        </h1>
        <p className="text-base md:text-xl text-white/80 font-light tracking-[0.3em] uppercase mt-2">
          Product Manager
        </p>
        <p className="text-xs md:text-sm text-white/50 font-normal tracking-[0.4em] uppercase mt-2">
          MBA
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: o2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left p-8 md:p-32"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-xl">
          Building AI-driven <br/>learning products.
        </h2>
        <div className="w-32 h-[2px] bg-white mb-8"></div>
        <p className="max-w-xl text-xl text-white/70 antialiased font-light leading-relaxed drop-shadow-sm">
          Focusing on engaging, scalable, and impactful solutions for the future of education through comprehensive data analysis and A/B testing.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: o3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-32"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-xl">
          Bridging strategy <br/>& user design.
        </h2>
        <div className="w-32 h-[2px] bg-white mb-8 self-end"></div>
        <p className="max-w-xl text-xl text-white/70 antialiased font-light leading-relaxed drop-shadow-sm">
          From defining roadmaps to managing end-to-end lifecycles. It’s about empathy, smooth collaboration, and delivering exceptional outcomes.
        </p>
      </motion.div>
    </div>
  );
}
