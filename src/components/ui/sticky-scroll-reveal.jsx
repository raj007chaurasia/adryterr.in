"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsCount = content.length;
    const index = Math.min(
      Math.floor(latest * cardsCount),
      cardsCount - 1
    );
    setActiveCard(index);
  });

  return (
    <div
      className="relative flex flex-col lg:flex-row justify-between items-start w-full min-h-screen gap-10 lg:gap-20"
      ref={containerRef}>

      {/* Left Column: Sticky Title & Description */}
      <div className="w-full lg:w-[40%] lg:sticky lg:top-40 lg:self-start h-fit z-10 py-10 lg:py-0">
        <div className="max-w-xl min-h-[300px] lg:min-h-[400px] flex items-start">
          <AnimatePresence mode="wait">
            {content.map((item, index) => {
              // Only show the text for the currently active card's group
              // We find the first index of the service group
              const isFirstInGroup = index === 0 || content[index - 1].serviceId !== item.serviceId;
              if (!isFirstInGroup) return null;

              const groupIndices = content.map((c, i) => c.serviceId === item.serviceId ? i : -1).filter(i => i !== -1);
              const isGroupActive = groupIndices.includes(activeCard);

              if (!isGroupActive) return null;

              return (
                <motion.div
                  key={item.serviceId}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 md:space-y-8"
                >
                  {item.title}
                  {item.description}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Column: Scrolling Images/Content */}
      <div className="w-full lg:w-[50%] flex flex-col gap-20 md:gap-32 lg:gap-64 py-10 md:py-20 lg:py-40 relative">
        {content.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full"
          >
            {item.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
