import React from 'react';
import { motion } from 'framer-motion';
import LogoLoop from '../LogoLoop';

const partnersRow1 = [
    { src: 'https://cdn.magicui.design/companies/Stripe.svg', alt: 'Stripe' },
    { src: 'https://cdn.magicui.design/companies/Netflix.svg', alt: 'Netflix' },
    { src: 'https://cdn.magicui.design/companies/Google.svg', alt: 'Google' },
    { src: 'https://cdn.magicui.design/companies/Amazon.svg', alt: 'Amazon' },
    { src: 'https://cdn.magicui.design/companies/Airbnb.svg', alt: 'Airbnb' },
    { src: 'https://cdn.magicui.design/companies/Slack.svg', alt: 'Slack' },
];

const partnersRow2 = [
    { src: 'https://cdn.magicui.design/companies/Stripe.svg', alt: 'Stripe' },
    { src: 'https://cdn.magicui.design/companies/Netflix.svg', alt: 'Netflix' },
    { src: 'https://cdn.magicui.design/companies/Google.svg', alt: 'Google' },
    { src: 'https://cdn.magicui.design/companies/Amazon.svg', alt: 'Amazon' },
    { src: 'https://cdn.magicui.design/companies/Airbnb.svg', alt: 'Airbnb' },
    { src: 'https://cdn.magicui.design/companies/Slack.svg', alt: 'Slack' },
];

const PartnerCard = ({ partner }) => (
    <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-28 w-48 mx-4 border border-white/5 hover:border-[#cc00cc]/30 transition-all duration-500 group">
        <img 
            src={partner.src} 
            alt={partner.alt} 
            className="h-10 w-auto object-contain  opacity-60  group-hover:opacity-100 transition-all duration-500 invert-[0.8]"
        />
    </div>
);

const AboutLogos = () => {
    return (
        <section className="relative w-full lg:py-24 pb-12 px-4 md:px-8 bg-[#030303] overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#cc00cc]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#cc00cc]/30 bg-[#cc00cc]/10 mb-6 font-sans"
                    >
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#cc00cc]">
                            Partners
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-white max-w-4xl mx-auto"
                    >
                        Collaborating with Ambitious <br />
                        <span 
                            className="font-playfair italic font-black text-[#cc00cc] pr-1" 
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Startups And Industry
                        </span> <br />
                        Titans Alike
                    </motion.h2>
                </div>

                {/* Logo Loops */}
                <div className="flex flex-col gap-8">
                    <LogoLoop
                        logos={partnersRow1}
                        speed={25}
                        direction="left"
                        logoHeight={112} // Height of PartnerCard
                        gap={0} // Gap is inside PartnerCard (mx-4)
                        renderItem={(partner) => <PartnerCard partner={partner} />}
                        fadeOut={true}
                        fadeOutColor="#030303"
                    />
                    
                    <LogoLoop
                        logos={partnersRow2}
                        speed={30}
                        direction="right"
                        logoHeight={112}
                        gap={0}
                        renderItem={(partner) => <PartnerCard partner={partner} />}
                        fadeOut={true}
                        fadeOutColor="#030303"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutLogos;
