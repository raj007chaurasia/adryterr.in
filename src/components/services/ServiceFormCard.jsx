import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, Check } from 'lucide-react';
import axios from 'axios';

const ServiceFormCard = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        subject: '',
        details: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.details.trim()) newErrors.details = 'Project details are required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        setErrors({});

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.whatsapp,
                subject: formData.subject,
                message: formData.details
            };
            const response = await axios.post('/api/contact', payload);

            if (response.data.success) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', whatsapp: '', subject: '', details: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                setErrors({ submit: response.data.message || 'Failed to send message' });
            }
        } catch (err) {
            setErrors({ submit: err.response?.data?.message || 'Network error or server unavailable' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-3xl bg-linear-to-br from-[#0a0a0a] to-[#050505] border border-white/5 overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:border-[#cc00cc]/20 transition-all duration-500 flex flex-col lg:flex-row items-stretch mt-12 mb-20"
        >
            {/* Dynamic Spotlight Glow (Magenta) */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(204, 0, 204, 0.08), transparent 40%)`
                    ),
                }}
            />

            {/* Subtle Border Glow (White) */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(300px circle at ${x}px ${y}px, rgba(255,255,255,0.04), transparent 80%)`
                    ),
                }}
            />

            {/* Left Column: CTA Headers */}
            <div className="relative p-8 md:p-12 lg:p-14 lg:w-[40%] bg-linear-to-r from-[#cc00cc]/5 to-[#6035d8]/5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,204,0.1)_0%,transparent_70%)] pointer-events-none" />
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black text-white leading-tight mb-4 tracking-tight relative z-10">
                    Ready to build something <br />
                    <span 
                        className="font-playfair italic font-medium text-[#cc00cc] drop-shadow-[0_0_20px_rgba(204,0,204,0.2)]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Amazing?
                    </span>
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm relative z-10 mb-8">
                    Fill out the form with your project details and we will reach back to you as soon as possible. No spam, just real products.
                </p>

                {/* Direct Contact Details */}
                <div className="flex flex-col gap-5 relative z-10 mt-4 lg:mt-6">
                    <div className="flex items-center gap-4 group/contact">
                        <div className="w-11 h-11 rounded-2xl bg-[#cc00cc]/5 border border-[#cc00cc]/20 flex items-center justify-center text-[#cc00cc] group-hover/contact:bg-[#cc00cc] group-hover/contact:text-white transition-all duration-300">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Email Us</p>
                            <a href="mailto:contact@adryter.in" className="text-white text-base font-bold hover:text-[#cc00cc] transition-colors">contact@adryter.in</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group/contact">
                        <div className="w-11 h-11 rounded-2xl bg-[#cc00cc]/5 border border-[#cc00cc]/20 flex items-center justify-center text-[#cc00cc] group-hover/contact:bg-[#cc00cc] group-hover/contact:text-white transition-all duration-300">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Call / WhatsApp</p>
                            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-white text-base font-bold hover:text-[#cc00cc] transition-colors">+91 12345 67890</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: The form inputs structure */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col flex-1 z-20 justify-center">
                <AnimatePresence mode="wait">
                    {isSuccess ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="flex flex-col items-center justify-center py-16 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#660066]/20 flex items-center justify-center mb-6 border border-[#cc00cc]/30">
                                <Check className="w-8 h-8 text-[#cc00cc]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                <span className="italic">Proposal Sent!</span>
                            </h3>
                            <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 w-full max-w-xl"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-gray-300 text-xs font-semibold tracking-wider uppercase">Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        placeholder="Your Name" 
                                        className={`px-4 py-3 rounded-xl bg-white/3 border ${errors.name ? 'border-rose-500/50' : 'border-white/10'} text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#cc00cc]/50 focus:bg-white/5 transition-all duration-300`}
                                    />
                                    {errors.name && <p className="text-[10px] text-rose-500 font-medium">{errors.name}</p>}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-gray-300 text-xs font-semibold tracking-wider uppercase">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        placeholder="name@example.com" 
                                        className={`px-4 py-3 rounded-xl bg-white/3 border ${errors.email ? 'border-rose-500/50' : 'border-white/10'} text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#cc00cc]/50 focus:bg-white/5 transition-all duration-300`}
                                    />
                                    {errors.email && <p className="text-[10px] text-rose-500 font-medium">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-gray-300 text-xs font-semibold tracking-wider uppercase">WhatsApp No.</label>
                                    <input 
                                        type="text" 
                                        name="whatsapp" 
                                        value={formData.whatsapp} 
                                        onChange={handleChange} 
                                        placeholder="Enter your number" 
                                        className="px-4 py-3 rounded-xl bg-white/3 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#cc00cc]/50 focus:bg-white/5 transition-all duration-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-gray-300 text-xs font-semibold tracking-wider uppercase">Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        value={formData.subject} 
                                        onChange={handleChange} 
                                        placeholder="e.g. New Website" 
                                        className="px-4 py-3 rounded-xl bg-white/3 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#cc00cc]/50 focus:bg-white/5 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-gray-300 text-xs font-semibold tracking-wider uppercase">Project Details</label>
                                <textarea 
                                    name="details" 
                                    value={formData.details} 
                                    onChange={handleChange} 
                                    placeholder="Tell us about your project..." 
                                    rows={4}
                                    className={`px-4 py-3 rounded-xl bg-white/3 border ${errors.details ? 'border-rose-500/50' : 'border-white/10'} text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#cc00cc]/50 focus:bg-white/5 transition-all duration-300 resize-none`}
                                />
                                {errors.details && <p className="text-[10px] text-rose-500 font-medium">{errors.details}</p>}
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-linear-to-r from-[#cc00cc] to-[#6035d8] hover:from-[#d11ad1] hover:to-[#6d3ae1] text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(204,0,204,0.4)] hover:shadow-[0_15px_40px_-5px_rgba(204,0,204,0.5)] hover:scale-[1.01] active:scale-[0.98] cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Send Proposal
                                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                                    </>
                                )}
                            </button>
                            {errors.submit && <p className="text-[12px] text-rose-500 font-medium text-center">{errors.submit}</p>}
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ServiceFormCard;

