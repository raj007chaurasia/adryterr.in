"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "Which is the best software development company in Gwalior?",
    answer: "AdRyter is considered one of the best software development companies in Gwalior, offering website development, mobile app development, custom software, and AI automation solutions for businesses of all sizes."
  },
  {
    question: "What makes AdRyter different from other development companies?",
    answer: "Unlike traditional agencies, we focus on business results, not just development. We build websites and apps that generate leads, automate processes, and help businesses grow faster."
  },
  {
    question: "Do you build websites that actually generate leads?",
    answer: "Yes, we don’t just design websites — we create conversion-focused websites that are optimized for SEO, speed, and user experience to generate real leads and sales."
  },
  {
    question: "Can I automate my business using AI?",
    answer: "Absolutely. We provide AI automation services in Gwalior including chatbots, lead automation, and workflow automation to reduce manual work and increase efficien"
  },
  {
    question: "Is website development important for local businesses in Gwalior?",
    answer: "Yes, having a professional website helps local businesses in Gwalior: Get more customers online, Build trust and credibility, Rank on Google search"
  },
  {
    question: " How do I choose the right website development company in Gwalior?",
    answer: "Look for: Experience & past work, SEO-friendly development, Fast delivery, Ongoing support"
  }
];

const FAQItem = ({ item, isOpen, toggle }) => {
  return (
    <div 
      className={cn(
        "border-b border-white/5 last:border-none transition-all duration-500",
        isOpen ? "bg-white/2" : "hover:bg-white/1"
      )}
    >
      <button
        onClick={toggle}
        className="w-full py-10 px-6 flex items-center justify-between text-left group gap-8"
      >
        <span className={cn(
          "text-xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
          isOpen ? "text-white" : "text-gray-400 group-hover:text-white"
        )}>
          {item.question}
        </span>
        <div className={cn(
          "w-10 h-10 shrink-0 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500",
          isOpen ? "bg-[#660066] border-[#660066] rotate-180" : "group-hover:border-white/20"
        )}>
          <ChevronDown className={cn(
            "w-5 h-5 transition-colors",
            isOpen ? "text-white" : "text-gray-400 group-hover:text-white"
          )} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8">
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium max-w-3xl">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-8 md:py-12 bg-[#030303] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#660066]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Section Header - Centered */}
        <div className="text-center mb-20 md:mb-32 max-w-2xl flex flex-col items-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-8 bg-linear-to-r from-[#cc00cc] to-transparent"></div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-[#cc00cc] drop-shadow-[0_0_12px_rgba(204,0,204,0.4)]"
            >
              Support & Clarity
            </motion.span>
            <div className="h-px w-8 bg-linear-to-l from-[#cc00cc] to-transparent"></div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight"
          >
            Common <span className="italic font-serif font-light text-white/90">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-medium mt-8"
          >
          Everything you need to know about our services, process, pricing, and how we help businesses grow with technology.
          </motion.p>
        </div>

        {/* Accordion List - Centered Width */}
        <div className="w-full max-w-4xl border-t border-white/5">
          {FAQ_DATA.map((item, idx) => (
            <FAQItem 
              key={idx} 
              item={item} 
              isOpen={openIndex === idx} 
              toggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
