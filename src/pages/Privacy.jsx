import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
                    Privacy Policy
                </h1>

                {/* Content Sections */}
                <div className="space-y-10 font-sans text-sm md:text-base leading-relaxed text-gray-400">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Introduction</h2>
                        <p>AdRyter Advertising (“Company”, “we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy (“Policy”) explains how we collect, use, disclose, and safeguard your information when you visit our website and engage with our services. By using our services, you agree to the terms of this Policy.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and business details when you voluntarily provide it to us.</li>
                            <li><strong>Usage Data:</strong> We automatically collect information about your interaction with our website, including IP address, browser type, pages visited, and the time and date of your visit.</li>
                            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Providing and managing our services.</li>
                            <li>Communicating with you about our services, promotions, and updates.</li>
                            <li>Improving our website and services.</li>
                            <li>Analyzing usage patterns to enhance user experience.</li>
                            <li>Complying with legal obligations.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Sharing Your Information</h2>
                        <ul className="list-disc pl-5 space-y-2">
                             <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and marketing assistance.</li>
                             <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                             <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the new owner.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Data Security</h2>
                        <p>We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Your Choices</h2>
                        <ul className="list-disc pl-5 space-y-2">
                             <li><strong>Access and Correction:</strong> You have the right to access and update your personal information. If you need to make changes, please contact us using the information provided below.</li>
                             <li><strong>Opt-Out:</strong> You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in the emails or by contacting us directly.</li>
                             <li><strong>Cookies:</strong> You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your experience on our website.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Third-Party Links</h2>
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Children's Privacy</h2>
                        <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">Changes to This Privacy Policy</h2>
                        <p>We may update this Policy from time to time. We will notify you of any significant changes by posting the new Policy on our website and updating the effective date. Your continued use of our services after any changes indicates your acceptance of the updated Policy.</p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                        <h2 className="text-xl font-bold text-white mb-3">Refund Policy</h2>
                        <p className="font-bold text-white mb-2">We are not offering any kind of refund.</p>
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

export default Privacy;
