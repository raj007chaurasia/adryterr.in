import React from 'react';
import { motion } from 'framer-motion';
import StarBorder from '../StarBorder';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

const AboutPartner = () => {
    return (
        <section className="relative w-full py-10 lg:py-20 px-4 md:px-8 bg-[#030303] overflow-hidden">
            {/* Subtle Gradient Backdrops */}
            <div className="absolute top-1/2 left-0 w-1/3 h-[500px] bg-[#cc00cc]/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-1/3 h-[500px] bg-[#6600ff]/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-20 z-10 relative">
                
                {/* Right Side (On Desktop) / Top (On Mobile): Floating 3D Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full relative order-1 lg:order-2 flex justify-center  scale-150 pr-20 items-center"
                >
                    {/* The continuous up/down 3D floating animation */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 5, 
                            ease: "easeInOut" 
                        }}
                        className="relative w-full  flex justify-center items-center "
                    >
                        <img 
                            src="/images/banner.png" 
                            alt="Design and Apps mockup" 
                            className="max-w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(204,0,204,0.15)] scale-110 md:scale-125 lg:scale-110"
                        />
                    </motion.div>
                </motion.div>

                {/* Left Side: Text Content */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0"
                >
                   
                 

                    {/* Dynamic Heading */}
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-sans font-bold tracking-tighter leading-[1.15] mb-6 lg:mb-8 text-white">
                        Your Go-To Partner For <br className="hidden lg:block" />
                        Impactful Designs To Create <br className="hidden lg:block" />
                        <span 
                            className="font-playfair italic font-black text-[#cc00cc] drop-shadow-[0_0_20px_rgba(204,0,204,0.3)] pr-1" 
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Apps & Websites
                        </span>
                        For Business Success!
                    </motion.h2>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants}>
                        <StarBorder
                            as="button"
                            color="#cc00cc"
                            speed="4s"
                            thickness={2}
                            className="hover:scale-105 cursor-pointer active:scale-95 transition-transform bg-[#cc00cc]/20 shadow-[0_0_30px_rgba(204,0,204,0.2)]"
                        >
                            <div className="px-6 py-3 lg:px-8 lg:py-3.5 text-white text-xs lg:text-sm font-black uppercase tracking-widest flex items-center gap-2 lg:gap-3">
                                Book a Call
                                <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1.5 transition-transform text-[#cc00cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </StarBorder>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutPartner;
