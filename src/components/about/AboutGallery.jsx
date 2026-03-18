import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const imagesTop = [
    '/images/office1.webp',
    '/images/office2.webp',
    '/images/office3.webp',
    '/images/office4.webp',
    '/images/office1.webp', 
    '/images/office8.webp',
];

const imagesBottom = [
    '/images/office2.webp',
    '/images/office1.webp', 
    '/images/office8.webp',
    '/images/office5.webp',
    '/images/office6.webp',
    
];

const AboutGallery = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Top row slides left
    const xTop = useTransform(smoothProgress, [0, 1], ['0%', '-30%']);
    
    // Bottom row slides right
    const xBottom = useTransform(smoothProgress, [0, 1], ['-30%', '0%']);

    return (
        <section ref={containerRef} className="py-5 lg:py-20 bg-[#030303] flex flex-col gap-6 overflow-hidden">
            
            {/* Top Row - Slides Left */}
            <motion.div 
                style={{ x: xTop }}
                className="flex gap-4 md:gap-6 whitespace-nowrap pl-4 w-[200vw] md:w-[150vw] will-change-transform"
            >
                {imagesTop.map((src, index) => (
                    <div 
                        key={index} 
                        className="relative w-[60vw] md:w-[35vw] lg:w-[25vw] aspect-4/3 shrink-0 rounded-2xl overflow-hidden group"
                    >
                        <img 
                            src={src} 
                            alt={`Gallery image ${index + 1}`} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                    </div>
                ))}
            </motion.div>

            {/* Bottom Row - Slides Right */}
            <motion.div 
                style={{ x: xBottom }}
                className="flex gap-4 md:gap-6 whitespace-nowrap pl-4 w-[200vw] md:w-[150vw] will-change-transform"
            >
                {imagesBottom.map((src, index) => (
                    <div 
                        key={index} 
                        className="relative w-[60vw] md:w-[35vw] lg:w-[25vw] aspect-4/3 shrink-0 rounded-2xl overflow-hidden group"
                    >
                        <img 
                            src={src} 
                            alt={`Gallery image ${index + 1}`} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                    </div>
                ))}
            </motion.div>

        </section>
    );
};

export default AboutGallery;
