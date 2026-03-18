"use client";
import React from "react";
import MobileComparison from "./MobileComparison";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Check, X, Users, Briefcase, Palette, Laptop, Cloud, ArrowRight, MousePointer2, Sparkles, Zap, BarChart3, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPARISON_DATA = [
  {
    name: "AdRyter",
    description: "Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees",
    icon: <div className="w-15 h-15 rounded-xl bg-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)]"><img src="/images/Adryterlogo.png" alt="AdRyter" className="w-10 h-10 object-contain" /></div>,
    isPremium: true,
    stats: [true, true, true, true, true]
  },
  {
    name: "In House Team",
    description: "A full-time designer may ensure brand consistency, but there's a risk of limited expertise even though you pay regularly",
    icon: <div className="w-15 h-15 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform"><Users className="w-5 h-5" /></div>,
    stats: [false, false, false, true, false]
  },
  {
    name: "Creative Agencies",
    description: "Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects",
    icon: <div className="w-10 h-10 rounded-xl bg-indigo-900/30 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform"><Palette className="w-5 h-5" /></div>,
    stats: [false, false, true, true, false]
  },
  {
    name: "Freelancers",
    description: "Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration",
    icon: <div className="w-10 h-10 rounded-xl bg-sky-900/30 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform"><Briefcase className="w-5 h-5" /></div>,
    stats: [false, true, false, false, true]
  },
  {
    name: "Self-Service Tools",
    description: "DIY tools like website builders are budget-friendly, but you can't expect strategic thinking & originality",
    icon: <div className="w-10 h-10 rounded-xl bg-slate-900/30 border border-slate-500/20 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform"><Cloud className="w-5 h-5" /></div>,
    stats: [false, false, true, true, false]
  }
];

const COLUMNS = [
  { name: "Speed", icon: <Zap className="w-3 h-3" /> },
  { name: "Flexibility", icon: <MousePointer2 className="w-3 h-3" /> },
  { name: "Quality", icon: <Sparkles className="w-3 h-3" /> },
  { name: "Scalability", icon: <Layers className="w-3 h-3" /> },
  { name: "Affordability", icon: <BarChart3 className="w-3 h-3" /> }
];

export default function Comparison() {
  const containerRef = React.useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const glow1Y = useTransform(springScroll, [0, 1], [-100, 100]);
  const glow2Y = useTransform(springScroll, [0, 1], [100, -100]);
  const scale = useTransform(springScroll, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section ref={containerRef} className="relative py-5 lg:py-20 bg-[#030303] overflow-hidden">
      {/* Background Ambient Glows - Parallax */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <motion.div
          style={{ y: glow1Y }}
          className="absolute top-[20%] -left-[10%] w-[800px] h-[800px] bg-[#660066]/20 rounded-full blur-[150px]"
        />
        <motion.div
          style={{ y: glow2Y }}
          className="absolute bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-[#8b5cf6]/15 rounded-full blur-[150px]"
        />
      </div>

      <motion.div
        style={{ scale }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-7xl font-bold text-white tracking-tighter mb-4 md:mb-6 leading-tight"
          >
            AdRyter's <br className="md:hidden" />
            <span className="italic font-serif font-light text-white/90">Alternative?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl font-medium text-gray-400 tracking-tight max-w-2xl mx-auto"
          >
            Why settle for standard when you can have <span className="text-white">Exceptional.</span>
          </motion.p>
        </div>

        {/* Comparison Content */}
        <div className="max-w-6xl mx-auto">
          {isMobile ? (
            <MobileComparison data={COMPARISON_DATA} columns={COLUMNS} />
          ) : (
            <>
              {/* Header Row (Desktop Only) */}
              <div className="hidden lg:grid grid-cols-[2fr_repeat(5,1fr)] gap-4 px-12 mb-10 items-end">
                <div className="text-[15px] font-black uppercase tracking-[0.4em] text-gray-200 pb-2">Platform Selection</div>
                {COLUMNS.map((col, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex flex-col items-center gap-2 pb-2"
                  >
                    <div className="text-[#660066] opacity-60">{col.icon}</div>
                    <div className="text-center text-[15px] font-black uppercase tracking-widest text-gray-200">
                      {col.name}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Data Rows */}
              <div className="flex flex-col gap-8">
                {COMPARISON_DATA.map((row, idx) => (
                  <motion.div
                    key={row.name}
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 1.2,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={cn(
                      "group relative rounded-[40px] overflow-hidden transition-all duration-700",
                      row.isPremium
                        ? "p-px bg-linear-to-r from-[#660066]/50 via-[#cc00cc]/50 to-[#660066]/50 shadow-[0_0_50px_rgba(102,0,102,0.3)]"
                        : "border border-white/5 hover:border-white/10"
                    )}
                  >
                    <div className={cn(
                      "relative w-full h-full rounded-[39px] grid grid-cols-1 lg:grid-cols-[2fr_repeat(5,1fr)] gap-4 lg:gap-4 p-6 lg:px-12 lg:py-10 items-center backdrop-blur-3xl transition-all duration-500",
                      row.isPremium ? "bg-[#0a0a0c]/95 shadow-[inset_0_0_30px_rgba(102,0,102,0.15)]" : "bg-white/2 hover:bg-white/5"
                    )}>
                      {/* Left Column: Platform Info */}
                      <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-8 text-center sm:text-left">
                        <div className="relative shrink-0 ">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {row.icon}
                          </motion.div>
                          {row.isPremium && (
                            <div className="absolute -inset-4 bg-[#660066]/20 blur-2xl rounded-full animate-pulse" />
                          )}
                        </div>
                        <div className="space-y-3 w-full">
                          <div className="flex items-center gap-3">
                            <h4 className={cn(
                              "text-2xl font-bold tracking-tight",
                              row.isPremium ? "text-white" : "text-gray-300"
                            )}>
                              {row.name}
                            </h4>
                          </div>
                          <p className="text-gray-500 w-full text-sm font-medium leading-relaxed max-w-md">
                            {row.description}
                          </p>
                        </div>
                      </div>

                      {/* Desktop Stats */}
                      {row.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="hidden lg:flex justify-center items-center">
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + idx * 0.1 + sIdx * 0.05, type: "spring" }}
                            className={cn(
                              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                              stat
                                ? "bg-green-500/3 group-hover:bg-green-500/8 border border-green-500/10 group-hover:border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.05)]"
                                : "bg-red-500/3 group-hover:bg-red-500/8 border border-red-500/5 group-hover:border-red-500/10 opacity-30 group-hover:opacity-100"
                            )}
                          >
                            {stat ? (
                              <Check className="w-5 h-5 text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" strokeWidth={3} />
                            ) : (
                              <X className="w-5 h-5 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]" strokeWidth={3} />
                            )}
                          </motion.div>
                        </div>
                      ))}
                    </div>

                    {/* Animated Shine for Premium */}
                    {row.isPremium && (
                      <motion.div
                        animate={{ x: ["-150%", "150%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-1/3 bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
