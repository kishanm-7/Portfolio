import { motion } from 'framer-motion'

const skills = [
    "Web Development",
    "AI-Based Systems",
    "Data Analytics",
    "Traffic Monitoring",
    "Frontend",
    "Backend",
    "Problem Solving"
]

export default function Skills() {
    return (
        <section className="relative py-20 md:py-32 px-6 md:px-20 border-t border-light/10 bg-dark overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
                <img
                    src="/assets/bg-skills.png"
                    alt="Background Tech"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-8xl font-bold opacity-10 leading-none">SKILLS &<br />EXPERTISE</h2>
                    <p className="max-w-md text-gray-400 mt-8 md:mt-0 leading-relaxed">
                        I leverage a modern tech stack to build scalable, high-performance applications. My focus is on clean code, seamless user experiences, and scalable solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group cursor-pointer"
                        >
                            <div className="h-[1px] w-full bg-light/20 mb-6 group-hover:bg-light transition-colors duration-500 ease-in-out"></div>
                            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-light transition-colors duration-300 text-gray-300">{skill}</h3>
                            <p className="text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Expertise Level: Advanced
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
