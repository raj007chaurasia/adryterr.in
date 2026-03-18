import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { SiFigma, SiReact, SiNextdotjs, SiWebflow, SiSketch, SiFramer, SiFirebase, SiTailwindcss, SiDocker, SiPostgresql, SiAndroid } from 'react-icons/si';
import { TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeAfterEffect, TbBrandAdobeXd, TbBrandAws } from 'react-icons/tb';

const ICON_MAP = {
    framer: SiFramer,
    figma: SiFigma,
    adobephotoshop: TbBrandAdobePhotoshop,
    adobeillustrator: TbBrandAdobeIllustrator,
    adobeaftereffects: TbBrandAdobeAfterEffect,
    adobexd: TbBrandAdobeXd,
    sketch: SiSketch,
    react: SiReact,
    nextdotjs: SiNextdotjs,
    webflow: SiWebflow,
    firebase: SiFirebase,
    tailwindcss: SiTailwindcss,
    docker: SiDocker,
    aws: TbBrandAws,
    postgresql: SiPostgresql,
    android: SiAndroid
};

const ServiceCard = ({
    title,
    description,
    image,
    items = [],
    subServices = [],
    toolIcons = [],
    glowColor = "rgba(204, 0, 204, 0.08)", // Fallback
    visitLink = "" // Optional
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };



    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="group relative rounded-3xl bg-linear-to-br from-[#0a0a0a] to-[#050505] border border-white/5 overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:border-[#cc00cc]/20 transition-all duration-500 cursor-pointer flex flex-col lg:flex-row items-stretch"
        >

            {/* Left/Top Collage Header Section */}
            <div className="relative h-[240px] md:h-[350px] lg:h-auto lg:w-[45%] overflow-hidden bg-linear-to-r from-[#cc00cc]/10 to-[#6035d8]/10 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5">

                {/* Visual Background Lights */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,204,0.15)_0%,transparent_70%)] pointer-events-none" />

                {/* Collage Wrapper */}
                <div className="absolute top-10 md:top-14 lg:top-16 transform filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] group-hover:scale-[1.03] duration-700 transition-transform">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto max-w-[360px] md:max-w-[420px] lg:max-w-[440px] object-bottom object-contain pointer-events-none select-none"
                    />
                </div>

                {/* Fade transparent overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#050505] to-transparent z-10" />
            </div>

            {/* Right/Bottom Content Container */}
            <div
                className="relative p-8 md:p-12 lg:p-14 flex flex-col flex-1 z-20 justify-center overflow-hidden group/right"
                onMouseMove={handleMouseMove}
            >
                {/* Dynamic Spotlight Glow */}
                <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover/right:opacity-100 transition-opacity duration-300 z-10"
                    style={{
                        background: useTransform(
                            [mouseX, mouseY],
                            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, ${glowColor}, transparent 40%)`
                        ),
                    }}
                />

                {/* Subtle Border Glow (White) */}
                <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover/right:opacity-100 transition-opacity duration-300 z-10"
                    style={{
                        background: useTransform(
                            [mouseX, mouseY],
                            ([x, y]) => `radial-gradient(200px circle at ${x}px ${y}px, rgba(255,255,255,0.04), transparent 80%)`
                        ),
                    }}
                />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-black text-white transition-colors duration-300 mb-4 tracking-tight">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                    {description}
                </p>

                {/* Sub Services bullet Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between group/item p-3 rounded-xl border border-white/3 hover:border-[#cc00cc]/20 hover:bg-white/2 transition-all duration-300"
                        >
                            <span className="text-gray-300 font-medium text-sm group-hover/item:text-white transition-colors">
                                {item}
                            </span>
                            <div className="w-5 h-5 flex items-center justify-center text-gray-500 group-hover/item:translate-x-1 group-hover/item:text-[#cc00cc] transition-all duration-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Section: Icons & Visit Button */}
                {(toolIcons?.length > 0 || visitLink) && (
                    <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-white/5 relative z-30">
                        {/* Tool Icons */}
                        {toolIcons?.length > 0 ? (
                            <div className="flex flex-wrap items-center gap-2">
                                {toolIcons.map((ic, i) => {
                                    const Icon = ICON_MAP[ic.toLowerCase()];
                                    return (
                                        <div key={i} className="w-8 h-8 rounded-full bg-linear-to-b from-white/5 to-transparent border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-[1.15] cursor-pointer text-gray-400 hover:text-white" title={ic}>
                                            {Icon ? <Icon className="w-4 h-4" /> : <span className="text-[10px]">{ic}</span>}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : <div />}

                        {/* Visit Button */}
                        {visitLink && (
                            <a 
                                href={visitLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#cc00cc] hover:bg-[#b300b3] text-white text-sm font-semibold transition-all duration-300 shadow-[0_4px_12px_-2px_rgba(204,0,204,0.3)] hover:shadow-[0_6px_16px_rgba(204,0,204,0.4)] cursor-pointer w-full sm:w-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span>Visit</span>
                                <svg className="w-4 h-4 translate-y-[0.5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ServiceCard;
