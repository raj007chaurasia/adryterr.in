import React from 'react';
import ScrollReveal from '../ScrollReveal';

const Vision = () => {
    return (
        <section className="relative pt-16 md:pt-48 pb-0 px-4">
            {/* Background Glows - Refined */}
            <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(204,0,204,0.05)_0%,transparent_70%)] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(102,0,102,0.1)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Left: Indicator & Methodology */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-10 lg:sticky lg:top-32 text-center lg:text-left">
                        <div className="flex items-center gap-6">
                            <div className="h-px w-10 bg-linear-to-r from-[#cc00cc] to-transparent"></div>
                            <span className="text-[#cc00cc] font-black tracking-[0.5em] text-[10px] uppercase drop-shadow-[0_0_12px_rgba(204,0,204,0.5)]">
                                Vision
                            </span>
                            <div className="h-px w-10 bg-linear-to-l from-[#cc00cc] to-transparent lg:hidden"></div>
                        </div>

                        <div className="space-y-6 lg:space-y-8">
                            <h3 className="text-3xl md:text-4xl lg:text-3xl font-bold tracking-tight text-white/90">
                                Building Digital Systems  <br />
                                <span className="italic font-serif font-light text-gray-500">That Scale Businesses</span>
                            </h3>
                            
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
                                <div className="hidden lg:block w-px h-16 bg-linear-to-b from-[#660066] to-transparent mt-2"></div>
                                <div className="lg:hidden w-16 h-px bg-linear-to-r from-transparent via-[#660066] to-transparent mb-2"></div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">
                                        Approach
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium tracking-wide">
                                      We don’t just design visuals  we create technology that drives growth, automation, and real business results.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visionary Statement */}
                    <div className="lg:col-span-8 space-y-12 lg:space-y-16">
                        <div className="relative">
                            <ScrollReveal
                                baseOpacity={0.15}
                                enableBlur={true}
                                blurStrength={6}
                                baseRotation={0}
                                wordAnimationEnd="top 30%"
                                textClassName="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center lg:text-left leading-[1.05] md:leading-[1]"
                            >
                               Where Technology Meets Performance & Growth
                            </ScrollReveal>
                        </div>

                        <div className="max-w-2xl mx-auto lg:ml-auto lg:mr-0 text-center lg:text-right">
                            <ScrollReveal
                                baseOpacity={0.1}
                                enableBlur={true}
                                blurStrength={8}
                                baseRotation={1}
                                wordAnimationEnd="top 35%"
                                textClassName="text-gray-400 text-lg md:text-xl lg:text-2xl font-light leading-relaxed opacity-90 font-sans"
                            >
We help businesses with website development, mobile app development, custom software, and AI automation in Gwalior, turning complex ideas into simple, high-performing digital solutions.                            </ScrollReveal>
                        </div>

                        {/* Architectural detail row - Tighter Spacing for Mobile */}
                        <div className="pt-12 lg:pt-16 grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-16 gap-x-12">
                            {[
                                { label: 'Craftsmanship', val: 'Fast & Scalable Development Built for speed, performance, and future growth ' },
                                { label: 'Engineering', val: 'Smart Automation Systems Reduce manual work with AI-powered solutions' },
                                { label: 'Philosophy', val: 'Result-Driven Approach Focused on leads, conversions, and ROI' },
                            ].map((item, i) => (
                                <div key={i} className="group relative pt-6 sm:pt-0 sm:pl-6 flex flex-col items-center sm:items-start text-center sm:text-left">
                                    {/* Line: Horizontal top for mobile, Vertical side for Desktop */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-linear-to-r from-transparent via-[#cc00cc]/30 to-transparent sm:left-0 sm:top-0 sm:bottom-0 sm:h-full sm:w-px sm:translate-x-0 sm:bg-linear-to-b sm:via-transparent group-hover:via-[#cc00cc] transition-all duration-500"></div>
                                    
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[12px] uppercase tracking-[0.5em] text-gray-400 font-black transition-colors duration-300 group-hover:text-[#cc00cc]/80">
                                            {item.label}
                                        </span>
                                        <span className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-light italic font-serif text-gray-300 transition-colors duration-300 group-hover:text-white">
                                            {item.val}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
