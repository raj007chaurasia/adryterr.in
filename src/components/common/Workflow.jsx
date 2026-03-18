import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
    Sparkles, 
    BarChart3, 
    CheckCircle2, 
    Rocket,
    Layout,
    Database,
    Palette,
    Search,
    Code2,
    Zap,
    Cpu,
    MousePointer2,
    Layers,
    ShieldCheck
} from 'lucide-react';

const Workflow = () => {
    return (
        <section className="relative pt-24 md:pt-48 pb-20 md:pb-40 overflow-visible selection:bg-[#660066]/30">
            {/* Ambient Background Glows & Junction Blend */}
            <div className="absolute top-80 left-1/4 w-[800px] h-[500px] bg-[#660066]/25 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-[#660066]/10 rounded-full blur-[120px] pointer-events-none translate-y-1/4" />
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-bold tracking-[0.2em] uppercase mb-8"
                    >
                        <Cpu className="w-3 h-3 fill-current" />
                        Next-Gen Engineering
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-[0.95]"
                    >
                        We Build, <br />
                        <motion.span 
                            animate={{ 
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{ 
                                duration: 5, 
                                repeat: Infinity, 
                                ease: "linear" 
                             }}
                            style={{ backgroundSize: "200% auto" }}
                            className="italic font-serif font-light text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-400 to-violet-400"
                        >
                            You Scale Fast.
                        </motion.span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-80"
                    >
                        Specialized in High-Performance Web Apps, Cross-Platform Mobile Solutions, 
                        and AI-Powered Business Automations.
                    </motion.p>
                </div>

                {/* Workflow Diagram Container */}
                <div className="relative max-w-7xl mx-auto flex flex-col items-stretch">
                    
                    {/* SVG Layer for "Electric" Connectors - Moved above cards (z-30) */}
                    <div className="absolute inset-0 z-30 pointer-events-none hidden lg:block opacity-70">
                        <ConnectorLines />
                    </div>

                    {/* Top Row Cards */}
                    <div className="relative z-20 grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20 lg:mb-0">
                        <StepCard 
                            index={0}
                            title={<>Web <span className="italic font-serif font-light text-violet-300">Development</span></>}
                            description="Crafting high-speed, SEO-optimized web applications with modern tech stacks and pixel-perfect UI."
                        >
                            <WebDevMockup />
                        </StepCard>
 
                        <StepCard 
                            index={1}
                            title={<>App <span className="italic font-serif font-light text-violet-300">Engineering</span></>}
                            description="Building seamless cross-platform mobile experiences that feel native and perform beautifully."
                        >
                            <AppDevMockup />
                        </StepCard>
 
                        <StepCard 
                            index={2}
                            title={<>AI <span className="italic font-serif font-light text-violet-300">Automations</span></>}
                            description="Integrating intelligent agents and LLM-powered workflows to eliminate repetitive manual tasks."
                        >
                            <AIAutomationMockup />
                        </StepCard>
                    </div>
 
                    {/* Middle Section (Logo Row) */}
                    <div className="hidden lg:flex relative h-86 z-40 items-center justify-center pointer-events-none">
                        <motion.div 
                            animate={{ 
                                scale: [1, 1.08, 1],
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-36 h-36 rounded-full flex  items-center justify-center pointer-events-auto"
                        >
                            <div className="absolute inset-0 bg-[#660066]/40 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute inset-[-20px] bg-[#660066]/10 rounded-full blur-[60px]" />
                             
                            {/* Glass Orb */}
                            <div className="relative w-28 h-28 rounded-full bg-linear-to-br from-[#660066] to-[#440044] flex items-center justify-center border-4 border-[#ff00ff]/30 shadow-[0_0_50px_rgba(102,0,102,0.8),inset_0_0_20px_rgba(255,255,255,0.2)] overflow-hidden">
                                <div className="z-10 flex flex-col items-center">
                                    <img src="/images/Adryterlogo.png" alt="Logo" className="w-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                                </div>
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 opacity-20"
                                >
                                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-linear-to-br from-white to-transparent blur-xl" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
 
                    {/* Bottom Row Cards */}
                    <div className="relative z-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <StepCard 
                            index={3}
                            title={<>Scalable <span className="italic font-serif font-light text-violet-300">Architecture</span></>}
                            description="Designing robust cloud-native systems that grow effortlessly with your user base and business needs."
                        >
                            <ArchitectureMockup />
                        </StepCard>
 
                        <StepCard 
                            index={4}
                            title={<>Agile <span className="italic font-serif font-light text-violet-300">Launch Sync</span></>}
                            description="Accelerated deployment cycles with CI/CD pipelines to get your product live in record time."
                        >
                            <LaunchMockup />
                        </StepCard>
 
                        <StepCard 
                            index={5}
                            title={<>Advanced <span className="italic font-serif font-light text-violet-300">Tech Support</span></>}
                            description="Ongoing maintenance and performance tuning to ensure 99.9% uptime and security."
                        >
                            <SupportMockup />
                        </StepCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* --- Detailed Card Sub-Components --- */

const StepCard = ({ title, description, children, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, backdrop-filter" }}
            className="group relative flex flex-col p-8 rounded-[40px] bg-[#12121a]/80 border border-white/5 backdrop-blur-xl overflow-hidden"
        >
            <div className="absolute inset-px rounded-[39px] border border-white/3 pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors duration-500">
                {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500 text-pretty">
                {description}
            </p>
            <div className="mt-auto relative bg-[#08080c] rounded-[24px] border border-white/5 p-6 min-h-[220px] flex flex-col justify-center shadow-2xl overflow-hidden group-hover:border-violet-500/20 transition-all duration-500">
                {children}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>
            <div className="absolute inset-0 bg-linear-to-br from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/3 group-hover:to-fuchsia-500/3 transition-all duration-700 pointer-events-none" />
        </motion.div>
    );
};

/* --- High-Fidelity Mockups --- */

const WebDevMockup = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-3 py-2 bg-white/5 border border-white/10 rounded-xl">
            <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <div className="text-[8px] text-gray-400 font-mono tracking-tighter">adryter.engineering/deploy</div>
        </div>
        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl font-mono text-[10px] space-y-2">
            <div className="flex gap-2">
                <span className="text-violet-400">const</span>
                <span className="text-blue-300">deploy</span>
                <span className="text-white">=</span>
                <span className="text-violet-400">async</span>
                <span className="text-white">()</span>
                <span className="text-violet-400">=&gt;</span>
                <span className="text-white">{`{`}</span>
            </div>
            <div className="pl-4 text-gray-500 italic">// Initializing AI Engine...</div>
            <div className="pl-4">
                <span className="text-white">await</span>
                <span className="text-yellow-200"> build</span>
                <span className="text-white">({`{ stack: 'Next.js' }`})</span>
            </div>
            <div className="text-white">{`}`}</div>
        </div>
    </div>
);

const AppDevMockup = () => (
    <div className="flex items-center justify-center p-4">
        <div className="w-24 h-44 rounded-3xl border-2 border-white/10 bg-[#0c0c0e] relative overflow-hidden flex flex-col p-3 gap-2">
            <div className="w-8 h-1 self-center bg-white/10 rounded-full mb-1" />
            <div className="flex-1 rounded-xl bg-white/3 border border-white/5 p-2 space-y-2">
                <div className="h-2 w-full bg-violet-500/20 rounded-full" />
                <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                <div className="mt-auto h-6 w-full rounded-lg bg-linear-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-900/30" />
            </div>
            <div className="flex justify-around pb-1">
                <div className="w-4 h-4 rounded-full bg-white/10" />
                <div className="w-4 h-4 rounded-full bg-violet-500/30" />
                <div className="w-4 h-4 rounded-full bg-white/10" />
            </div>
        </div>
    </div>
);

const AIAutomationMockup = () => (
    <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center text-[10px] font-black text-violet-400 uppercase tracking-widest">
            <span>Automated Task Sync</span>
            <Zap className="w-3 h-3 animate-pulse" />
        </div>
        <div className="space-y-2">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/2 border border-white/5 relative group/row overflow-hidden">
                    <div className="w-6 h-6 rounded-lg bg-violet-600/20 border border-violet-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-violet-400" />
                    </div>
                    <div className="flex-1 h-2.5 bg-white/5 rounded-full relative overflow-hidden">
                        <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1, delay: i * 0.2 }} className="absolute inset-0 bg-linear-to-r from-violet-600 to-indigo-400 opacity-60" />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ArchitectureMockup = () => (
    <div className="relative h-24 w-full flex items-center justify-center">
        <Database className="w-8 h-8 text-violet-500 opacity-20 absolute top-0 left-10" />
        <Cpu className="w-8 h-8 text-fuchsia-500 opacity-20 absolute bottom-0 right-10" />
        <div className="relative z-10 flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <Layers className="w-6 h-6 text-violet-400" />
            </div>
            <div className="h-px w-8 bg-linear-to-r from-violet-500 to-fuchsia-500" />
            <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <Layout className="w-6 h-6 text-white" />
            </div>
        </div>
    </div>
);

const LaunchMockup = () => (
    <div className="flex flex-col gap-6 items-center">
        <div className="flex gap-6 relative">
            {[Rocket, ShieldCheck, CheckCircle2].map((Icon, i) => (
                <div key={i} className={`relative w-12 h-12 rounded-full border-2 flex items-center justify-center ${i === 0 ? 'bg-violet-600 border-violet-400 shadow-lg shadow-violet-900/40' : 'bg-white/5 border-white/10 opacity-40'}`}>
                    <Icon className={`w-6 h-6 ${i === 0 ? 'text-white' : 'text-gray-400'}`} />
                    {i === 0 && <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0b0b0f] animate-ping" />}
                </div>
            ))}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -z-10 -translate-y-1/2" />
        </div>
        <div className="w-full space-y-3 px-4">
            <div className="h-2 w-full bg-white/3 rounded-full overflow-hidden">
                <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="h-full w-1/3 bg-linear-to-r from-transparent via-violet-500 to-transparent" />
            </div>
            <div className="h-2 w-3/4 bg-white/3 rounded-full" />
        </div>
        <div className="text-[10px] font-black text-green-400 uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Vercel: Deployment Live
        </div>
    </div>
);

const SupportMockup = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green-500" />
            </div>
            <div>
                <div className="text-[10px] font-black text-white uppercase tracking-tighter">System Health</div>
                <div className="text-[8px] text-green-400 font-bold uppercase tracking-widest">Optimized & Secure</div>
            </div>
        </div>
        <div className="h-20 w-full bg-white/2 border border-white/5 rounded-2xl p-4 flex items-end gap-1.5 overflow-hidden">
            {[30, 45, 25, 60, 40, 80, 55, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-violet-500/20 rounded-t-sm relative">
                    <motion.div initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="absolute bottom-0 left-0 right-0 bg-violet-500/50 rounded-t-sm" />
                </div>
            ))}
        </div>
    </div>
);

/* --- Specialized SVG Connector Component --- */

const ConnectorLines = () => {
    return (
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="electricGradient" x1="0" y1="0" x2="1000" y2="1000" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#660066" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ff00ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#660066" stopOpacity="0" />
                </linearGradient>
                <filter id="electricGlow" x="-100%" y="-100%" width="300%" height="300%" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feFlood floodColor="#660066" floodOpacity="0.8" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
            </defs>
            
            <g>
                {/* Top -> Center (Moved up to y=330 to close gap) */}
                <ElectricPath d="M 166 330 C 166 450, 420 500, 500 500" />
                <ElectricPath d="M 500 330 L 500 500" />
                <ElectricPath d="M 833 330 C 833 450, 580 500, 500 500" />
                
                {/* Bottom -> Center (Moved down to y=670 to close gap) */}
                <ElectricPath d="M 166 670 C 166 550, 420 500, 500 500" />
                <ElectricPath d="M 500 670 L 500 500" />
                <ElectricPath d="M 833 670 C 833 550, 580 500, 500 500" />

             
            </g>
        </svg>
    );
};

const ElectricPath = ({ d }) => {
    // Generate random stable timing for each path
    const { duration, delay, repeatDelay } = useMemo(() => ({
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 10,
        repeatDelay: Math.random() * 5
    }), []);

    return (
        <g>
            {/* Base Dim Line */}
            {/* Base Dim Line */}
            <path d={d} stroke="#660066" strokeWidth="2" fill="none" strokeOpacity="0.3" />
            
            {/* Fading Trail */}
            <motion.path 
                d={d}
                stroke="rgba(102, 0, 102, 0.3)"
                strokeWidth="2"
                fill="none"
                pathLength={1}
                strokeDasharray="0.2 1"
                animate={{ 
                    strokeDashoffset: [1.2, 0] 
                }}
                transition={{ 
                    duration: duration, 
                    repeat: Infinity, 
                    ease: "linear", 
                    delay: delay,
                    repeatDelay: repeatDelay
                }}
            />

            {/* Glowing Star Particle (Independent Timing) */}
            <motion.g
                style={{ 
                    offsetPath: `path("${d}")`,
                    offsetRotate: "auto"
                }}
                animate={{ 
                    offsetDistance: ["0.5%", "99.5%"] 
                }}
                transition={{ 
                    duration: duration, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: delay,
                    repeatDelay: repeatDelay
                }}
            >
                {/* Multi-layered Pulsing Glow */}
                <circle r="8" fill="#660066" opacity="0.2">
                    <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle r="4" fill="#ff00ff" opacity="0.4" />
                
                {/* Core Spark */}
                <circle r="2" fill="white" className="shadow-[0_0_15px_white]" />
            </motion.g>
        </g>
    );
};

const JunctionPoint = ({ x, y }) => (
    <g>
        <motion.circle cx={x} cy={y} r="8" fill="#660066" fillOpacity="0.05" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
        <motion.circle cx={x} cy={y} r="3" fill="#ff00ff" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} filter="url(#electricGlow)" />
    </g>
);

export default Workflow;
