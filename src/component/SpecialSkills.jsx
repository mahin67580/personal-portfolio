import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FiDownload } from 'react-icons/fi';

const SpecialSkills = () => {
    const skills = [
        { name: 'AI Prompting', percentage: 95 },
        { name: 'Communication', percentage: 65 },
        { name: 'Leadership', percentage: 60 },
        { name: 'Teamwork', percentage: 75 },
        { name: 'Flexibility', percentage: 80 },

    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <Fade direction="left" triggerOnce>
                            <div className="space-y-6">
                                <span className="text-teal-400 font-medium tracking-wider">Special Skills</span>
                                <h2 className="text-4xl font-bold text-white">My Professional Capabilities</h2>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] font-medium px-6 py-3 rounded-lg transition-colors"
                                >
                                    <FiDownload /> Get Resume
                                </a>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Content - Skills */}
                    <div className="w-full lg:w-1/2">
                        <Fade direction="right" triggerOnce cascade damping={0.1}>
                            <div className="space-y-8">
                                {skills.map((skill, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-teal-400">{skill.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-[#1e3a8a] rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full bg-teal-400 transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            {/* Decorative Shape */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-teal-400 opacity-10 blur-3xl"></div>
        </section>
    );
};

export default SpecialSkills;