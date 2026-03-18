import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const stats = [
    {
        title: 'Clients',
        value: '150+',
        description: 'Collaborating with ambitious brands to create meaningful experiences.',
        glowColor: 'rgba(16, 185, 129, 0.15)' // Emerald
    },
    {
        title: 'Countries Served',
        value: '7',
        description: 'Bringing creativity and strategy together for brand success worldwide.',
        glowColor: 'rgba(59, 130, 246, 0.15)' // Blue
    },
    {
        title: 'Experience',
        value: '4',
        description: 'Designing with passion, precision, and expertise over the years.',
        glowColor: 'rgba(168, 85, 247, 0.15)' // Purple
    },
    {
        title: 'Biriyani Plates',
        value: '999',
        description: "We're serious about our Biriyani! It's our top spot fuel (not sponsored, but we wouldn't mind).",
        glowColor: 'rgba(244, 63, 94, 0.15)' // Rose
    }
];

const SpotlightCard = ({ stat, variants }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            variants={variants}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-3xl bg-[#7d0a8d]/20 border border-white/5 hover:border-white/20 transition-colors duration-300 overflow-hidden"
        >
            {/* Dynamic Spotlight Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${stat.glowColor}, transparent 40%)`
                    ),
                }}
            />

            {/* Subtle Border Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(300px circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 80%)`
                    ),
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest mb-8 transition-colors group-hover:text-white/60">
                    {stat.title}
                </h3>

                <span className="text-5xl md:text-6xl font-sans font-black text-white mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {stat.value}
                </span>

                <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed mt-auto transition-colors group-hover:text-gray-400">
                    {stat.description}
                </p>
            </div>
        </motion.div>
    );
};

const AboutStats = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="relative w-full py-20 px-4 md:px-8 bg-[#030303] overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(102,0,102,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 px-4">
                  

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter leading-[1.1] text-white max-w-5xl mx-auto"
                    >
                        Pioneering Impactful Change With Forward-Thinking <br className="hidden md:block" />
                        <span
                            className="font-playfair italic font-black text-[#cc00cc] drop-shadow-[0_0_15px_rgba(204,0,204,0.3)] pr-1"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Partners
                        </span>
                        Since 2025.
                    </motion.h2>
                </div>

                {/* Stats Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {stats.map((stat, index) => (
                        <SpotlightCard key={index} stat={stat} variants={cardVariants} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutStats;
