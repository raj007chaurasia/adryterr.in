"use client";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import ContactForm from "../components/common/ContactForm";
import Footer from "../components/common/Footer";

const ContactPage = () => {
  const location = useLocation();
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; 
      videoRef.current.play().catch(err => {
        console.warn("Autoplay block protection:", err);
        if (videoRef.current) {
           videoRef.current.muted = true;
           videoRef.current.play();
        }
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  useEffect(() => {
    if (location.hash === '#contact-form') {
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [location]);

  return (
    <div className="bg-[#030303] min-h-screen pt-24 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#660066]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#8b5cf6]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-20">
        {/* Top Section: Editorial Header with Media */}
        <div className="max-w-7xl mx-auto mb-24 lg:mb-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
             <div className="space-y-12">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-[#cc00cc] mb-6"
                  >
                    Inquiries
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[1.1] mb-6"
                  >
                     Let's create <br />
                     <span className="italic font-serif font-light text-white/80">together</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-500 text-base md:text-lg font-medium max-w-xl leading-relaxed"
                  >
                    We collaborate with brands that want to redefine their industry. <br className="hidden md:block" /> Reach out to start the journey.
                  </motion.p>
                </div>
             </div>

             {/* Right Side: Featured Media/Video Container */}
             <motion.div
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="relative group cursor-pointer"
             >
               <div className="absolute -inset-1 bg-linear-to-r from-[#660066]/20 to-[#cc00cc]/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
               <div className="relative aspect-square md:aspect-video lg:aspect-square xl:aspect-video rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                 <video 
                   ref={videoRef}
                   src="/videos/v1.mp4" 
                   className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                   playsInline
                   loop
                   muted={true}
                 />
                 {/* Play Button Overlay (Hidden on Hover) */}
                 <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl relative"
                    >
                      <div className="absolute -inset-2 rounded-full border border-[#cc00cc]/30 animate-ping opacity-75" />
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent translate-x-[1px]" />
                    </motion.div>
                 </div>
               </div>
             </motion.div>
           </div>

           {/* Content Grid: Info + Form (Nested in max-w-7xl) */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             {/* Left: Contact Info */}
             <div className="lg:col-span-4 space-y-16">
               <div className="space-y-12">
                 <InfoGroup title="General" value="info@adryter.in" href="mailto:info@adryter.in" />
                 <InfoGroup title="Phone" value="+91-7738538548" href="tel:+917738538548" />
                 <InfoGroup title="Studio" value="T-23, 3rd floor, Madhav Plaza, Jinsi Rd Number 2, Lohiya Bazaar, Gwalior, Madhya Pradesh 474001" />
               </div>
             </div>

             {/* Right: Focused Form */}
             <div id="contact-form" className="lg:col-span-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="bg-zinc-900/40 backdrop-blur-3xl border border-white/5 p-8 md:p-12 lg:p-16 rounded-[48px] shadow-2xl relative overflow-hidden"
               >
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#660066]/10 rounded-full blur-[80px]"></div>
                  <div className="relative z-10">
                    <div className="mb-16">
                      <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Project Inquiry</h2>
                      <p className="text-gray-500 font-medium">Please fill in the details and we'll reach out within 24 hours.</p>
                    </div>
                    <ContactForm />
                  </div>
               </motion.div>
             </div>
           </div>
        </div>

        {/* Bottom Section: Full Width Map */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] md:h-[600px] rounded-[48px] overflow-hidden border border-white/10 group shadow-2xl"
        >
          <iframe
              title="Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28639.486577773478!2d78.11697721481325!3d26.198765903289722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c537e465de89%3A0xeeb6d9039fcd5545!2sAdryter%20Advertising!5e0!3m2!1sen!2sin!4v1773838690164!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(.5) invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen=""
              loading="lazy"
              className="group-hover:scale-[1.02] transition-transform duration-1000 opacity-60 group-hover:opacity-100"
          ></iframe>
           {/* Floating Badge */}
           <div className="absolute bottom-8 left-8 md:left-12 bg-black/80 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-2xl">
             <div className="w-10 h-10 rounded-xl bg-[#660066]/20 flex items-center justify-center">
               <MapPin className="w-5 h-5 text-[#cc00cc]" />
             </div>
             <div>
               <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-0.5">Base Studio</p>
               <span className="text-sm text-white font-bold">T-23, 3rd floor, Madhav Plaza, Jinsi Rd Number 2, Lohiya Bazaar, Gwalior, Madhya Pradesh 474001</span>
             </div>
           </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

const InfoGroup = ({ title, value, href }) => (
  <div className="group space-y-3">
    <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black">{title}</p>
    {href ? (
      <a href={href} className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 hover:text-[#cc00cc] transition-colors leading-tight">
        {value} <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </a>
    ) : (
      <p className="text-2xl md:text-3xl font-bold text-white leading-tight">{value}</p>
    )}
  </div>
);

export default ContactPage;
