"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail } from "lucide-react";
import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook, FiYoutube } from "react-icons/fi";



export default function Locations() {
  return (
    <section className="relative w-full min-h-[110vh] md:min-h-[120vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/footer_globe.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-b from-[#030303] via-transparent to-[#030303]" />
        <div className="absolute inset-0 bg-linear-to-r from-[#030303] via-transparent to-[#030303]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-[#660066] mb-4 block"
          >
            Worldwide
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tighter"
          >
            Global <span className="italic font-serif font-light text-white/90">Presence</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {/* Top Row: Address and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

            {/* Card 1: Address (Australia & United States) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-[24px] bg-white/3 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/7 group-hover:border-white/20 h-full flex flex-col items-center text-center">
                <div className="absolute -inset-2 bg-[#660066]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-2xl bg-[#660066]/20 flex items-center justify-center mb-4 border border-[#660066]/30">
                  <MapPin className="w-6 h-6 text-[#cc00cc]" />
                </div>
                <h4 className="relative z-10 text-xl font-bold text-white mb-4 tracking-tight">
                  Address
                </h4>
                <div className="relative z-10 space-y-4 text-gray-400 text-xs md:text-sm font-medium leading-relaxed flex-1 flex flex-col justify-center">
                  <p className="opacity-90 max-w-[280px]">
                    T-23, 3rd floor, Madhav Plaza, Jinsi Rd Number 2, Lohiya Bazaar, Gwalior, Madhya Pradesh 474001                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Contact No. (Singapore & South Africa) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-[24px] bg-white/3 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/7 group-hover:border-white/20 h-full flex flex-col items-center text-center">
                <div className="absolute -inset-2 bg-[#660066]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-2xl bg-[#660066]/20 flex items-center justify-center mb-4 border border-[#660066]/30">
                  <Phone className="w-6 h-6 text-[#cc00cc]" />
                </div>
                <h4 className="relative z-10 text-xl font-bold text-white mb-4 tracking-tight">
                  Contact
                </h4>
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 text-gray-400 text-xs md:text-sm font-medium leading-relaxed flex-1 w-full mt-4">

                  {/* Phone */}
                  <div className="flex flex-col items-center gap-1.5 w-full flex-1">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#cc00cc]" />Number
                    </p>
                    <a href="tel:07738538548" className="opacity-80 hover:text-[#cc00cc] hover:opacity-100 transition-all duration-300">
                      +91-7738538548 <br />
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col items-center gap-1.5 border-t border-white/5 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 w-full flex-1">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#cc00cc]" />Email
                    </p>
                    <a href="mailto:hello@adryter.in" className="opacity-80 hover:text-[#cc00cc] hover:opacity-100 transition-all duration-300">
                      info@adryter.in
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Social Media (Cyprus & Dubai) */}
          <div className="flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative w-full md:max-w-md"
            >
              <div className="relative p-8 rounded-[24px] bg-white/3 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/7 group-hover:border-white/20 h-full flex flex-col items-center text-center">
                <div className="absolute -inset-2 bg-[#660066]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="relative z-10 text-xl font-bold text-white mb-5 tracking-tight">
                  Social Media Icons
                </h4>

                {/* Icons Grid extracted from Footer for match */}
                <div className="relative z-10 flex items-center justify-center gap-5">
                  {/* LinkedIn */}
                  <motion.a
                    href="http://linkedin.com/company/adryter-advertising"
                    target="_blank"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#0077b5]/30 shadow-[0_4px_15px_-3px_rgba(0,119,181,0.05)] hover:shadow-[0_4px_25px_-3px_rgba(0,119,181,0.2)] transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-[#0077b5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FiLinkedin className="w-5 h-5 text-gray-400 group-hover:text-[#0077b5] transition-colors duration-300" />
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/adryter_advvertising"
                    target="_blank"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#ff0066]/30 shadow-[0_4px_15px_-3px_rgba(255,0,102,0.05)] hover:shadow-[0_4px_25px_-3px_rgba(255,0,102,0.2)] transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-[#ff0066]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FiInstagram className="w-5 h-5 text-gray-400 group-hover:text-[#ff0066] transition-colors duration-300" />
                  </motion.a>

                  {/* Youtube */}
                  <motion.a
                    href="https://www.youtube.com/@AdRyterAdvvertising"
                    target="_blank"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#ff0000]/30 shadow-[0_4px_15px_-3px_rgba(255,0,0,0.05)] hover:shadow-[0_4px_25px_-3px_rgba(255,0,0,0.2)] transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-[#ff0000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FiYoutube className="w-5 h-5 text-gray-400 group-hover:text-[#ff0000] transition-colors duration-300" />
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    href="https://www.facebook.com/adryteradvertising"
                    target="_blank"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#1877f2]/30 shadow-[0_4px_15px_-3px_rgba(24,119,242,0.05)] hover:shadow-[0_4px_25px_-3px_rgba(24,119,242,0.2)] transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-[#1877f2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FiFacebook className="w-5 h-5 text-gray-400 group-hover:text-[#1877f2] transition-colors duration-300" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
