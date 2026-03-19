import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import StarBorder from '../StarBorder';

const stats = [
    { label: 'Videos', value: '268' },
    { label: 'Likes', value: '100K' },
    { label: 'Subscribers', value: '50K' },
    { label: 'Views', value: '1M' }
];

const highlights = [
    {
        title: 'Industry Insights',
        video: '/videos/footer_globe.mp4',
        poster: '/images/project-ai.png',
        color: 'from-blue-500/20'
    },
    {
        title: 'Creative Process',
        video: '/videos/footer_globe.mp4',
        poster: '/images/project-creative.png',
        color: 'from-purple-500/20'
    },
    {
        title: 'Brand Stories',
        video: '/videos/footer_globe.mp4',
        poster: '/images/project-saas.png',
        color: 'from-emerald-500/20'
    },
    {
        title: 'Tech Evolution',
        video: '/videos/footer_globe.mp4',
        poster: '/images/project-creative.png',
        color: 'from-rose-500/20'
    }
];

const ContentCard = ({ item, index }) => {
    const videoRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
        if (videoRef.current) {
            videoRef.current.play().catch(err => console.log("Video play interrupted", err));
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative aspect-3/4 rounded-3xl overflow-hidden border border-white/5 bg-[#0d0d0d]/40 backdrop-blur-sm hover:border-[#cc00cc]/20 transition-all duration-500 cursor-pointer"
        >
            {/* Poster / Static Image */}
            <img 
                src={item.poster} 
                alt={item.title} 
                className={`w-full h-full object-cover transition-all duration-700 ${isHovering ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
            />

            {/* Video Element */}
            <video
                ref={videoRef}
                src={item.video}
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
            />
            
            {/* Glass Overlay on Hover */}
            <div className={`absolute inset-0 bg-[#030303]/20 transition-colors duration-500 ${isHovering ? 'bg-[#030303]/40' : ''}`} />
            
            {/* Play Button Icon State */}
            {!isHovering && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                        <svg className="w-6 h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Label */}
            <div className="absolute bottom-6 left-6 right-6">
                <div className="px-4 py-2 rounded-xl bg-black/40 border border-white/10 backdrop-blur-xl inline-block transition-all duration-500 group-hover:border-[#cc00cc]/40 group-hover:bg-[#cc00cc]/5">
                    <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">{item.title}</span>
                </div>
            </div>

            {/* Corner Decorative Dot */}
            <div className={`absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-white/20 transition-all duration-500 ${isHovering ? 'bg-[#cc00cc] scale-125' : ''}`} />
        </motion.div>
    );
};

const AboutContributions = () => {
    return (
        <section className="relative w-full py-24 px-4 md:px-8 bg-[#030303] overflow-hidden hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(204,0,204,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                   

                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-white max-w-4xl mx-auto">
                       Insights to Grow Your  <br className="hidden md:block" />
                        <span 
                            className="font-playfair italic font-black text-[#cc00cc] drop-shadow-[0_0_15px_rgba(204,0,204,0.3)] pr-1" 
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Business with Technology
                        </span>
                    </h2>

                    <p className="text-gray-500 mt-8 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                      Explore expert insights on website development, app development, AI automation, and digital growth strategies to help your business scale faster.
                    </p>
                </motion.div>

             

                {/* Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
                    {highlights.map((item, index) => (
                        <ContentCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <StarBorder
                        as="button"
                        color="#cc00cc"
                        speed="4s"
                        thickness={2}
                        className="hover:scale-105 cursor-pointer active:scale-95 transition-transform bg-[#cc00cc]/20 shadow-[0_0_30px_rgba(204,0,204,0.2)]"
                    >
                        <div className="px-8 py-3.5 text-white text-sm font-black uppercase tracking-widest flex items-center gap-3">
                            Book a Call
                            <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-[#cc00cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </StarBorder>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutContributions;
