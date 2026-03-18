import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Plasma from '../Plasma';
import StarBorder from '../StarBorder';
import LogoLoop from '../LogoLoop';

const Hero = () => {
    const navigate = useNavigate();
    const partnerLogos = useMemo(() => [
        { node: <span className="text-gray-500 font-bold tracking-widest px-4 opacity-50 hover:opacity-100 transition-opacity">TECHFLOW</span> },
        { node: <span className="text-gray-500 font-bold tracking-widest px-4 opacity-50 hover:opacity-100 transition-opacity">VANTAGE</span> },
        { node: <span className="text-gray-500 font-bold tracking-widest px-4 opacity-50 hover:opacity-100 transition-opacity">NEXUS</span> },
        { node: <span className="text-gray-500 font-bold tracking-widest px-4 opacity-50 hover:opacity-100 transition-opacity">QUANTUM</span> },
        { node: <span className="text-gray-500 font-bold tracking-widest px-4 opacity-50 hover:opacity-100 transition-opacity">ZENITH</span> },
        { node: <span className="text-gray-500 font-bold tracking-widest px-4 opacity-50 hover:opacity-100 transition-opacity">AURORA</span> },
    ], []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-[#030303]/5 text-white font-sans py-15">
            {/* Plasma background */}
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden ">
                <Plasma
                    color="#660066"
                    speed={1}
                    direction="forward"
                    scale={1}
                    opacity={1}
                    mouseInteractive={true}
                />
                <div className="absolute inset-0 bg-[#030303]/10 pointer-events-none"></div>
            </div>

            {/* Main Hero Content */}
            <div className="container mx-auto relative z-10 text-center px-4 max-w-4xl flex flex-col items-center justify-center pt-24 md:pt-32 pb-10">
                {/* Top Tagline */}
                {/* Ultra-Clean Premium Tagline */}
                <div className="mb-4 md:mb-6 flex items-center justify-center gap-2 md:gap-4 group cursor-default">
                    <div className="h-px w-4 md:w-6 bg-linear-to-r from-transparent to-[#660066]/60"></div>
                    <p className="text-[#cc00cc] font-black tracking-widest md:tracking-[0.5em] text-[8px] md:text-[12px] uppercase drop-shadow-[0_0_10px_rgba(204,0,204,0.3)]">
                        Design • Build • Innovate
                    </p>
                    <div className="h-px w-4 md:w-6 bg-linear-to-r from-[#660066]/60 to-transparent"></div>
                </div>

                {/* Dynamic Heading */}
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-4 md:mb-6 scale-95 md:scale-100">
                    We <span className="italic font-serif font-light text-gray-300">Design</span> Products That <br />
                    Drive <span className="relative inline-block px-3 py-0.5 mx-1">
                        <span className="relative z-10 italic font-serif font-light text-gray-300">Results</span>
                        <div className="absolute inset-0 border-2 border-[#660066] rounded-xl -rotate-1 skew-x-1"></div>
                    </span>
                </h1>

                {/* Sub-heading */}
                <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto mb-6 md:mb-8 font-medium leading-relaxed">
                    Join a growing community of brands and creators building high-performance
                    digital products with AdRyter.
                </p>

                {/* Social Proof & CTA Row */}
                <div className="flex flex-col items-center gap-8">
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                        {['UI/UX Design', 'Web Development', 'Brand Identity', 'SEO'].map((tag) => (
                            <div key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:border-[#660066]/50 transition-all cursor-default">
                                {tag}
                            </div>
                        ))}
                    </div>

                    {/* Premium CTA with StarBorder */}
                    <StarBorder
                        as="button"
                        color="#660066"
                        speed="6s"
                        thickness={2}
                        className="hover:scale-[1.03] cursor-pointer active:scale-[0.97] bg-[#5500663f] transition-all shadow-[0_0_40px_rgba(102,0,102,0.3)]"
                        onClick={() => navigate('/contact#contact-form')}
                    >
                        <div className="px-10 py-4 text-white text-xs font-black uppercase tracking-[0.25em] flex items-center gap-2">
                            Start Your Project
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </StarBorder>
                </div>
            </div>

            {/* Dual-Lane Logo Loop Section */}
            <div className="w-full relative z-10 py-12 bg-black/40">
                <p className="text-center text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-10 font-bold opacity-50">
                    Trusted by industry leaders worldwide
                </p>
                <div className="flex flex-col gap-6">
                    <LogoLoop
                        logos={partnerLogos}
                        speed={35}
                        direction="left"
                        gap={80}
                        logoHeight={18}
                        pauseOnHover={true}
                        fadeOut={true}
                        fadeOutColor="#030303"
                    />
                    <LogoLoop
                        logos={partnerLogos}
                        speed={35}
                        direction="right"
                        gap={80}
                        logoHeight={18}
                        pauseOnHover={true}
                        fadeOut={true}
                        fadeOutColor="#030303"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
