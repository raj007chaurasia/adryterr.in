"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const MobileServices = ({ services }) => {
  return (
    <div className="flex flex-col gap-12 px-2">
      {services.map((service, idx) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col gap-6"
        >
          {/* Service Header */}
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-white tracking-tighter">
              {service.title} <span className="italic font-serif font-light text-white/80">{service.titleItalic}</span>
            </h3>
            <p className="text-gray-400 text-base leading-relaxed font-medium">
              {service.description}
            </p>
          </div>

          {/* Service Images */}
          <div className="grid grid-cols-1 gap-6">
            {service.images.map((img) => (
              <div
                key={img.id}
                className="relative aspect-16/10 overflow-hidden rounded-[24px] border border-white/5 bg-zinc-900/50 backdrop-blur-sm"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6">
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{img.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <Link
            to="/services"
            className="flex items-center gap-2 text-white font-bold tracking-tight text-lg group w-fit"
          >
            Explore {service.title}
            <ArrowRight className="w-5 h-5 text-[#660066]" />
          </Link>

          {/* Divider between services */}
          {idx !== services.length - 1 && (
            <div className="w-full h-px bg-white/5 mt-8" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MobileServices;
