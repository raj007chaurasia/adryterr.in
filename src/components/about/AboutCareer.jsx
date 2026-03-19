import React from 'react';
import { motion } from 'framer-motion';

const AboutCareer = () => {
    return (
        <section className="relative w-full py-10 lg:py-24 px-4 md:px-8 bg-[#030303] overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 lg:h-full bg-[radial-gradient(ellipse_at_center,rgba(96,53,216,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-4xl bg-linear-to-br from-[#0d0d0d] to-[#050505] border border-white/5 p-8 md:p-16 lg:p-20 overflow-visible shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center md:items-stretch"
                >
                    {/* Floating Glow Inside Card */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_40%,rgba(138,43,226,0.15)_0%,transparent_60%)] pointer-events-none rounded-4xl" />

                    {/* Left Column: Text Content */}
                    <div className="flex-1 z-20 flex flex-col justify-center text-left max-w-lg">
                        {/* Career Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-fit mb-6 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm"
                        >
                            <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">Career</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-[1.05] tracking-tight mb-4 text-white"
                        >
                            Want to Build Your Career in Software Development? <br />
                            <span
                                className="font-playfair italic font-medium text-[#cc00cc] drop-shadow-[0_0_20px_rgba(204,0,204,0.3)] pr-2"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Join AdRyter Team
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-400 text-sm md:text-base lg:text-lg mb-8 max-w-md font-medium leading-relaxed"
                        >
                            We are looking for passionate and talented individuals who want to grow in website development, app development, and AI automation.

                            <br />At AdRyter, you’ll work on real projects, learn fast, and build impactful digital solutions.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.a
                            href="https://adryter.com/hiring"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-linear-to-r from-[#6035d8] to-[#6a1b9a] hover:from-[#7245ec] hover:to-[#8e24aa] text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(96,53,216,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(96,53,216,0.6)] hover:scale-[1.02] active:scale-95 cursor-pointer w-fit"
                        >
                            Join our team
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>
                    </div>

                    {/* Right Column: Overlapping Image */}
                    <div className="flex-1 relative hidden mt-10 md:mt-0 min-h-0 md:min-h-full lg:flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative md:absolute bottom-0 md:bottom-[-60px] lg:bottom-[-80px] right-0 md:right-[-10px] lg:right-[-20px] w-full max-w-[400px] md:max-w-none md:w-[105%] lg:w-[115%] aspect-square md:aspect-auto flex items-end justify-center md:justify-end"
                        >
                            <img
                                src="/images/carrer.png"
                                alt="Our Team"
                                className="w-full h-auto object-bottom object-contain relative z-10 select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                            />
                            {/* Purple Glow behind image */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,204,0.3)_0%,transparent_60%)] scale-75 filter blur-3xl pointer-events-none z-0" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutCareer;
