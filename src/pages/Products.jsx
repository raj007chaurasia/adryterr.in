import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import ServiceFormCard from '../components/services/ServiceFormCard';
import Footer from '../components/common/Footer';

const productsData = [
    {
        title: "Smart CRM Software",
        description: "Manage your leads, track sales, and automate your workflow with our powerful CRM software designed for growing businesses.",
        image: "/images/p1.png", // placeholder or using existing
        items: [
            "Lead Management",
            "Sales Pipeline Tracking",
            "Automated Follow-ups",
            "Reports & Analytics",
            "User Roles & Permissions",
            "WhatsApp & API Integration"
        ],
        toolIcons: ["react", "nextdotjs", "firebase", "tailwindcss", "docker"],
        glowColor: "rgba(6, 182, 212, 0.12)", // Cyan
        visitLink: "#"
    },
    {
        title: "Smart School Management System for Schools",
        description: "Our School Management Software in Gwalior helps schools manage attendance, fees, exams, and communication in one platform. It simplifies daily operations, saves time, and improves overall efficiency.",
        image: "/images/p2.png",
        items: [
            "Student Attendance & Grading System",
            "Timetable & Exam Management",
            "Parent-Teacher Communication Portal",
            "Fee Management & Billing Software",
            "Library & Asset Management System",
            "Noticeboard & Announcement System"
        ],
        toolIcons: ["react", "nextdotjs", "firebase", "tailwindcss", "android"],
        glowColor: "rgba(244, 63, 94, 0.12)", // Rose
        visitLink: "#"
    },
    {
        title: "Smart Hospital ERP System for Clinics & Hospitals",
        description: "Our Hospital Management Software in Gwalior helps hospitals and clinics manage patient records, appointments, billing, and operations efficiently. It reduces manual work, improves accuracy, and streamlines healthcare processes.",
        image: "/images/p3.png",
        items: [
            "OPD/IPD Patient Management",
            "Doctor Appointment Scheduling",
            "Billing & Claims Management",
            "Pharmacy & Inventory Management",
            "Lab Test & Report Management"
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
                        Explore our ready-to-use software solutions designed to automate your business, improve efficiency, and drive growth.                    </p>
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
