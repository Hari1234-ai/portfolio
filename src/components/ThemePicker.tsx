"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const themes = [
  { id: "blue", name: "Blue", color: "#38bdf8", glow: "rgba(56, 189, 248, 0.3)" },
  { id: "rose", name: "Rose", color: "#e11d48", glow: "rgba(225, 29, 72, 0.3)" },
  { id: "teal", name: "Teal", color: "#2dd4bf", glow: "rgba(45, 212, 191, 0.3)" },
  { id: "orange", name: "Orange", color: "#f97316", glow: "rgba(249, 115, 22, 0.3)" },
  { id: "purple", name: "Purple", color: "#c084fc", glow: "rgba(192, 132, 252, 0.3)" },
];

export default function ThemePicker() {
  const [activeTheme, setActiveTheme] = useState("blue");

  useEffect(() => {
    // Load saved theme
    const savedThemeId = localStorage.getItem("portfolio-theme");
    if (savedThemeId) {
      const theme = themes.find(t => t.id === savedThemeId);
      if (theme) {
        applyTheme(theme);
        setActiveTheme(theme.id);
      }
    }
  }, []);

  const applyTheme = (theme: typeof themes[0]) => {
    const root = document.documentElement;
    root.style.setProperty("--accent-primary", theme.color);
    root.style.setProperty("--accent-glow", theme.glow);
    root.style.setProperty("--accent-text", theme.color);
    localStorage.setItem("portfolio-theme", theme.id);
  };

  const handleThemeChange = (theme: typeof themes[0]) => {
    setActiveTheme(theme.id);
    applyTheme(theme);
  };

  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <div className="flex items-center gap-3 p-2 bg-accent/5 backdrop-blur-md rounded-2xl border border-accent/10 shadow-2xl">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => handleThemeChange(theme)}
            className="group relative w-10 h-10 md:w-12 md:h-12 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: theme.color }}
            title={theme.name}
          >
            {activeTheme === theme.id ? (
              <div className="bg-black/20 w-full h-full flex items-center justify-center backdrop-blur-[2px]">
                <Check className="text-accent-text w-5 h-5 md:w-6 md:h-6" />
              </div>
            ) : (
              <div className="absolute inset-0 bg-white/0 group-hover:bg-accent/10 transition-colors" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
