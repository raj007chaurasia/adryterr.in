"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Locations from "./Locations";

const FOOTER_LINKS = [
  {
    title: "Important Links",
    links: ["Contact Us", "About Us", "Products", "Services", "Blogs"],
  },
  {
    title: "Services",
    links: ["UI/UX Design", "Web Design", "Logo & Branding", "Webflow Design", "Framer Design"],
  },
  {
    title: "Specialized Industry",
    links: ["Fintech Industry", "Healthcare & Fitness Industry", "Edtech Industry", "Cybersecurity Industry", "Company Deck"],
  },
 
];



export default function Footer() {
  return (
    <footer className="relative bg-[#030303] overflow-hidden   ">
      <Locations/>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8  mb-24 justify-center items-center w-full">
          
          

          {FOOTER_LINKS.map((section, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="flex flex-col gap-6 w-full max-w-[200px]">
                <h4 className="text-white font-bold text-lg tracking-tight">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => {
                    const isRouterLink = ["Blogs", "Contact Us", "About Us", "Products"].includes(link);
                    const linkPath = link === "Blogs" ? "/blogs" : link === "Contact Us" ? "/contact" : link === "About Us" ? "/about" : "/products";

                    return (
                      <li key={lIdx}>
                        {isRouterLink ? (
                          <Link
                            to={linkPath}
                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group w-fit"
                          >
                            <span className="text-sm font-medium">{link}</span>
                          </Link>
                        ) : (
                          <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group w-fit"
                          >
                            <span className="text-sm font-medium">{link}</span>
                           
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        {/* Top Section: Links Grid end */}
        </div>

     
        {/* Bottom Section: Legal & Copyright */}
        <div className="lg:pt-4 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-30 border-t border-white/5">
          <a href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
            Terms & Conditions
          </a>
          
          <p className="text-xs text-center font-bold text-gray-600 uppercase tracking-widest">
            © 2026, AdRyter, All Rights Reserved.
          </p>

          <a href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
            Privacy Policy
          </a>
        </div>

        {/* Massive Brand Finish - Layered Styling */}
        <div className="mt-32 md:mt-48 relative flex flex-col items-center justify-center overflow-visible h-[20vh] md:h-[45vh]">
          {/* Top Layer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-1/2 translate-y-[15%] z-20"
          >
            <h2 className="text-[14vw] md:text-[16vw] font-black text-white/60 tracking-[0.05em] md:tracking-widest leading-none select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] uppercase">
              AdRyter
            </h2>
          </motion.div>

          {/* Horizontal Decorative Line */}
         
          {/* Bottom Layer (Reflection Effect) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 translate-y-[-4%] scale-y-[-1] blur-xs z-10"
          >
            <h2 className="text-[14vw] md:text-[16vw] font-black text-white/20 tracking-[0.05em] md:tracking-widest leading-none select-none bg-linear-to-b from-white/30 to-transparent bg-clip-text uppercase">
              AdRyter
            </h2>
          </motion.div>

          {/* Stronger Bottom Glow Shadow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-linear-to-t from-[#660066]/30 via-transparent to-transparent z-0 pointer-events-none" />
        </div>
      </div>

      {/* Background Decor - Pulsing Glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#660066]/20 rounded-full blur-[200px] pointer-events-none opacity-50" />
    </footer>
  );
}
