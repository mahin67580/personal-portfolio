import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Footertwo from "./Footertwo";
import { useEffect } from "react";
import biust from '../assets/projecti_amge/baiust2.jpg'
const Educationtwo = () => {
    useEffect(() => {
        document.title = 'Education';
        window.scrollTo(0, 0);
    }, []);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (

        <div>
            <section id="education" className="py-20 bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 relative overflow-hidden">
                <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl min-w-0 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                                Education & Learning
                            </h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                                Combining AI Technology with certified background coding skills to bring a unique perspective to
                                web development sector.
                            </p>
                        </motion.div>

                        <div className="grid   grid-cols-1 gap-8 lg:gap-12">
                            <div className=" lg:ml-16     ">
                                <div>
                                    <img className=" 2 w-full object-cover lg:h-[400px]     rounded-2xl h-[200px]" src={biust} alt="" />
                                </div>

                            </div>
                            <div className="lg:col-span-2 space-y-8">
                                <motion.div variants={itemVariants}>
                                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8">Formal Education</h3>


                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gray-700/30 p-6 lg:p-8 rounded-lg border border-gray-600 hover:border-blue-500 transition-all duration-300"
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                            <div className="flex-1">
                                                <h4 className="text-xl lg:text-2xl border-l-2 pl-2 font-semibold text-white mb-2">
                                                    Bachelor of Science in Computer Science & Engineering (CSE)
                                                </h4>
                                                <p className="text-blue-400 font-medium mb-1">Major: Software Engineering</p>
                                                <p className="text-gray-300 mb-2">
                                                    Bangladesh Army International University of Science and Technology (BAIUST)
                                                </p>
                                            </div>
                                            <div className="lg:text-right">
                                                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 mb-2">
                                                    Graduated
                                                </span>
                                                <p className="text-gray-400 text-sm">2019 – 2023</p>
                                                <p className="text-gray-400 text-sm font-medium">CGPA: 3.33 / 4.00</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 leading-relaxed mb-6 text-justify">
                                            Completed my degree with a strong focus on full-stack web development, software engineering, and AI fundamentals.
                                            Developed problem-solving skills through competitive programming, hands-on projects, and teamwork in real-world
                                            software scenarios.
                                        </p>

                                        <div>
                                            <h5 className="text-white font-medium mb-3">Key Subjects:</h5>
                                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                                <span className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm border border-gray-500">
                                                    Data Structures & Algorithms
                                                </span>
                                                <span className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm border border-gray-500">
                                                    Database Management Systems
                                                </span>
                                                <span className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm border border-gray-500">
                                                    Software Engineering
                                                </span>
                                                <span className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm border border-gray-500">
                                                    Web Technologies
                                                </span>
                                                <span className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm border border-gray-500">
                                                    Operating Systems
                                                </span>
                                                <span className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm border border-gray-500">
                                                    Artificial Intelligence
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>


                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8">Technical Learning</h3>
                                    <div className="space-y-6">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-all duration-300"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white mb-1">MERN Stack Development</h4>
                                                    <p className="text-blue-400 font-medium">Programming Hero</p>
                                                </div>
                                                <p className="text-gray-400 text-sm mt-2 sm:mt-0">2024 - Present</p>
                                            </div>
                                            <div className="flex flex-wrap justify-around gap-2">
                                                <span className="px-2 py-1  bg-blue-500/20 text-blue-400 rounded text-sm w-20 text-center border-blue-500/30">
                                                    React.js
                                                </span>
                                                <span className="px-2 w-20 text-center py-1 bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    JavaScript
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Node.js
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Express.js
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    MongoDB
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Next.js
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Firebase
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Vercel
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Tailwind
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    HTML
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    CSS
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Daisy
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Git
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Vite
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Netlify
                                                </span>
                                                <span className="px-2 py-1 w-20 text-center hidden lg:block bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                    Figma
                                                </span>
                                            </div>
                                        </motion.div>

                                        {/* <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-all duration-300"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                            <div>
                                                <h4 className="text-lg font-semibold text-white mb-1">Web Development Fundamentals</h4>
                                                <p className="text-blue-400 font-medium">Various Online Platforms</p>
                                            </div>
                                            <p className="text-gray-400 text-sm mt-2 sm:mt-0">2023 - 2024</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 w-36 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                Responsive Design
                                            </span>
                                            <span className="px-2 py-1  w-36 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                Git/GitHub
                                            </span>
                                            <span className="px-2 py-1  w-36 text-center bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30">
                                                HTML/CSS
                                            </span>
                                            <span className="px-2 py-1 bg-blue-500/20  w-36 text-center text-blue-400 rounded text-sm border border-blue-500/30">
                                                Tailwind CSS
                                            </span>
                                        </div>
                                    </motion.div> */}
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariants} className="space-y-8">
                                <div>
                                    <h3 className="text-2xl lg:text-center font-semibold text-white mb-6">Learning Achievements</h3>
                                    <div className="space-y-4 lg:place-items-center  mt-8">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-gray-700/30 p-4 rounded-lg border border-gray-600"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl">🎯</span>
                                                <div>
                                                    <h4 className="text-white font-medium mb-2">Self Excellence</h4>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        Empowering web development with AI-enhanced workflows and deep technical understanding.
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-gray-700/30 p-4 rounded-lg border border-gray-600"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl">💻</span>
                                                <div>
                                                    <h4 className="text-white font-medium mb-2">Self-Taught Developer</h4>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        Mastered the art of self driven learning in various technologies through dedication
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-gray-700/30 p-4 rounded-lg border border-gray-600"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl">⚡</span>
                                                <div>
                                                    <h4 className="text-white font-medium mb-2">Quick Learner</h4>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        Rapidly adapting to new technologies and frameworks
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-gray-700/30 p-4 rounded-lg border border-gray-600"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl">🔄</span>
                                                <div>
                                                    <h4 className="text-white font-medium mb-2">Continuous Growth</h4>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        Actively expanding skill-set in both AI and web technology domains
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>



                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 lg:ml-7  lg:place-items-center"
                                >
                                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-green-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            ></path>
                                        </svg>
                                        Current Focus
                                    </h4>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                            Advanced React & REST API patterns
                                        </li>

                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                            Payment Getaway
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                            Role based authentication
                                        </li>
                                    </ul>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footertwo></Footertwo>
        </div>

    );
};

export default Educationtwo;