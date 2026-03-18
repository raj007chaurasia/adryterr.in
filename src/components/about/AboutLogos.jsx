import React from 'react';
import { motion } from 'framer-motion';
import LogoLoop from '../LogoLoop';

const partnersRow1 = [

{
      image: '/images/patner1.png',
      link: 'https://www.itmuniversity.ac.in/',
      alt:'itmuniversity'
    },
    {
        image: '/images/patner2.png',
        link: 'http://www.venuspublicschool.org/',
        alt:'venuspublicschool'
       
    },
    {
        image: '/images/patner8.png',
        link: 'https://forgewellmetal.com/',
        alt:'forgewellmetal'
    },
    {
        image: '/images/patner9.png',
        link: 'https://lipibanerjee.com/',
        alt:'lipibanerjee'
    },
    {
        image: '/images/patner10.png',
        link: 'https://draashiketsable.com/',
        alt:'draashiketsable'
    },

    {
          image: '/images/patner6.webp',
          link: 'https://pedneuro.in/',
          alt:' pedneuro'
        
    },
    { image: '/images/patner7.jpeg',
        link: 'https://celagenex.com/',
        alt:'celagenex'
    },
    {
        image: '/images/patner3.png',
        link: 'https://www.edukulclasses.com/',
        alt:'edukulclasses'
    },
    {
        image: '/images/patner4.png',
        link:"https://oxfordpublicschool.net/",
        alt:'oxfordpublicschool'
    },
    {
        image: '/images/patner5.png',
        link:"https://royalmilestoneresorts.com/",
        alt:'royalmilestoneresorts'
        
    },
    
];

const partnersRow2 = [
  {
          image: '/images/patner6.webp',
          link: 'https://pedneuro.in/',
          alt:' pedneuro'
        
    },
    { image: '/images/patner7.jpeg',
        link: 'https://celagenex.com/',
        alt:'celagenex'
    },
    {
        image: '/images/patner3.png',
        link: 'https://www.edukulclasses.com/',
        alt:'edukulclasses'
    },
    {
        image: '/images/patner4.png',
        link:"https://oxfordpublicschool.net/",
        alt:'oxfordpublicschool'
    },
    {
        image: '/images/patner5.png',
        link:"https://royalmilestoneresorts.com/",
        alt:'royalmilestoneresorts'
        
    },
    {
      image: '/images/patner1.png',
      link: 'https://www.itmuniversity.ac.in/',
      alt:'itmuniversity'
    },
    {
        image: '/images/patner2.png',
        link: 'http://www.venuspublicschool.org/',
        alt:'venuspublicschool'
       
    },
    {
        image: '/images/patner8.png',
        link: 'https://forgewellmetal.com/',
        alt:'forgewellmetal'
    },
    {
        image: '/images/patner9.png',
        link: 'https://lipibanerjee.com/',
        alt:'lipibanerjee'
    },
    {
        image: '/images/patner10.png',
        link: 'https://draashiketsable.com/',
        alt:'draashiketsable'
    },
];

const PartnerCard = ({ partner }) => (
    <a 
        href={partner.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 h-28 w-48 mx-4 border border-white/5 hover:border-[#cc00cc]/30 transition-all duration-500 group cursor-pointer"
    >
        <img 
            src={partner.image} 
            alt={partner.alt} 
            className="h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
        />
    </a>
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
                       Trusted by Startups & Businesses 
                        <span 
                            className="font-playfair italic font-black text-[#cc00cc] pl-4 " 
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                           in Gwalior
                        </span> <br />
                       
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
