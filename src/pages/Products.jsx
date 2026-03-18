import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import ServiceFormCard from '../components/services/ServiceFormCard';
import Footer from '../components/common/Footer';

const productsData = [
    {
        title: "Enterprise CRM",
        description: "Streamline your sales pipelines, manage client relationships effortlessly, and drive revenue growth with our modular and robust CRM ecosystem dashboards.",
        image: "/images/service_ai_product.png", // placeholder or using existing
        items: [
            "Sales Pipeline Tracking",
            "Contact Management & Log",
            "Lead Scoring & Automation",
            "Performance Reporting Analytics",
            "Third-Party App Integrations",
            "User Roles & Permissions"
        ],
        toolIcons: ["react", "nextdotjs", "firebase", "tailwindcss", "docker"],
        glowColor: "rgba(6, 182, 212, 0.12)", // Cyan
        visitLink: "#"
    },
    {
        title: "School Management Suite",
        description: "A complete educational platform designed to simplify academic administration, connect parents with teachers, and streamline student lifecycle management safely.",
        image: "/images/service_mobile_app.png",
        items: [
            "Student Attendance & Grading",
            "Timetable & Exam Scheduler",
            "Parent-Teacher Portal",
            "Fee Collection & Billing",
            "Library & Asset Management",
            "Noticeboard Announcements"
        ],
        toolIcons: ["react", "nextdotjs", "firebase", "tailwindcss", "android"],
        glowColor: "rgba(244, 63, 94, 0.12)", // Rose
        visitLink: "#"
    },
    {
        title: "Hospital ERP Systems",
        description: "Highly secure healthcare solutions to manage patient records, simplify OPD/IPD workflows, and optimize billing with zero friction operations frameworks.",
        image: "/images/service_web_design.png",
        items: [
            "Electronic Health Records (EHR)",
            "OPD/IPD Admissions Manager",
            "Doctor Scheduling & Appointments",
            "Billing & Claims Management",
            "Pharmacy & Inventory Control",
            "Lab Test Report Integration"
        ],
        toolIcons: ["react", "nextdotjs", "postgresql", "docker", "aws"],
        glowColor: "rgba(16, 185, 129, 0.12)", // Emerald
        visitLink: "#"
    }
];

const Products = () => {
    return (
        <div className="bg-[#030303] text-white selection:bg-[#cc00cc]/30 pt-28 lg:pt-18  w-full min-h-screen">
            {/* Background ambient glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(102,0,102,0.1)_0%,transparent:70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative  z-10">
                {/* Page Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex  items-center gap-2 px-4 py-1.5 rounded-full border border-[#cc00cc]/30 bg-[#cc00cc]/5 backdrop-blur-sm mb-6">
                        <span className="text-[#cc00cc] text-md font-semibold uppercase tracking-wider">Our Solutions</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white mb-6">
                        Ready-To-Use <br />
                        <span 
                            className="font-playfair italic font-medium text-[#cc00cc] drop-shadow-[0_0_20px_rgba(204,0,204,0.2)]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Products
                        </span>
                    </h1>

                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        Scale your operations with automated enterprise ecosystems and high performance dashboards layouts.
                    </p>
                </motion.div>

                {/* Products Section Grid Layout */}
                <div className="grid grid-cols-1 gap-8 pb-28 lg:gap-12">
                    {productsData.map((product, index) => (
                        <ServiceCard 
                            key={index}
                            title={product.title}
                            description={product.description}
                            image={product.image}
                            items={product.items}
                            toolIcons={product.toolIcons}
                            glowColor={product.glowColor}
                            visitLink={product.visitLink}
                        />
                    ))}
                </div>

               
            </div>

            {/* Footer added to bottom */}
            <Footer />
        </div>
    );
};

export default Products;
