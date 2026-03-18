import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

import Footer from '../components/common/Footer';

import { Link } from 'react-router-dom';
import { BLOG_CATEGORIES } from '../data/blogsData';


const Blogs = () => {
    const [selectedTag, setSelectedTag] = useState("Latest Blogs");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Since proxy is configured, we can use absolute path
                const response = await axios.get('/api/blog2');
                if (response.data.success) {
                    setPosts(response.data.data);
                } else {
                    setError('Failed to fetch blogs');
                }
            } catch (err) {
                setError('Error fetching blogs from API');
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const filteredPosts = selectedTag === "Latest Blogs" 
        ? posts 
        : posts.filter(post => post.category.trim().toLowerCase() === selectedTag.trim().toLowerCase());


    return (
        <div className="bg-[#030303] text-white pt-28 w-full min-h-screen">
            {/* Background ambient glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(204,0,204,0.12)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* 0. Page Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#cc00cc]/30 bg-[#cc00cc]/5 backdrop-blur-sm mb-6">
                        <span className="text-[#cc00cc] text-md font-semibold uppercase tracking-wider">Our Stories</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white mb-6">
                        Latest <span 
                            className="font-playfair italic font-medium text-[#cc00cc] drop-shadow-[0_0_20px_rgba(204,0,204,0.2)]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Blogs
                        </span>
                    </h1>

                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        Insights, thoughts, and trends from our team.
                    </p>
                </motion.div>

                {/* 1. Tags Navigation Row: Stacked nicely to match image */}
                <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-16 no-scrollbar flex-nowrap justify-start md:justify-center">
                    {BLOG_CATEGORIES.map((tag, idx) => {
                        const isActive = selectedTag === tag;
                        return (
                            <button
                                key={idx}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-6 py-3 rounded-full  cursor-pointer text-sm font-bold tracking-normal whitespace-nowrap transition-all duration-300 relative ${
                                    isActive 
                                    ? "bg-[#cc00cc] text-white shadow-[0_4px_20px_-2px_rgba(204,0,204,0.5)] border-transparent" 
                                    : "bg-[#0b0b0b]/60 text-gray-400 hover:bg-[#111111] hover:text-white border border-white/5 backdrop-blur-sm"
                                }`}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>

                {/* 2. Blog Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-32 max-w-6xl mx-auto">
                    {loading ? (
                        <div className="col-span-full py-20 text-center text-gray-400 font-medium">
                            <div className="w-8 h-8 border-2 border-[#cc00cc] border-t-white rounded-full animate-spin mx-auto mb-4" />
                            Loading articles...
                        </div>
                    ) : error ? (
                        <div className="col-span-full py-20 text-center text-rose-500 font-medium">
                            {error}
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="col-span-full py-20 text-center text-gray-500 font-medium">
                            No articles found in this category.
                        </div>
                    ) : filteredPosts.map((post) => (
                        <Link to={`/blogs/${post._id}`} key={post._id} className="group">

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex flex-col cursor-pointer"
                            >
                            {/* Card Image Wrapper with Hover Lift & Scale */}
                            <div className="relative aspect-16/10 rounded-2xl overflow-hidden mb-5 border border-white/10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)] bg-[#070707]">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                
                                {/* Bottom vignette glow gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-100 group-hover:opacity-70 transition-opacity duration-500" />
                                
                                {/* Interactive Spotlight Glow Border support overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(204,0,204,0.08)_0%,transparent_100%)] pointer-events-none" />
                            </div>

                            {/* Card Footer Information */}
                            <div className="flex flex-col">
                                <span className="inline-block text-[10px] uppercase font-black tracking-widest text-[#cc00cc] mb-2 drop-shadow-[0_0_10px_rgba(204,0,204,0.3)]">
                                    {post.category}
                                </span>
                                <h3 className="text-xl md:text-2xl font-sans font-black leading-tight text-white/95 group-hover:text-white group-hover:underline decoration-[#cc00cc]/30 decoration-2 underline-offset-4 transition-all duration-300">
                                    {post.title}
                                </h3>
                            </div>
                        </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blogs;
