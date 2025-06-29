import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import devImage from '../assets/projecti_amge/dev.jpg'
 

const AboutMetwo = () => {
    return (
        <div>

            <section id='about' className="bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 py-20 px-4">
                <div className="container mx-auto">
                    <Fade direction="down" triggerOnce>
                        <h2 className="text-4xl font-bold text-center mb-4 text-white">About Me</h2>
                        <p className="text-center max-w-2xl mx-auto mb-12 text-teal-400">
                            Passionate Developer | Tech Enthusiast | Problem Solver
                        </p>
                    </Fade>

                    <div className="flex flex-col  p-2  lg:flex-row items-center justify-center mx-auto gap-12">
                        {/* Image Section */}
                        <Slide direction="left" triggerOnce>
                            <div className="  relative group">
                                <div className="overflow-hidden  rounded-xl border-2 border-teal-400/30 shadow-xl">
                                    <img
                                        src={devImage}
                                        alt="Developer Profile"
                                        className="lg:w-[900px]  object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute -inset-4 border-2 border-teal-400/20 rounded-xl z-[-1] group-hover:border-teal-400/40 transition-all duration-300"></div>
                            </div>
                        </Slide>

                        {/* Text Information Section */}
                        <Slide direction="right" triggerOnce>
                            <div className="text-justify  space-y-6">
                                <h3 className="text-2xl font-bold text-teal-400">MERN Stack Web Developer</h3>

                                <p>
                                    I'm deeply passionate about coding and constantly exploring new technologies in the web development
                                    ecosystem. My journey revolves around building robust, scalable applications using the MERN stack
                                    (MongoDB, Express.js, React.js, and Node.js/express js).
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <span className="text-teal-400 mr-2">•</span>
                                        <span>
                                            <strong>AI Integration:</strong> I'm enthusiastic about AI integration and leveraging AI tools
                                            to boost productivity and enhance development workflows.
                                        </span>
                                    </div>

                                    <div className="flex items-start">
                                        <span className="text-teal-400 mr-2">•</span>
                                        <span>
                                            <strong>UI/UX Focus:</strong> I love creating unique, intuitive user interfaces and bringing
                                            them to life through clean, efficient code before deploying to production environments.
                                        </span>
                                    </div>
                                    <div className="flex items-start mt-2">
                                        <span className="text-teal-400 mr-2">•</span>
                                        <span>
                                            <strong>Functionality & Performance:</strong> I prioritize building responsive, functional features with clean logic, while ensuring smooth performance and fast load times across devices.
                                        </span>
                                    </div>


                                    <div className="flex items-start">
                                        <span className="text-teal-400 mr-2">•</span>
                                        <span>
                                            <strong>Team Player:</strong> Comfortable collaborating in team environments, I'm flexible
                                            under pressure and committed to delivering quality work within deadlines.
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h4 className="text-xl font-semibold mb-3 text-white">Technical Approach:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">Modern JavaScript</span>
                                        <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">Responsive Design</span>
                                        <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">RESTful APIs</span>
                                        <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">State Management</span>
                                        <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">Performance Optimization</span>
                                        <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">AI Tool Integration</span>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>
         
        </div>

    );
};

export default AboutMetwo;