import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiPlay } from 'react-icons/hi';
import { FaFacebook, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import mahin from '../assets/mahin7-min.jpg';
import { TypeAnimation } from 'react-type-animation';
import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";
import { FiDownload } from 'react-icons/fi';
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoId = '9I4KBr_nLWc';

    // Add this function to handle resume download
    const handleDownloadResume = () => {
        // Path to your resume file in the public folder
        const resumeUrl = '/src/assets/Resume.pdf'; // or '../assets/resume.pdf' if it's in src/assets

        // Create an anchor element
        const link = document.createElement('a');
        link.href = resumeUrl;

        // This suggests the filename for the download
        link.download = 'Afjal_Hossain_Resume.pdf';

        // Append to the DOM, trigger click, then remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const imageVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const techIcons = [
        { id: "mongo", icon: <SiMongodb className="text-green-500 w-10 h-10" />, x: "10%", delay: 0 },
        { id: "express", icon: <SiExpress className="text-gray-400 w-10 h-10" />, x: "25%", delay: 0.3 },
        { id: "react", icon: <FaReact className="text-blue-400 w-12 h-12" />, x: "40%", delay: 0.6 },
        { id: "node", icon: <FaNodeJs className="text-green-400 w-12 h-12" />, x: "55%", delay: 0.9 },
        { id: "js", icon: <SiJavascript className="text-yellow-400 w-10 h-10" />, x: "70%", delay: 1.2 },
        { id: "ts", icon: <SiTypescript className="text-blue-600 w-10 h-10" />, x: "85%", delay: 1.5 },
        { id: "github", icon: <FaGithub className="text-white w-10 h-10" />, x: "20%", delay: 1.8 },
        { id: "html", icon: <FaHtml5 className="text-orange-500 w-10 h-10" />, x: "35%", delay: 2.1 },
        { id: "css", icon: <FaCss3Alt className="text-blue-500 w-10 h-10" />, x: "65%", delay: 2.4 },
        { id: "tailwind", icon: <SiTailwindcss className="text-cyan-400 w-10 h-10" />, x: "50%", delay: 2.7 },
    ];


    return (
        <section className="relative bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-white py-10 md:py-28 lg:py-36 overflow-hidden">
            {/* Background shapes */}

            {/* <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`shape-${i}`}
                        className={`absolute rounded-full ${i % 2 === 0 ? 'bg-indigo-500' : 'bg-teal-400'} opacity-20`}
                        style={{
                            width: i % 2 === 0 ? '4rem' : '6rem',
                            height: i % 2 === 0 ? '4rem' : '6rem',
                            top: `${10 + (i * 15)}%`,
                            left: `${5 + (i * 10)}%`,
                            animation: `pulse 6s infinite ${i * 0.5}s`
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                ))}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`shape-bottom-${i}`}
                        className={`absolute rounded-full ${i % 2 === 0 ? 'bg-teal-400' : 'bg-indigo-500'} opacity-20`}
                        style={{
                            width: i % 2 === 0 ? '5rem' : '7rem',
                            height: i % 2 === 0 ? '5rem' : '7rem',
                            bottom: `${5 + (i * 10)}%`,
                            right: `${5 + (i * 10)}%`,
                            animation: `pulse 8s infinite ${i * 0.3}s`
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                ))}
            </div> */}

            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                {techIcons.map((tech) => (
                    <motion.div
                        key={tech.id}
                        className="absolute"
                        style={{
                            left: tech.x,
                            top: 0,
                        }}
                        animate={{ y: ["-100px", "80vh"], opacity: [0, 0.5, 0] }}
                        transition={{
                            duration: 6,
                            delay: tech.delay,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    >
                        {tech.icon}
                    </motion.div>
                ))}
            </div>

            <div className="absolute top-0 left-0 w-full flex justify-between">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={`top-${i}`}
                        className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-indigo-500 opacity-20 transform -translate-y-1/2"
                        style={{
                            animation: `pulse 4s infinite ${i * 0.5}s`,
                            marginLeft: `${i * 15}%`
                        }}
                    />
                ))}
            </div>

            <div className="absolute bottom-0 right-0 w-full flex justify-between">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={`bottom-${i}`}
                        className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-teal-400 opacity-20 transform translate-y-1/2"
                        style={{
                            animation: `pulse 4s infinite ${i * 0.5}s`,
                            marginRight: `${i * 15}%`
                        }}
                    />
                ))}
            </div>


            <div className="container mx-auto px-4  ">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Content */}
                    <motion.div
                        className=" "
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl md:text-2xl font-light text-teal-400 mb-2">
                                Hello! I'm
                            </h3>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Afjal <span className="text-teal-400">Hossain</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="text-2xl md:text-3xl font-mono text-center  md:h-20 mb-8 lg:mb-0 lg:ml-24 w-80 lg:w-96 text-purple-200"
                            variants={itemVariants}
                        >
                            <TypeAnimation
                                sequence={[
                                    'MERN Stack Developer',
                                    1000,
                                    'MongoDB',
                                    1000,
                                    'Express-JS',
                                    1000,
                                    'React-JS',
                                    1000,
                                    'Node-JS',
                                    1000,
                                    'Java-Script',
                                    1000,
                                    'Type-Script',
                                    1000,
                                    'HTML',
                                    1000,
                                    'CSS',
                                    1000,
                                    'Firebase',
                                    1000,

                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{
                                    display: 'inline-block',
                                    color: '#36BCF7'
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center gap-4 mb-10"
                            variants={itemVariants}
                        >
                            <motion.a
                                onClick={handleDownloadResume}
                                className="inline-flex items-center gap-2 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] font-medium px-6 py-3 rounded-lg transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiDownload /> Get Resume
                            </motion.a>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="relative flex items-center justify-center w-14 h-14 rounded-full bg-teal-400 text-white hover:bg-teal-500 transition-all group"
                                >
                                    <HiPlay className="text-xl ml-1" />
                                    <span className="absolute w-full h-full rounded-full border-2 border-teal-400 animate-ping opacity-0 group-hover:opacity-100"></span>
                                </button>
                                <span className="text-lg">Watch Video</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Portrait */}
                    <motion.div
                        className="relative flex justify-center  "
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                    >
                        <div className="relative max-w-md">
                            <div className="relative z-10">
                                <motion.div
                                    className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 overflow-hidden rounded-xl border-2 border-teal-400/30 shadow-xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={mahin}
                                        alt="Afjal Hossain"
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div>
                            </div>

                            {/* Half-circle decoration */}
                            <motion.div
                                className="absolute -right-6 -bottom-6 w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-teal-400 opacity-20 z-0"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            />

                            {/* Social Links */}
                            <motion.div
                                className="absolute -left-11 lg:-left-14 top-1/2 transform -translate-y-1/2 flex flex-col gap-3.5 lg:gap-5 bg-white/10 backdrop-blur-sm p-3 lg:p-4 rounded-full z-20"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <SocialIcon
                                    href="https://www.linkedin.com/in/afjal-hossain-webdev/"
                                    icon={<FaLinkedinIn className="text-xl lg:text-2xl" />}
                                />
                                <SocialIcon
                                    href="https://www.facebook.com/afzalh0ssainmahin/"
                                    icon={<FaFacebook className="text-xl lg:text-2xl" />}
                                />
                                <SocialIcon
                                    href="https://github.com/mahin67580"
                                    icon={<FaGithub className="text-xl lg:text-2xl" />}
                                />
                                <SocialIcon
                                    href="https://wa.me/8801875027270" // WhatsApp link format with country code
                                    icon={<FaWhatsapp className="text-xl lg:text-2xl" />}
                                />
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>

            {/* YouTube Modal */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50   bg-opacity-70 flex items-center justify-center px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative bg-black rounded-lg overflow-hidden w-full max-w-3xl aspect-video shadow-xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-white bg-teal-500 hover:bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

// Social Icon Component
const SocialIcon = ({ href, icon }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-teal-400 transition-all text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        {icon}
    </motion.a>
);

export default Hero;

// Add this to your global CSS
/*
@keyframes pulse {
    0% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.05); opacity: 0.3; }
    100% { transform: scale(1); opacity: 0.2; }
}
*/