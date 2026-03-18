"use client";
import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import { Send, Check } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
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
    setErrors({}); // Clear previous error

    try {
      const response = await axios.post('/api/contact', formData);

      if (response.data.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
    <div className="w-full">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-20 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#660066]/20 flex items-center justify-center mb-6 border border-[#cc00cc]/30">
              <Check className="w-8 h-8 text-[#cc00cc]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-serif italic">Message Received</h3>
            <p className="text-gray-500 text-sm">We'll be in touch shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <InputField 
                label="Your Name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                error={errors.name} 
                placeholder="Name"
              />
              <InputField 
                label="Email Address" 
                name="email" 
                type="email"
                value={formData.email} 
                onChange={handleChange} 
                error={errors.email} 
                placeholder="Email Address"
              />
              <InputField 
                label="Phone Number" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+91 00000 00000"
              />
              <InputField 
                label="Subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="New Project"
              />

            </div>

            <div className="space-y-2 relative">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-4 block">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your brand vision..."
                className={`w-full bg-transparent border-b ${errors.message ? "border-rose-500/50" : "border-white/10"} py-4 focus:outline-none focus:border-[#cc00cc] transition-all duration-500 text-white placeholder:text-gray-700 resize-none`}
              />
              {errors.message && <p className="absolute bottom-0 left-0 text-[10px] text-rose-500 font-medium translate-y-full pt-1">{errors.message}</p>}
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative cursor-pointer inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#570457] hover:text-white transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              {errors.submit && <p className="text-[12px] text-rose-500 font-medium mt-2">{errors.submit}</p>}
            </div>

          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

const InputField = ({ label, name, type = "text", value, onChange, error, placeholder }) => (
  <div className="space-y-2 relative">
    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block mb-2">{label}</label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b ${error ? "border-rose-500/50" : "border-white/10"} py-3 focus:outline-none focus:border-[#cc00cc] transition-all duration-500 text-white placeholder:text-gray-800`}
      />
      {error && <p className="absolute bottom-0 left-0 text-[10px] text-rose-500 font-medium translate-y-full pt-1">{error}</p>}
    </div>
  </div>
);

export default ContactForm;
