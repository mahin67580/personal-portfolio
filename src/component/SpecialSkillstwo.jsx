import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const SpecialSkillstwo = () => {
    const skills = [
        { name: 'AI Prompting', percentage: 95 },
        { name: 'Communication', percentage: 65 },
        { name: 'Leadership', percentage: 60 },
        { name: 'Teamwork', percentage: 75 },
        { name: 'Flexibility', percentage: 80 },
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const progressBar = {
        hidden: { width: 0 },
        visible: (percentage) => ({
            width: `${percentage}%`,
            transition: {
                duration: 1.5,
                ease: "easeOut",
                delay: 0.5
            }
        })
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <motion.div 
                        className="w-full lg:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        variants={container}
                    >
                        <motion.div variants={item} className="space-y-6">
                            <span className="text-teal-400 font-medium tracking-wider">Special Skills</span>
                            <h2 className="text-4xl font-bold text-white">My Professional Capabilities</h2>
                            <motion.a
                                href="#"
                                className="inline-flex items-center gap-2 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] font-medium px-6 py-3 rounded-lg transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiDownload /> Get Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Skills */}
                    <motion.div 
                        className="w-full lg:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        variants={container}
                    >
                        <div className="space-y-8">
                            {skills.map((skill, index) => (
                                <motion.div 
                                    key={index} 
                                    className="space-y-2"
                                    variants={item}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">{skill.name}</span>
                                        <span className="text-teal-400">{skill.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-[#1e3a8a] rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            className="h-2 rounded-full bg-teal-400"
                                            variants={progressBar}
                                            custom={skill.percentage}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Shape */}
            <motion.div 
                className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-teal-400 opacity-10 blur-3xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </section>
    );
};

export default SpecialSkillstwo;