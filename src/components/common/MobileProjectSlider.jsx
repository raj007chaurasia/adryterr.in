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
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-visible">
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
            style={{ willChange: "transform, backdrop-filter" }}
            className="absolute w-full h-full max-w-[320px] rounded-[32px] overflow-hidden border border-white/10 bg-zinc-900/50 shadow-2xl flex flex-col"
          >
            {/* Project Image */}
            <div className="relative flex-1 overflow-hidden">
              <img 
                src={items[currentIndex].image} 
                alt={items[currentIndex].text} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            </div>
            
            {/* Project Info */}
            <div className="p-8 bg-zinc-950/80 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white tracking-tighter">
                {items[currentIndex].text}
              </h3>
             
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
