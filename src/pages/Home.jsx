import React from 'react';
import Hero from '../components/common/Hero';
import Projects from '../components/common/Projects';
import Vision from '../components/common/Vision';
import Workflow from '../components/common/Workflow';
import Services from '../components/common/Services';
import Comparison from '../components/common/Comparison';
import Testimonials from '../components/common/Testimonials';
import FAQ from '../components/common/FAQ';
import Locations from '../components/common/Locations';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <div className="bg-[#030303] text-white selection:bg-[#cc00cc]/30">
            <Hero />
            <Projects />
            <Vision />
            <Workflow />
            <Services />
            <Comparison />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
