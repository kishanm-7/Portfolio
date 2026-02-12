import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="relative py-24 px-6 md:px-20 min-h-[50vh] flex items-center bg-dark overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <img
                    src="/assets/bg-about.png"
                    alt="Background Coffee Cup"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-sm font-light tracking-widest uppercase mb-4 text-gray-500">About Me</h2>
                </div>
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xl md:text-3xl leading-relaxed font-light text-gray-200">
                            I am a dedicated and detail-oriented developer with a strong foundation in <span className="text-light font-medium">web technologies</span>, <span className="text-light font-medium">AI-based systems</span>, and <span className="text-light font-medium">data analytics</span>. I have worked on projects involving intelligent traffic monitoring systems and scalable web applications, focusing on performance, reliability, and user experience.
                            <br /><br />
                            I am passionate about solving <span className="text-light font-medium">real-world problems</span> through technology and continuously enhancing my skills to stay aligned with industry advancements. My goal is to contribute to innovative projects that create meaningful impact.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
