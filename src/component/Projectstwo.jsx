import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FiGithub, FiExternalLink, FiInfo } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import Modal from './Modal';

// Import your project images
import project1 from '../assets/projecti_amge/Screenshot (3).png';
import project2 from '../assets/projecti_amge/Screenshot (4).png';
import project3 from '../assets/projecti_amge/Screenshot (5).png';
import project4 from '../assets/projecti_amge/Screenshot (6).png';
import project5 from '../assets/projecti_amge/Screenshot (7).png';
import project6 from '../assets/projecti_amge/Screenshot (8).png';
import project7 from '../assets/projecti_amge/Screenshot (9).png';
import project8 from '../assets/projecti_amge/Screenshot (10).png';
import project12 from '../assets/projecti_amge/Screenshot (12).png';
import project13 from '../assets/projecti_amge/Screenshot (13).png';
import project14 from '../assets/projecti_amge/Screenshot (14).png';
import project15 from '../assets/projecti_amge/Screenshot (15).png';
 

const Projectstwo = () => {
    // Track active image index for each project separately
    const [activeImageIndices, setActiveImageIndices] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

    // Sample project data
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online shopping platform with user authentication, product management, and payment processing.",
            features: [
                "User authentication with JWT",
                "Product search and filtering",
                "Shopping cart functionality",
                "Payment gateway integration",
                "Admin dashboard"
            ],
            technologies: [
                { icon: <FaReact className="text-blue-400" />, name: "React" },
                { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
                { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
                { icon: <SiExpress className="text-gray-400" />, name: "Express" },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" }
            ],
            images: [project1, project6, project3, project4, project7, project2, project5, project8],
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application for teams to organize and track their work.",
            features: [
                "Real-time updates with WebSockets",
                "Drag-and-drop task organization",
                "Team collaboration features",
                "Task assignment and deadlines",
                "Progress tracking"
            ],
            technologies: [
                { icon: <FaReact className="text-blue-400" />, name: "React" },
                { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
                { icon: <FaDatabase className="text-blue-600" />, name: "PostgreSQL" },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" }
            ],
            images: [project12, project13, project14, project15],
            liveLink: "#",
            githubLink: "#"
        }
    ];

    // Initialize activeImageIndices if empty
    if (Object.keys(activeImageIndices).length === 0) {
        const initialIndices = {};
        projects.forEach((_, index) => {
            initialIndices[index] = 0;
        });
        setActiveImageIndices(initialIndices);
    }

    const nextSlide = (projectIndex) => {
        setActiveImageIndices(prev => ({
            ...prev,
            [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length
        }));
    };

    const prevSlide = (projectIndex) => {
        setActiveImageIndices(prev => ({
            ...prev,
            [projectIndex]: (prev[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length
        }));
    };

    const openProjectModal = (index) => {
        setActiveProjectIndex(index);
        setIsModalOpen(true);
    };

    return (
        <div>
            <section id='projects' className="bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 py-20 px-4">
                <div className="container mx-auto">
                    <Fade direction="down" triggerOnce>
                        <h2 className="text-4xl font-bold text-center mb-4 text-white">My Projects</h2>
                        <p className="text-center max-w-2xl mx-auto mb-12">
                            Here are some of my recent projects. Each one was built to solve specific problems and showcase different skills.
                        </p>
                    </Fade>

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-8 mb-20 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                        >
                            {/* Left Side - Image Slider */}
                            <Slide direction={index % 2 === 0 ? 'left' : 'right'} triggerOnce>
                                <div className="  relative group">
                                    <div className="overflow-hidden rounded-xl shadow-2xl border-2 border-[#1e3a8a]/30">
                                        <img
                                            src={project.images[activeImageIndices[index] || 0]}
                                            alt={project.title}
                                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* Slider Controls */}
                                    <button
                                        onClick={() => prevSlide(index)}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0a192f]/80 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        &larr;
                                    </button>
                                    <button
                                        onClick={() => nextSlide(index)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0a192f]/80 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        &rarr;
                                    </button>

                                    {/* Slide Indicators */}
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                        {project.images.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${i === (activeImageIndices[index] || 0) ? 'bg-teal-400' : 'bg-gray-500'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </Slide>

                            {/* Right Side - Project Details */}
                            <Slide direction={index % 2 === 0 ? 'right' : 'left'} triggerOnce>
                                <div className=" ">
                                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="mb-6">{project.description}</p>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-teal-400 mb-2">Key Features:</h4>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-teal-400 mr-2">→</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-semibold text-teal-400 mb-2">Technologies Used:</h4>
                                        <div className="flex flex-wrap gap-4">
                                            {project.technologies.map((tech, i) => (
                                                <div key={i} className="flex items-center gap-2 bg-[#112240] px-3 py-2 rounded-lg">
                                                    {tech.icon}
                                                    <span>{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-[#0a192f] font-medium px-6 py-2 rounded-lg transition-colors"
                                        >
                                            <FiExternalLink /> Live Demo
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] font-medium px-6 py-2 rounded-lg transition-colors"
                                        >
                                            <FiGithub /> GitHub
                                        </a>
                                        <button
                                            onClick={() => openProjectModal(index)}
                                            className="flex items-center gap-2 border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white font-medium px-6 py-2 rounded-lg transition-colors"
                                        >
                                            <FiInfo /> Details
                                        </button>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    ))}
                </div>

                {/* Project Details Modal */}
                {isModalOpen && (
                    <Modal onClose={() => setIsModalOpen(false)}>
                        <div className="bg-[#0a192f] p-8 rounded-xl max-w-4xl mx-auto max-h-[90vh] overflow-y-auto relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-300 hover:text-teal-400 transition-colors z-10"
                                aria-label="Close modal"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-4 pr-8">{projects[activeProjectIndex].title}</h3>
                                <p className="mb-6 text-gray-300">{projects[activeProjectIndex].description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold text-teal-400 mb-2">Project Overview</h4>
                                        <p className="mb-4 text-gray-300">
                                            Detailed description of the project, including the problem it solves,
                                            the target audience, and any unique challenges faced during development.
                                        </p>

                                        <h4 className="font-semibold text-teal-400 mb-2">Key Features</h4>
                                        <ul className="space-y-2 mb-6">
                                            {projects[activeProjectIndex].features.map((feature, i) => (
                                                <li key={i} className="flex items-start text-gray-300">
                                                    <span className="text-teal-400 mr-2">→</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-teal-400 mb-2">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-3 mb-6">
                                            {projects[activeProjectIndex].technologies.map((tech, i) => (
                                                <div key={i} className="flex items-center gap-2 bg-[#112240] px-3 py-2 rounded-lg text-gray-300">
                                                    {tech.icon}
                                                    <span>{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <h4 className="font-semibold text-teal-400 mb-2">Project Links</h4>
                                        <div className="flex flex-wrap gap-3">
                                            <a
                                                href={projects[activeProjectIndex].liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-[#0a192f] font-medium px-4 py-2 rounded-lg transition-colors"
                                            >
                                                <FiExternalLink /> Live Demo
                                            </a>
                                            <a
                                                href={projects[activeProjectIndex].githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] font-medium px-4 py-2 rounded-lg transition-colors"
                                            >
                                                <FiGithub /> GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="font-semibold text-teal-400 mb-2">Screenshots</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {projects[activeProjectIndex].images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={`${projects[activeProjectIndex].title} screenshot ${i + 1}`}
                                                className="rounded-lg border border-[#1e3a8a]/30 w-full h-auto"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </section>
      
        </div>

    );
};

export default Projectstwo;