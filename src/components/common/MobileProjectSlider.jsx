"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const MobileProjectSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide could be added, but manual swipe is better for projects
  
  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold && currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="relative w-full px-6 flex flex-col items-center gap-8">
      {/* Slider Container */}
      <div className="relative w-full h-[40vh] flex items-center justify-center overflow-visible">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, x: -100, scale: 0.9, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            onClick={() => {
              const link = items[currentIndex]?.link;
              if (link) window.open(link, '_blank', 'noopener,noreferrer');
            }}
            style={{ willChange: "transform, backdrop-filter" }}
            className="absolute w-full h-fit max-w-[320px] rounded-[32px] overflow-hidden border border-white/10 bg-zinc-900/50 shadow-2xl flex flex-col cursor-pointer"
          >
            {/* Project Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <img 
                src={items[currentIndex].image} 
                alt={items[currentIndex].text} 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Project Info */}
            <div className="p-5 bg-zinc-950/90 backdrop-blur-md flex items-center justify-between border-t border-white/5 relative z-20">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#660066] font-black uppercase tracking-widest mb-1">Project </span>
                <h3 className="text-xl font-sans font-black text-white tracking-tight capitalize">
                  {items[currentIndex].text}
                </h3>
              </div>

              {items[currentIndex].link && (
                <a 
                  href={items[currentIndex].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#cc00cc] flex items-center justify-center text-white shadow-[0_0_20px_rgba(204,0,204,0.4)] hover:scale-105 transition-all duration-300 pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center gap-3">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              currentIndex === idx 
                ? "w-8 bg-[#660066]" 
                : "w-2 bg-white/10 hover:bg-white/20"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Swipe Instruction */}
      
    </div>
  );
};

export default MobileProjectSlider;
