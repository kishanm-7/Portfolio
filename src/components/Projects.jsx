import { motion } from 'framer-motion'

const projects = [
    {
        title: "AI Traffic System",
        category: "AI & Systems",
        description: "Intelligent traffic monitoring to prevent server overload.",
        year: "2026"
    },
    {
        title: "Portfolio Website",
        category: "Web Development",
        description: "Built using AI-powered web development tools.",
        year: "2026"
    },
    {
        title: "Gaming Website",
        category: "Web Development",
        description: "High-performance gaming platform with immersive UI & animations.",
        year: "2026"
    }
]

export default function Projects() {
    return (
        <section className="py-32 px-6 md:px-20 border-t border-light/10 bg-dark">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex justify-between items-end mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight">SELECTED <br /> WORKS</h2>
                    <span className="text-lg font-mono text-gray-500">(03)</span>
                </div>

                <div className="flex flex-col space-y-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group py-16 border-t border-light/10 hover:bg-light/5 transition-colors duration-500 cursor-pointer px-4 relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="text-4xl md:text-6xl font-bold mb-2 group-hover:translate-x-6 transition-transform duration-500 ease-out">{project.title}</h3>
                                    <p className="text-gray-400 text-xl group-hover:translate-x-6 transition-transform duration-500 delay-75 ease-out">{project.category}</p>
                                </div>
                                <div className="text-right group-hover:-translate-x-6 transition-transform duration-500 ease-out">
                                    <p className="text-gray-500 mb-2 font-mono">{project.year}</p>
                                    <p className="text-sm text-gray-300 max-w-xs">{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-light/10"></div>
                </div>
            </div>
        </section>
    )
}
