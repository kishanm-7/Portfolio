import { motion } from 'framer-motion'
import { Linkedin, Mail, Github, FileText } from 'lucide-react'

export default function Contact() {
    return (
        <section className="py-32 px-6 md:px-20 bg-dark min-h-[60vh] flex flex-col justify-between border-t border-light/10">
            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-bold mb-20 tracking-tighter font-heading"
                >
                    LET'S WORK <br /> TOGETHER
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <a href="mailto:kishan.m2255@gmail.com" className="inline-block text-3xl md:text-5xl font-bold border-b-2 border-light/30 pb-2 hover:text-gray-300 transition-colors hover:border-light">
                            kishan.m2255@gmail.com
                        </a>
                        <p className="mt-8 text-gray-400 max-w-sm text-lg">
                            Available for freelance projects and collaborations. Open to hearing about new opportunities.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-8 md:items-end text-lg">
                        <div className="flex flex-col items-start md:items-end gap-3">
                            <a href="https://www.linkedin.com/in/kishan-m-a7a066219/" target="_blank" rel="noopener noreferrer" className="hover:text-light transition-colors group flex items-center gap-2 text-gray-400">
                                <span className="text-gray-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">Professional me</span>
                                <Linkedin size={20} /> LinkedIn ↗
                            </a>
                            <a href="https://github.com/kishanm-7" target="_blank" rel="noopener noreferrer" className="hover:text-light transition-colors group flex items-center gap-2 text-gray-400">
                                <span className="text-gray-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">Code repos</span>
                                <Github size={20} /> GitHub ↗
                            </a>
                            <a href="https://www.instagram.com/_kishan.m?igsh=MTFnZzJxOHZ5YWtqbw==" target="_blank" rel="noopener noreferrer" className="hover:text-light transition-colors group flex items-center gap-2 text-gray-400">
                                <span className="text-gray-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">Not Tiktok</span>
                                <Mail size={20} /> Instagram ↗
                            </a>
                        </div>
                        <button className="flex items-center gap-2 bg-light text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors w-fit mt-4 transform hover:scale-105 active:scale-95 duration-200">
                            <FileText size={20} /> Download Resume
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end mt-32 text-sm text-gray-500 font-mono border-t border-light/5 pt-8">
                <p>© 2026 Kishan M.</p>
                <p className="mt-2 md:mt-0">Inspired by Minh Pham. Built with React & Tailwind.</p>
            </div>
        </section>
    )
}
