"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const MobileComparison = ({ data, columns }) => {
  return (
    <div className="flex flex-col gap-8">
      {data.map((row, idx) => (
        <motion.div
          key={row.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative rounded-[32px] overflow-hidden border transition-all duration-500",
            row.isPremium 
              ? "bg-[#0a0a0c] border-[#660066]/30 shadow-[0_0_30px_rgba(102,0,102,0.15)]" 
              : "bg-white/2 border-white/5"
          )}
        >
          {/* Header */}
          <div className="p-6 border-b border-white/5">
            <div className="flex items-center gap-4 mb-3">
              <div className="shrink-0">{row.icon}</div>
              <h4 className={cn(
                "text-2xl font-bold tracking-tight",
                row.isPremium ? "text-white" : "text-gray-300"
              )}>
                {row.name}
              </h4>
            </div>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              {row.description}
            </p>
          </div>

          {/* Stats List */}
          <div className="p-6 grid grid-cols-1 gap-4">
            {row.stats.map((stat, sIdx) => (
              <div key={sIdx} className="flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-[#660066]/60 shrink-0">{columns[sIdx].icon}</span>
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 truncate">
                    {columns[sIdx].name}
                  </span>
                </div>
                <div className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center border shrink-0",
                  stat
                    ? "bg-green-500/5 border-green-500/10 text-green-500"
                    : "bg-red-500/5 border-red-500/10 text-red-500 opacity-40"
                )}>
                  {stat ? <Check className="w-4 h-4" strokeWidth={3} /> : <X className="w-4 h-4" strokeWidth={3} />}
                </div>
              </div>
            ))}
          </div>

          {/* Premium Badge */}
          {row.isPremium && (
            <div className="absolute top-4 right-4 bg-[#660066] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-[0_0_10px_rgba(102,0,102,0.5)]">
              Best Value
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MobileComparison;
