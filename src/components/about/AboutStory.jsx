import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import StarBorder from '../StarBorder';

const AboutStory = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Image 1 (Left): Starts lower, moves up to center
    const yTransform1 = useTransform(smoothProgress, [0, 0.5], ['20%', '0%']);
    // Image 2 (Right): Starts higher, moves down to center
    const yTransform2 = useTransform(smoothProgress, [0, 0.5], ['-20%', '0%']);

    const y1 = isMobile ? 0 : yTransform1;
    const y2 = isMobile ? 0 : yTransform2;

    return (
        <section
            ref={containerRef}
            className="relative w-full lg:py-24 px-4 md:px-8 bg-[#030303] overflow-hidden"
        >
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#cc00cc]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#cc00cc]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                {/* Left Side: Content */}
                <div className="flex-1 text-left">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter leading-[1.1] text-white mb-8"
                    >
                        From Vision to Reality  <span className="font-playfair italic font-black text-[#cc00cc]" style={{ fontFamily: "'Playfair Display', serif" }}>The Story Behind </span> AdRyter <br />
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-2 max-w-xl"
                    >
                        AdRyter was founded by Rajveer Singh with a simple goal to help businesses grow using powerful digital solutions.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-2 max-w-xl"
                    >
                        Starting from small projects to building complete websites, apps, and automation systems, Rajveer focused on one thing:
                        delivering real results, not just designs.

                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl"
                    >

                        Today, AdRyter helps startups and businesses with website development, app development, custom software, and AI automation in Gwalior & across India.

                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <StarBorder
                            as="button"
                            color="#cc00cc"
                            speed="4s"
                            thickness={2}
                            className="hover:scale-105 cursor-pointer active:scale-95 transition-transform bg-[#cc00cc]/20 shadow-[0_0_30px_rgba(204,0,204,0.2)]"
                        >
                            <div className="px-8 py-3.5 text-white text-sm font-black uppercase tracking-widest flex items-center gap-3">
                                Meet the Founder
                                <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-[#cc00cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </StarBorder>
                    </motion.div>
                </div>

                {/* Right Side: Animated Images */}
                <div className="flex-1 w-full relative h-[500px] md:h-[600px] flex items-center justify-center gap-4">
                    {/* Image 1 (Left/Top) */}
                    <motion.div
                        style={{ y: y1 }}
                        className="w-1/2 aspect-4/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-20 hover:border-[#cc00cc]/50 transition-colors duration-500"
                    >
                        <img
                            src=""
                            alt="Founder Working"
                            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#030303]/60 via-transparent to-transparent opacity-60" />
                    </motion.div>

                    {/* Image 2 (Right/Bottom) */}
                    <motion.div
                        style={{ y: y2 }}
                        className="w-1/2 aspect-4/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10 hover:border-[#cc00cc]/50 transition-colors duration-500"
                    >
                        <img
                            src=""
                            alt="Meeting"
                            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#030303]/60 via-transparent to-transparent opacity-60" />
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-[#cc00cc]/20 rounded-tr-3xl pointer-events-none" />
                    <div className="absolute bottom-15 -left-10 w-32 h-32 border-b-2 border-l-2 border-[#cc00cc]/20 rounded-bl-3xl pointer-events-none" />
                </div>

            </div>
        </section>
    );
};

export default AboutStory;
