import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StarBorder from '../StarBorder';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const navLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <>
            {/* Mobile Top Navbar - Floating Pill */}
            <div className={`md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
                <StarBorder
                    color="#660066"
                    speed="12s"
                    thickness={1.5}
                    className="w-full"
                >
                    <div className="flex items-center justify-between px-5 py-2.5">
                        <Link to="/" onClick={() => { setIsOpen(false); document.body.style.overflow = 'auto'; }}>
                            <img src="/images/adryter2.png" alt="Logo" className="h-6 brightness-110" />
                        </Link>

                        <button
                            onClick={toggleMenu}
                            className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                                className="w-5 h-0.5 bg-white rounded-full block transition-transform"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                                className="w-5 h-0.5 bg-white rounded-full block transition-all"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                                className="w-5 h-0.5 bg-white rounded-full block transition-transform"
                            />
                        </button>
                    </div>
                </StarBorder>
            </div>

            {/* Mobile Slide-down Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden fixed inset-0 z-40 bg-[#030303] pt-28 px-8 overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-8">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => {
                                            setIsOpen(false);
                                            document.body.style.overflow = 'auto';
                                        }}
                                        className="text-2xl font-black uppercase tracking-tighter text-white/80 hover:text-[#cc00cc] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="absolute bottom-12 left-8 right-8 flex flex-col gap-6">
                            <div className="h-px w-full bg-white/10" />
                            <div className="flex justify-between items-center opacity-30">
                                <span className="text-[10px] font-black tracking-widest uppercase">© 2026 AdRyter</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Bottom Navbar */}
            <div className="hidden md:flex fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 justify-center">
                <StarBorder
                    color="#660066"
                    speed="12s"
                    thickness={2}
                    className="w-full flex justify-center"
                >
                    <nav className="flex items-center justify-between px-8 py-3 w-full">
                        <div className="flex items-center gap-10">
                            {navLinks.slice(0, 2).map(link => (
                                <Link key={link.name} to={link.path} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#cc00cc] transition-colors">{link.name}</Link>
                            ))}
                        </div>

                        <div className="flex items-center px-4">
                            <Link to="/">
                                <img src="/images/adryter2.png" alt="AdRyter" className="h-10 object-contain brightness-110" />
                            </Link>
                        </div>

                        <div className="flex items-center gap-10">
                            {navLinks.slice(2).map(link => (
                                <Link key={link.name} to={link.path} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#cc00cc] transition-colors">{link.name}</Link>
                            ))}
                        </div>
                    </nav>
                </StarBorder>
            </div>
        </>
    );
};

export default Navbar;
