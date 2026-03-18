import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import ServiceFormCard from '../components/services/ServiceFormCard';
import Footer from '../components/common/Footer';
import { Sparkles } from 'lucide-react';

const servicesData = [
    {
        title: "AI Product Design",
        description: "Designing intuitive AI-driven products is one of our sweet spots. Our AI product designs integrate with user needs to enhance decision-making and provide valuable insights for a smarter experience.",
        image: "/images/service_ai_product.png",
        items: [
            "AI Product Design",
            "AI Product Strategy",
            "Machine Learning Integration",
            "User Research for AI Solutions",
            "AI Interface Design",
            "Data Visualization & Dashboards"
        ],
        toolIcons: ["framer", "figma", "adobephotoshop", "adobeillustrator", "adobeaftereffects"],
        glowColor: "rgba(6, 182, 212, 0.12)" // Cyan
    },
    {
        title: "Mobile App Design",
        description: "We design mobile experiences that are simple to use and visually appealing. Our design ensures smoother performance and maximum value for users on every device.",
        image: "/images/service_mobile_app.png",
        items: [
            "Mobile App Design",
            "App Concept & Strategy",
            "UI/UX Design for Mobile",
            "Interaction Design for Mobile",
            "Mobile Prototyping & Testing",
            "App Screenshot Service"
        ],
        toolIcons: ["figma", "sketch", "adobexd", "adobeaftereffects"],
        glowColor: "rgba(244, 63, 94, 0.12)" // Rose
    },
    {
        title: "Web Design",
        description: "We create visually appealing and user-friendly websites that offer flawless navigation, optimized performance, and a strong connection to your brand's identity.",
        image: "/images/service_web_design.png",
        items: [
            "Web Design",
            "Responsive web design",
            "UI/UX Design",
            "E-commerce Website Design",
            "Figma Sites Development",
            "CMS Integration"
        ],
        toolIcons: ["figma", "react", "nextdotjs", "webflow"],
        glowColor: "rgba(16, 185, 129, 0.12)" // Emerald
    },
    {
        title: "UI UX Design",
        description: "When it comes to UI/UX design, we create experiences that are simple to navigate. Our goal is to deliver user-friendly interactions that align with your brand and fulfill user needs.",
        image: "/images/service_ui_ux.png",
        items: [
            "UI/UX Design",
            "Visual UI Design",
            "User Research",
            "Usability Testing",
            "Wireframe & Prototyping",
            "Interaction Design"
        ],
        toolIcons: ["figma", "adobeaftereffects", "adobephotoshop", "react"],
        glowColor: "rgba(168, 85, 247, 0.12)" // Purple
    }
];

const Services = () => {
    return (
        <div className="bg-[#030303] text-white selection:bg-[#cc00cc]/30 pt-28 w-full">
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
                        What We Can <br />
                        <span 
                            className="font-playfair italic font-medium text-[#cc00cc] drop-shadow-[0_0_20px_rgba(204,0,204,0.2)]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Do For You
                        </span>
                    </h1>

                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        We balance aesthetics with functionality to deliver premium digital products that scale easily.
                    </p>
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
