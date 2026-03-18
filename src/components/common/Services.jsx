"use client";
import React from "react";
import MobileServices from "./MobileServices";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Import images from assets
import web1 from "@/assets/services/web1.png";
import web2 from "@/assets/services/web2.png";
import app1 from "@/assets/services/app1.png";
import app2 from "@/assets/services/app2.png";
import ai1 from "@/assets/services/ai1.png";
import ai2 from "@/assets/services/ai2.png";

const services = [
  {
    id: "web-dev",
    title: "Web",
    titleItalic: "Development",
    description: "SaaS Development, Custom Web Apps, Enterprise Portals, and Scalable Cloud Solutions. We build lightning-fast web experiences that convert.",
    images: [
      { id: 1, src: web1, label: "Laptop View" },
      { id: 2, src: web2, label: "Ecommerce View" }
    ]
  },
  {
    id: "app-dev",
    title: "Mobile",
    titleItalic: "Design",
    description: "iOS & Android Engineering, Interaction Design, and Fluid Mobile Experiences. Our apps focus on performance and breathtaking user interfaces.",
    images: [
      { id: 3, src: app1, label: "Fintech App" },
      { id: 4, src: app2, label: "Social UI" }
    ]
  },
  {
    id: "ai-auto",
    title: "AI",
    titleItalic: "Solutions",
    description: "LLM Integrations, Neural Network Architectures, and Business Workflow Automation. Replace manual toil with intelligent agentic pipelines.",
    images: [
      { id: 5, src: ai1, label: "Neural Network" },
      { id: 6, src: ai2, label: "AI Dashboard" }
    ]
  }
];

// Flattening services into individual scroll steps for the StickyScroll component
const scrollContent = services.map((service) => ({
  serviceId: service.id,
  title: (
    <div className="flex flex-col gap-6 ">
      <h2 className="text-4xl md:text-8xl font-bold text-white leading-tight tracking-tight">
        {service.title} <span className="italic font-serif font-light text-white/90">{service.titleItalic}</span>
      </h2>
    </div>
  ),
  description: (
    <div className="space-y-6  md:space-y-10">
      <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-md font-medium">
        {service.description}
      </p>
      <motion.a
        href="#contact"
        whileHover={{ x: 10 }}
        className="flex items-center gap-2 text-white font-bold tracking-tight text-lg group transition-all"
      >
        See More
        <ArrowRight className="w-5 h-5 text-[#660066] transition-transform group-hover:translate-x-1" />
      </motion.a>
    </div>
  ),
  content: (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start py-10">
      {service.images.map((img, idx) => (
        <motion.div
          key={img.id}
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative aspect-10/14 overflow-hidden rounded-[24px] lg:rounded-[32px] border border-white/5 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm",
            idx === 1 ? "sm:mt-24 lg:mt-32 scale-95" : "" // Subtle staggering only on desktop/tablet
          )}
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-full h-full object-cover"
          />
          {/* Subtle shadow overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      ))}
    </div>
  ),
}));

export default function Services() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative py-12 lg:py-20 bg-[#030303]">
      <div className="flex flex-col items-center mb-16 md:mb-32 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-black uppercase tracking-[0.6em] text-[#660066] mb-4"
        >
          Expertise
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold text-white tracking-tighter"
        >
          Our <span className="italic font-serif font-light text-white/90">Services</span>
        </motion.h2>
      </div>
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-[30%] -left-[10%] w-[800px] h-[800px] bg-[#660066]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[30%] -right-[10%] w-[800px] h-[800px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        {isMobile ? (
          <div className="container mx-auto px-6">
            <MobileServices services={services} />
          </div>
        ) : (
          <div className="w-full px-6 lg:px-12">
            <StickyScroll content={scrollContent} />
          </div>
        )}

        {/* Premium Themed Closing CTA */}
        <div className="py-12 flex flex-col items-center gap-12">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Animated Glow Border */}
            <div className="absolute -inset-1 bg-linear-to-r from-[#660066] via-[#a855f7] to-[#660066] rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center gap-4 cursor-pointer bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/10 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl transition-all"
            >
              Book a Call
              <div className="flex items-center  justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#660066] transition-colors">
                <Phone className="w-4 h-4 text-white " />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
