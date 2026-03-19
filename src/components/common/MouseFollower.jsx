"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseFollower = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for the primary mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for the three circles with different trailing feels
  // Circle 1: Sharp/Fast
  const spring1X = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const spring1Y = useSpring(mouseY, { stiffness: 400, damping: 28 });

  // Circle 2: Balanced/Trailing
  const spring2X = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const spring2Y = useSpring(mouseY, { stiffness: 150, damping: 30 });

  // Circle 3: Slow/Fluid
  const spring3X = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const spring3Y = useSpring(mouseY, { stiffness: 80, damping: 25 });

  useEffect(() => {
    // Check if it's a touch device to disable the effect
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const handleMouseMove = (e) => {
      // Set the center of the elements to the cursor
      mouseX.set(e.clientX - 10); // Offset by half width
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-9999">
      {/* Circle 3 (Furthest Trail - Deep Purple) */}
      <motion.div
        style={{ x: spring3X, y: spring3Y, index: 1, willChange: "transform" }}
        className="absolute w-6 h-6 rounded-full bg-[#660066]/40 flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#cc00cc]/40" />
      </motion.div>

      {/* Circle 2 (Medium Trail - Magenta) */}
      <motion.div
        style={{ x: spring2X, y: spring2Y, willChange: "transform" }}
        className="absolute w-5 h-5 rounded-full bg-[#cc00cc]/50 flex items-center justify-center"
      >
        <div className="w-1 h-1 rounded-full  " />
      </motion.div>

      {/* Circle 1 (Closest to Cursor - White/Bright) */}
      <motion.div
        style={{ x: spring1X, y: spring1Y, willChange: "transform" }}
        className="absolute w-4 h-4 rounded-full bg-[#cc00cc] border border-[#cc00cc]/40 flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(204,0,204,0.4)]"
      >
        <div className="w-1.5 h-1.5 rounded-full  shadow-[0_0_10px_#cc00cc]" />
      </motion.div>
    </div>
  );
};

export default MouseFollower;
