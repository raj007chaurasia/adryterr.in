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
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="bg-[#030303] text-white selection:bg-[#cc00cc]/30">
            <Helmet>
                <title>AdRyter | Best Software Development Company in Gwalior</title>
                <meta name="description" content="AdRyter is the best software development company in Gwalior, specializing in High-Performance Mobile Apps, AI Automation, and Custom Web Development." />
                <meta name="keywords" content="Software Development Company in Gwalior, Best IT Company Gwalior, Web Development Gwalior, App Development Gwalior, AI Automation Gwalior, CRM Software, ERP System" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="AdRyter | Best Software Development Company in Gwalior" />
                <meta property="og:description" content="AdRyter is the best software development company in Gwalior, specializing in High-Performance Mobile Apps, AI Automation, and Custom Web Development." />
                <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://adryter.in'} />
                <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "AdRyter",
                    "url": "https://adryter.in",
                    "telephone": "+917738538548",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "T-23, 3rd floor, Madhav Plaza, Jinsi Rd Number 2, Lohiya Bazaar",
                      "addressLocality": "Gwalior",
                      "addressRegion": "Madhya Pradesh",
                      "postalCode": "474001",
                      "addressCountry": "IN"
                    },
                    "sameAs": [
                      "https://www.linkedin.com/in/rajveerr-siingh-797475280/"
                    ]
                  }
                `}
                </script>
            </Helmet>
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
