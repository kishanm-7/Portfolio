import { motion } from 'framer-motion'
import Marquee from "react-fast-marquee";

export default function Hero() {
    return (
        <section className="h-screen w-full flex flex-col justify-center relative overflow-hidden bg-dark">

            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img
                    src="/assets/bg-hero.png"
                    alt="Background Wave"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark/80"></div>
            </div>

            {/* Marquee Background */}
            <div className="absolute top-20 w-full opacity-10 z-0 pointer-events-none select-none">
                <Marquee gradient={false} speed={50} direction="left" autoFill>
                    <span className="text-8xl md:text-[8rem] font-bold uppercase mr-20 font-heading">Creative Developer</span>
                    <span className="text-8xl md:text-[8rem] font-bold uppercase mr-20 font-heading">Tech Enthusiast</span>
                    <span className="text-8xl md:text-[8rem] font-bold uppercase mr-20 font-heading">Minimalist</span>
                </Marquee>
            </div>

            <div className="max-w-7xl mx-auto w-full z-10 px-6 md:px-20 relative">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl font-light mb-4 text-gray-400 tracking-widest uppercase"
                >
                    Kishan M.
                </motion.p>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="text-7xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-2 font-heading"
                    >
                        CREATIVE
                    </motion.h1>
                </div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="text-7xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-8 font-heading"
                    >
                        DEVELOPER
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="max-w-xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed mt-12 mix-blend-difference"
                >
                    I design, build, and optimize digital experiences with clean code and modern technologies.
                </motion.p>
            </div>

            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 right-10 md:right-20 flex flex-col items-center gap-4 z-20"
            >
                <span className="text-sm font-mono rotate-90 origin-right translate-x-2 text-gray-500">SCROLL</span>
                <div className="w-[1px] h-20 bg-gray-700 animate-pulse"></div>
            </motion.div>
        </section>
    )
}
