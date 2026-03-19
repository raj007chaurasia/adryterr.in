"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const TESTIMONIALS_ROW_1 = [
  {
    name: "Ms. Jaskiran Mehta",
    role: "Youtuber",
    text: "AdRyter built a stunning, fast-loading portfolio website that showcases my content perfectly. Their web dev skills are unmatched, ensuring zero downtime during major uploads.",
    image: ""
  },
  {
    name: "Ms. Anamika Kumari",
    role: "Content Creator",
    text: "The user experience on my new mobile-optimized website is incredible. AdRyter's interface layouts make it extremely easy for my audience to navigate and engage.",
    image: ""
  },
  {
    name: "Sachchidanand Dikshit",
    role: "Freelancer",
    text: "Extremely professional web development services. They optimized my site's backend speed and resolved complex hosting issues. Always cooperative and available to assist.",
    image: ""
  }
];

const TESTIMONIALS_ROW_2 = [
  {
    name: "Ms. Aareen Kaur",
    role: "Dietician",
    text: "They developed a custom appointment booking web application for my practice. It's fully automated and handles my schedule flawlessly. Highly recommend for pure web engineering!",
    image: ""
  },
  {
    name: "Mr. Sahil Lodha",
    role: "CEO @ Forgell Metal",
    text: "Unparalleled expertise in enterprise web setups. AdRyter upgraded our supply chain management portal with a modern interface and scalable architecture that delivers real speed.",
    image: ""
  },
  {
    name: "Dr. Prajakta Rahokale",
    role: "Founder of PN Education",
    text: "AdRyter delivered an exceptional, expertly crafted website for PN Education, seamlessly aligning with our educational vision from concept to execution.",
    image: ""
  }
];

const TestimonialCard = ({ item }) => (
  <div className="flex-none w-[280px] sm:w-[350px] md:w-[450px] p-6 md:p-8 rounded-[32px] bg-[#0a0a0c] border border-white/5 hover:border-[#660066]/30 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
      <Quote className="w-12 h-12 text-white" />
    </div>
    
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 relative z-10 font-medium h-[120px] flex items-center">
      "{item.text}"
    </p>
    
    <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-5">
      <div>
        <h4 className="text-white font-bold text-sm md:text-base tracking-tight">{item.name}</h4>
        <p className="text-gray-500 text-xs md:text-sm font-medium">{item.role}</p>
      </div>
    </div>
  </div>
);

const InfiniteMarquee = ({ items, direction = "left", speed = 40 }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="flex overflow-hidden w-full mask-marquee"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{
          x: direction === "left" ? [0, "-33.33%"] : ["-33.33%", 0]
        }}
        transition={{
          duration: 30, // Fixed duration for smoother loop
          repeat: Infinity,
          ease: "linear",
          paused: isPaused
        }}
        style={{
            display: "flex",
            gap: "2rem",
            width: "max-content"
        }}
      >
        {/* We double the items to create the infinite effect */}
        {[...items, ...items, ...items].map((item, idx) => (
          <TestimonialCard key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-10">
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#660066]/20 rounded-full blur-[120px] -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#8b5cf6]/10 rounded-full blur-[120px] -translate-y-1/2" />
        </div>

      <div className="container mx-auto px-6 mb-16 md:mb-24 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-[#660066] mb-4 block"
        >
          Wall of Love
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold text-white tracking-tighter"
        >
        Trusted by  <span className="italic font-serif font-light text-white/90">Businesses</span><br />
          <span className="text-gray-400">in Gwalior & Across</span>   India
        </motion.h2>
      </div>

      <div className="space-y-8 md:space-y-12 relative z-10">
        <InfiniteMarquee items={TESTIMONIALS_ROW_1} direction="left" speed={30} />
        <InfiniteMarquee items={TESTIMONIALS_ROW_2} direction="right" speed={30} />
      </div>

      <style jsx global>{`
        .mask-marquee {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
