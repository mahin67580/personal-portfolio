import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { HiDownload, HiPlay } from 'react-icons/hi';
import { FaFacebook, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import mahin from '../assets/mahin2.jpg'; // Update with your actual image path
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const videoId = 'iWuEpnTTD3k'; // Replace with your actual YouTube video ID

    return (
        <section className="relative bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-white overflow-hidden py-10 md:py-28 lg:py-36">
            {/* Top Shapes */}
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

            {/* Bottom Shapes */}
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

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-center ">
                    {/* Left Content */}
                    <div className="  lg:w-9/12  ">
                        <Fade direction="left" cascade damping={0.1} triggerOnce>
                            <h3 className="text-xl md:text-2xl font-light text-teal-400 mb-2">
                                Hello! I'm
                            </h3>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                                Afjal <span className="text-teal-400">Hossain</span>
                            </h2>

                            {/* <div className="w-full mb-8">
                                <img
                                    src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=26&pause=1000&center=true&vCenter=true&width=800&lines=Hello,There!👋;This is Afjal Hossain;A+Passionate MERN Developer;Nice+to+meet+you!"
                                    alt="Typing SVG"
                                    className="w-full h-auto max-w-2xl mx-auto"
                                />
                            </div> */}
                            <div className="text-2xl md:text-3xl font-mono text-center  md:h-20 mb-8 lg:mb-0 lg:ml-24 w-80 lg:w-96 text-purple-200">
                                <TypeAnimation
                                    sequence={[
                                        'Hello,There!👋 ',
                                        1000,
                                        'This is Afjal Hossain',
                                        1000,
                                        'MERN Stack Developer',
                                        1000,
                                        'Frontend Specialist',
                                        1000,
                                        'React Enthusiast',
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
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                                <a
                                    href="#"
                                    className="flex items-center gap-2 bg-transparent border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 py-3 px-6 rounded-lg font-medium"
                                >
                                    <HiDownload className="text-xl" />
                                    Get Resume
                                </a>

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
                            </div>
                        </Fade>
                    </div>

                    {/* Right Portrait */}
                    <div className="  flex justify-center    relative">
                        <Slide direction="right" triggerOnce>
                            <div className="relative max-w-md">
                                <div className="relative z-10">
                                    <div className="w-64 h-64 lg:w-96 lg:h-96 forBannerImg overflow-hidden rounded-xl border-2 border-teal-400/30 shadow-xl">
                                        <img
                                            src={mahin}
                                            alt="Afjal Hossain"
                                            className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Half-circle decoration */}
                                <div className="absolute -right-6 -bottom-6 w-64 h-64 md:w-80 md:h-80 rounded-full bg-teal-400 opacity-20 z-0"></div>

                                {/* Social Links */}
                                {/* <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 bg-white/10 backdrop-blur-sm p-3 rounded-full z-20    ">
                                    <SocialIcon href="https://www.linkedin.com/in/afjalhossain-linkdin/" icon={<FaLinkedinIn  />} />
                                    <SocialIcon href="https://www.facebook.com/afzalh0ssainmahin/" icon={<FaFacebook />} />

                                    <SocialIcon href="https://github.com/mahin67580" icon={<FaGithub />} />

                                    <a href="#contact" ><SocialIcon icon={<GiArtificialHive />} /></a>
                                    
                                </div> */}

                                <div className="absolute forIcons -left-11 lg:-left-14 top-1/2 transform -translate-y-1/2 flex flex-col gap-3.5 lg:gap-5 bg-white/10 backdrop-blur-sm p-3 lg:p-4 rounded-full z-20">
                                    <SocialIcon
                                        href="https://www.linkedin.com/in/afjalhossain-linkdin/"
                                        icon={<FaLinkedinIn className="text-2xl iconSize  " />}
                                    />
                                    <SocialIcon
                                        href="https://www.facebook.com/afzalh0ssainmahin/"
                                        icon={<FaFacebook className="text-2xl iconSize" />}
                                    />
                                    <SocialIcon
                                        href="https://github.com/mahin67580"
                                        icon={<FaGithub className="text-2xl iconSize" />}
                                    />
                                    <a href="#contact">
                                        <SocialIcon icon={<FaEnvelope className="text-2xl iconSize" />} />
                                    </a>
                                </div>



                            </div>
                        </Slide>
                    </div>
                </div>
            </div>

            {/* YouTube Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50   bg-opacity-70 flex items-center justify-center px-4">
                    <div className="relative bg-black rounded-lg overflow-hidden w-full max-w-3xl aspect-video shadow-xl">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-white bg-teal-500 hover:bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

// Social Icon Component
const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 lg:w-14 lg:h-14 shazam flex items-center justify-center rounded-full bg-white/20 hover:bg-teal-400 transition-all text-white text-lg hover:scale-110"
    >
        {icon}
    </a>
);

export default Hero;
