"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useScroll } from "framer-motion";
import Overlay from "./Overlay";

// Based on the 192 PNG files
const FRAME_COUNT = 192;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Files are named 00001.png, 00002.png...
      const frameNum = String(i).padStart(5, '0');
      img.src = `/sequence/${frameNum}.png`;
      
      img.onload = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = imgArray;
          // Slight delay to ensure React commits state smoothly
          setTimeout(() => setLoaded(true), 200);
        }
      };
      
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = imgArray;
          setLoaded(true);
        }
      };
      
      imgArray.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const renderFrame = (scrollPos: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;

    const canvas = canvasRef.current;
    
    // Use alpha: false for performance optimization since no transparency is needed behind it
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Map progress to index
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(scrollPos * FRAME_COUNT))
    );
    const img = imagesRef.current[frameIndex];

    if (img && img.complete && img.naturalHeight !== 0) {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.width;
      const ih = img.height;

      // `object-fit: cover` scale factor
      const baseScale = Math.max(cw / iw, ch / ih);
      
      // Apply a stronger zoom factor (15%) to push the Veo watermark 
      // and profile icon completely off the bottom-right corner of the screen
      const scale = baseScale * 1.15; 
      
      const x = cw / 2 - (iw / 2) * scale;
      const y = ch / 2 - (ih / 2) * scale;

      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, iw * scale, ih * scale);
    }
  };

  useLayoutEffect(() => {
    if (!loaded) return;
    
    // Initial resize and render
    if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
    }
    renderFrame(scrollYProgress.get());

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      window.requestAnimationFrame(() => renderFrame(latest));
    });

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(scrollYProgress.get());
      }
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [loaded, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        
        {/* The high-performance canvas */}
        <canvas
          ref={canvasRef}
          className="block w-full h-full object-cover"
        />
        
        {/* Custom Branded Loading State Overlay */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] z-50 text-white">
            <div className="flex flex-col items-center animate-pulse-slow">
              <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] uppercase text-white/90 mb-12 flex flex-col items-center gap-3">
                <span className="font-black drop-shadow-lg">Hari Krishna</span>
                <span className="text-xs md:text-sm tracking-[0.6em] text-white/40">Portfolio</span>
              </h1>
              
              <div className="flex flex-col items-center w-64 md:w-80">
                <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative mb-4">
                   <div 
                     className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 ease-out"
                     style={{ width: `${progress}%` }}
                   />
                </div>
                <div className="w-full flex justify-between items-center text-[10px] md:text-xs font-mono tracking-widest text-white/40 uppercase">
                   <span>Initializing</span>
                   <span className="text-white/90 font-bold">{progress}%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Parallax Text Overlay */}
        {loaded && <Overlay scrollYProgress={scrollYProgress} />}
        
      </div>
    </div>
  );
}
