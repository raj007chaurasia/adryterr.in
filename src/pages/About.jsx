import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutGallery from '../components/about/AboutGallery';
import AboutPartner from '../components/about/AboutPartner';
import AboutStory from '../components/about/AboutStory';
import AboutStats from '../components/about/AboutStats';
import AboutContributions from '../components/about/AboutContributions';
import AboutLogos from '../components/about/AboutLogos';
import FAQ from '@/components/common/FAQ';
import AboutCareer from '../components/about/AboutCareer';

const About = () => {
    return (
        <div className="bg-[#030303] text-white selection:bg-[#cc00cc]/30">
            <AboutHero />
            <AboutGallery />
            <AboutPartner />
            <AboutStats />
            <AboutStory />
            <AboutContributions />
            <AboutLogos />
            <AboutCareer />
            <FAQ />
            <Footer />
        </div>
    );
};

export default About;
