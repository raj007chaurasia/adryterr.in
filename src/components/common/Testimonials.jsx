"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const TESTIMONIALS_ROW_1 = [
  {
    name: "Anika",
    role: "Founder @ Coinpulse",
    text: "Design Monks is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development with Dev Monks, they exceeded my expectations. I couldn't be happier with the collaboration!",
    image: "/images/testimonials/avatar1.png"
  },
  {
    name: "Armen Avagyan",
    role: "CEO & Co Founder @ Fraus",
    text: "Working with Design Monks was a great experience. They translated our business goals into clean, aesthetic designs with total transparency. The process was fast and stress-free, even in the complex cybersecurity space.",
    image: "/images/testimonials/avatar2.png"
  },
  {
    name: "Moshiur Rahman Radif",
    role: "COO @ Ontik Technologies",
    text: "We've worked with Design Monks for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth and worry-free.",
    image: "/images/testimonials/avatar3.png"
  },
  {
    name: "Sarah Chen",
    role: "Product Lead @ Velocity",
    text: "The team's ability to grasp complex requirements and turn them into elegant user experiences is unmatched. They are not just designers; they are strategic partners who truly care about the product's success.",
    image: "/images/testimonials/avatar4.png"
  }
];

const TESTIMONIALS_ROW_2 = [
  {
    name: "Neil Saidi",
    role: "Founder @ LeKlub",
    text: "Had an amazing experience with Design Monks. Their talented team understood my vision and turned it into stunning visuals, with their impressive attention to detail skills. I highly recommend their high-quality design services.",
    image: "/images/testimonials/avatar5.png"
  },
  {
    name: "Laiza Lamyea Lia",
    role: "Marketing Lead @ Akij Group",
    text: "I've collaborated with Design Monks for a year, and the experience has been truly remarkable. Their team's cooperative nature, combined with their innovative ideas and unwavering effort, has made our partnership a fruitful one.",
    image: "/images/testimonials/avatar6.png"
  },
  {
    name: "Shuvo Ahmed",
    role: "Founder @ Zantrik",
    text: "We would like to express our gratitude to the team for the incredible opportunity with the Zantrik App. Your collaboration and support have been invaluable and greatly appreciated.",
    image: "/images/testimonials/avatar7.png"
  },
  {
    name: "James Wilson",
    role: "CTO @ Nexus",
    text: "Exceptional quality and speed. They handled our rebranding and web app development with absolute professionalism. The final result exceeded our expectations and our users love the new interface.",
    image: "/images/testimonials/avatar8.png"
  }
];

const TestimonialCard = ({ item }) => (
  <div className="flex-none w-[280px] sm:w-[350px] md:w-[450px] p-6 md:p-8 rounded-[32px] bg-[#0a0a0c] border border-white/5 hover:border-[#660066]/30 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
      <Quote className="w-12 h-12 text-white" />
    </div>
    
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 relative z-10 font-medium">
      "{item.text}"
    </p>
    
    <div className="flex items-center gap-4 relative z-10">
      <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-zinc-800">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" onError={(e) => e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=" + item.name} />
      </div>
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
