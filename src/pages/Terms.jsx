import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <section className="relative w-full py-20 lg:py-28 px-4 md:px-8 bg-[#030303] overflow-hidden text-gray-300">
            {/* BG ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#cc00cc]/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-4xl mx-auto relative z-10 pt-16">
                {/* Back Link */}
                <Link to="/" className="inline-flex items-center gap-2 text-[#cc00cc] hover:text-white transition-colors duration-300 mb-8 font-sans font-bold text-sm group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight text-white mb-2 leading-none">
                    Terms & Conditions
                </h1>

                {/* Content Sections */}
                <div className="space-y-10 font-sans text-sm md:text-base leading-relaxed text-gray-400">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Introduction</h2>
                        <p>Welcome to AdRyter Advertising (“Company”, “we”, “our”, “us”). These Terms and Conditions (“Terms”, “Agreement”) govern your use of our services (“Services”). By engaging with AdRyter Advertising, you agree to comply with and be bound by these Terms. If you disagree with any part of the Terms, you must not use our Services.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Services</h2>
                        <p>AdRyter Advertising provides various advertising and marketing services, including but not limited to digital marketing, social media management, content creation, and media buying. Detailed descriptions of our Services can be found on our website and service agreements.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Client Obligations</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Accurate Information:</strong> Clients must provide accurate and complete information for the delivery of Services.</li>
                            <li><strong>Timely Cooperation:</strong> Clients are expected to cooperate promptly, including providing necessary materials and approvals to enable us to deliver Services effectively.</li>
                            <li><strong>Compliance:</strong> Clients must ensure that all content provided to us complies with applicable laws and regulations.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Payment Terms</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Fees:</strong> Service fees will be outlined in individual agreements.</li>
                            <li><strong>Payment Schedule:</strong> Payments must be made according to the agreed schedule. Late payments may incur additional charges.</li>
                            <li><strong>Refunds:</strong> Refund policies will be specified in individual service agreements.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Intellectual Property</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Client Content:</strong> Clients retain ownership of all content provided to AdRyter Advertising. However, clients grant us a non-exclusive, royalty-free license to use, reproduce, and modify the content for the purpose of delivering Services.</li>
                            <li><strong>Company Materials:</strong> We retain all rights to the materials we create unless otherwise agreed upon. Clients are granted a license to use the materials as specified in the service agreement.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Confidentiality</h2>
                        <p>Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of the relationship. This obligation will continue beyond the termination of the Agreement.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Liability</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Limitation of Liability:</strong> To the extent permitted by law, AdRyter Advertising will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our Services.</li>
                            <li><strong>Indemnification:</strong> Clients agree to indemnify and hold AdRyter Advertising harmless from any claims, damages, or expenses arising from the use of our Services.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Termination</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Termination by Client:</strong> Clients may terminate the Agreement with written notice, subject to the terms specified in the service agreement.</li>
                            <li><strong>Termination by Company:</strong> We reserve the right to terminate the Agreement at any time if the client breaches these Terms or if the provision of Services is no longer viable.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Amendments</h2>
                        <p>We may update or modify these Terms at any time. Clients will be notified of any significant changes, and continued use of our Services will constitute acceptance of the updated Terms.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Governing Law</h2>
                        <p>These Terms are governed by and construed in accordance with the laws of the jurisdiction where AdRyter Advertising is based, without regard to its conflict of law principles.</p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                        <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
                        <p className="font-bold text-white">AdRyter Advertising</p>
                        <p>Address: T-23, 3rd floor, Madhav Plaza, Jinsi Rd Number 2, Lohiya Bazaar, Gwalior, Madhya Pradesh 474001</p>
                        <p>Email: <a href="mailto:info@adryter.in" className="text-[#cc00cc] hover:underline">info@adryter.in</a></p>
                        <p>Phone No: +91-7738538548</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Terms;
