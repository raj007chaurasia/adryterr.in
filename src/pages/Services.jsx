import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import ServiceFormCard from '../components/services/ServiceFormCard';
import Footer from '../components/common/Footer';
import { Sparkles } from 'lucide-react';

import { Helmet } from 'react-helmet-async';

const servicesData = [
    {
        title: "AI AUTOMATION SOLUTIONS",
        description: "We help businesses automate their processes using AI tools like chatbots, lead automation, and workflow systems to save time and increase efficiency.",
        image: "/images/service_ai_product.png",
        items: [
            "AI Chatbots",
            "Lead Automation Systems",
            "Workflow Automation",
            "User Research for AI Solutions",
            "AI Integration (CRM, WhatsApp, APIs)",
            
        ],
        toolIcons: ["n8n", "make", "zapier", "openai", "anthropic"],
        glowColor: "rgba(6, 182, 212, 0.12)" // Cyan
    },
    {
        title: "MOBILE APP DEVELOPMENT",
        description: "We build high-performance Android & iOS apps that are fast, user-friendly, and designed to scale your business.",
        image: "/images/service_mobile_app.png",
        items: [
            " Android App Development",
            " iOS App Development",
            " Hybrid App Development",
            "App UI/UX Design",
            "App Testing & Launch",
           
        ],
        toolIcons: ["flutter", "react", "android", "apple", "firebase"],
        glowColor: "rgba(244, 63, 94, 0.12)" // Rose
    },
    {
        title: "WEBSITE DEVELOPMENT ",
        description: "We create fast, responsive, and SEO-friendly websites that help businesses generate leads and grow online.",
        image: "/images/service_web_design.png",
        items: [
            "Business Websites",
            "E-commerce Websites",
            "Landing Pages",
            "Custom Web Applications",
            "CMS Development (WordPress, etc.)",
           
        ],
        toolIcons: ["figma", "react", "nextdotjs", "webflow"],
        glowColor: "rgba(16, 185, 129, 0.12)" // Emerald
    },
    {
        title: "UI/UX Design",
        description: "We design user-friendly interfaces that improve user experience and increase conversions for your website or app.",
        image: "/images/service_ui_ux.png",
        items: [
            "UI Design",
            "UX Research",
            "Wireframing & Prototyping",
            "Usability Testing",
            "Interaction Design",
            
        ],
        toolIcons: ["figma", "adobeaftereffects", "adobephotoshop"],
        glowColor: "rgba(168, 85, 247, 0.12)" // Purple
    }
];

const Services = () => {
    return (
        <div className="bg-[#030303] text-white selection:bg-[#cc00cc]/30 pt-28 w-full">
            <Helmet>
                <title>Digital Services - AdRyter | Software Development in Gwalior</title>
                <meta name="description" content="Explore AdRyter's digital solutions: AI Automation, High-Performance Mobile App Development, and SEO-friendly Web Design in Gwalior." />
                <meta name="keywords" content="Best Software Development Company in Gwalior, IT Company Gwalior, Web Development Services Gwalior, App Developers Gwalior, AI Automation setups" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Digital Services - AdRyter | Software Development in Gwalior" />
                <meta property="og:description" content="Explore AdRyter's digital solutions: AI Automation, High-Performance Mobile App Development, and SEO-friendly Web Design in Gwalior." />
                <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://adryter.in/services'} />
            </Helmet>
            {/* Background ambient glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(204,0,204,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Page Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#cc00cc]/30 bg-[#cc00cc]/5 backdrop-blur-sm mb-6">
                        
                        <span className="text-[#cc00cc] text-md font-semibold uppercase tracking-wider">Our Services</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white mb-6">
                        Digital Solutions That Grow Your Business <br />
                        <span
                            className="font-playfair italic font-medium text-[#cc00cc] drop-shadow-[0_0_20px_rgba(204,0,204,0.2)]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Websites. Apps. AI Automation.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
We help businesses with website development, app development, custom software, and AI automation in Gwalior, building fast, scalable, and result-driven digital products.                    </p>
                </motion.div>

                {/* Services Section Grid Layout */}
                <div className="grid grid-cols-1 gap-8 lg:gap-12">
                    {servicesData.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            items={service.items}
                            toolIcons={service.toolIcons}
                            glowColor={service.glowColor}
                        />
                    ))}
                </div>

                {/* Bottom Contact Form Card */}
                <ServiceFormCard />
            </div>

            {/* Footer added to bottom */}
            <Footer />
        </div>
    );
};

export default Services;
