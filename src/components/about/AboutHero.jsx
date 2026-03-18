import React from 'react';
import { motion } from 'framer-motion';
import Plasma from '../Plasma';
import StarBorder from '../StarBorder';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
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

const AboutHero = () => {
    return (
        <section className="relative w-full min-h-[20vh] flex flex-col items-center justify-center pt-24 lg:pt-12 lg:pb-6 px-4 bg-[#030303] overflow-hidden">
            
            {/* Ambient Animated Background */}
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden opacity-60">
                <Plasma
                    color="#660066"
                    speed={2}
                    direction="forward"
                    scale={1.5}
                    opacity={0.6}
                    mouseInteractive={true}
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#030303]/40 via-[#030303]/80 to-[#030303] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none mask-[radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            {/* Glowing Accent Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#cc00cc]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#6600ff]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

            {/* Main Content */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-8">
                    <StarBorder
                        color="#cc00cc"
                        speed="4s"
                        thickness={1.5}
                        className="rounded-full"
                    >
                        <div className="px-6 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/5">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gray-300">
                                Meet The Visionaries
                            </span>
                        </div>
                    </StarBorder>
                </motion.div>

                {/* Main Heading Group */}
                <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tighter leading-[1.1] mb-2 text-white/90">
                    The Minds Behind
                </motion.h1>
                
                <motion.div variants={itemVariants} className="mb-10 relative">
                    {/* Outline / Stroke Text Effect Behind */}
                    <span 
                        className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-playfair italic font-black blur-md text-[#cc00cc]/40 select-none z-0 translate-y-2 opacity-50" 
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        AdRyter
                    </span>
                    {/* Foreground Text */}
                    <span 
                        className="relative text-4xl md:text-5xl lg:text-6xl font-playfair italic font-black  select-none z-10 drop-shadow-[0_0_30px_rgba(204,0,204,0.5)] bg-clip-text text-transparent bg-linear-to-br from-[#cc00cc] via-[#cc00cc] to-[#cc00cc]" 
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Team Of  AdRyter
                    </span>
                </motion.div>

              
             
            </motion.div>

            {/* Bottom fading mask for smooth transition to gallery */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#030303] to-transparent pointer-events-none z-20" />
        </section>
    );
};

export default AboutHero;
