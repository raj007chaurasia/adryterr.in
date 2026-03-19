import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import CircularGallery from '../CircularGallery';
import MobileProjectSlider from './MobileProjectSlider';

const Projects = () => {
    const sectionRef = useRef(null);

    // We want the section to be tall enough to provide scroll travel
    // 400vh gives enough room for the horizontal transition
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const projectItems = useMemo(() => {
        const base = [
            { image: '/images/image.png', text: 'adryter' ,link:'https://adryter.com/'},
            { image: '/images/image2.png', text: 'shriradhecollection' ,link:'https://shriradhecollection.com/'},
            { image: '/images/image3.png', text: 'glory' ,link:'https://glory.shriradhecollection.com/'},
            { image: '/images/image4.png', text: 'edukul classes' ,link:'https://www.edukulclasses.com/'},
            { image: '/images/image5.png', text: 'royal milestone resorts' ,link:'https://royalmilestoneresorts.com/'},
            { image: '/images/image6.png', text: 'pedneuro' ,link:'https://pedneuro.in/'},
            { image: '/images/image7.png', text: 'itmuniversity' ,link:'https://www.itmuniversity.ac.in/'},
            { image: '/images/image8.png', text: 'oxfordpublicschool' ,link:'https://oxfordpublicschool.net/'},
            { image: '/images/image9.png', text: 'ashiketsable' ,link:'https://draashiketsable.com/'},
            { image: '/images/image10.png', text: 'alljewelz' ,link:'https://alljewelz.vercel.app/admin'},
            { image: '/images/image11.png', text: 'bibifatima' ,link:'https://bibifatima.vercel.app/'},
            { image: '/images/image12.png', text: 'earthsbeauty' ,link:'https://earthsbeauty.in/'},
            { image: '/images/image13.png', text: 'yogatravels' ,link:'https://yoga-tours-travels.vercel.app/'},
        ];
        return base;
    }, []);

    const deskProjectItems = useMemo(() => {
        // Desktop uses the tripled loop for the circular gallery
        return [...projectItems, ...projectItems, ...projectItems];
    }, [projectItems]);

    // Map the vertical scroll (0 to 1) to a horizontal movement.
    // 0 - (-100) = 200 units (Covers items with buffer)
    const [extScroll, setExtScroll] = useState(-70);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map [0, 1] scroll to [-100, 100] rotation
        const rotationValue = -100 + latest * 80;
        setExtScroll(rotationValue);
    });

    return (
        <section
            ref={sectionRef}
            id="projects"
            className={`relative ${isMobile ? 'py-2 ' : 'h-[400vh]'} bg-[#030303]`}
        >
            <div className={`${isMobile ? 'relative' : 'sticky top-0 h-screen'} w-full flex flex-col justify-center items-center overflow-hidden`}>
                {/* Header Content */}
                <div className="absolute -top-12 md:top-12 hidden lg:block left-0 w-full z-30 pointer-events-none">
                    <div className="container mx-auto px-4 text-center">
                        <div className="mb-3  md:mb-4 flex items-center justify-center gap-4">
                            <div className="h-px w-6 md:w-8 bg-[#660066]/60"></div>
                            <span className="text-[#cc00cc] font-black tracking-[0.4em] text-[9px] md:text-[10px] uppercase drop-shadow-[0_0_8px_rgba(204,0,204,0.4)]">
                                Selected Work
                            </span>
                            <div className="h-px w-6 md:w-8 bg-[#660066]/60"></div>
                        </div>
                        <h2 className="text-2xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                            Featured <span className="italic font-serif font-light text-gray-400">Projects</span>
                        </h2>
                        
                    </div>
                </div>

                {/* The Gallery / Slider container */}
                <div className={`w-full h-full relative z-10 ${isMobile ? 'pt-1 pb-2' : 'md:translate-y-12'}`}>
                    {isMobile ? (
                        <MobileProjectSlider items={projectItems} />
                    ) : (
                        <CircularGallery
                            items={deskProjectItems}
                            bend={0.2}
                            textColor="#ffffff"
                            borderRadius={0.03}
                            font="bold 20px Inter"
                            scrollSpeed={0}
                            disableInternalEvents={true}
                            externalScroll={extScroll}
                        />
                    )}
                </div>

            </div>
        </section>
    );
};

export default Projects;
