import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FiGithub, FiExternalLink, FiInfo } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiCloudinary, SiFirebase, SiGooglemaps, SiI18Next, SiNextdotjs, SiStripe, SiVercel } from "react-icons/si";
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
import medisnap1 from '../assets/projecti_amge/medisnap1.png';
import medisnap2 from '../assets/projecti_amge/medisnap2.png';
import medisnap3 from '../assets/projecti_amge/medisnap3.png';
import medisnap14 from '../assets/projecti_amge/medisnap14.png';
import medisnap16 from '../assets/projecti_amge/medisnap16.png';
import medisnap17 from '../assets/projecti_amge/medisnap17.png';
import medisnap110 from '../assets/projecti_amge/medisnap110.png';
import medisnap111 from '../assets/projecti_amge/medisnap111.png';

import m1 from '../assets/projecti_amge/m1.PNG';
import m2 from '../assets/projecti_amge/m2.PNG';
import m3 from '../assets/projecti_amge/m3.PNG';
import m4 from '../assets/projecti_amge/m4.PNG';
import m5 from '../assets/projecti_amge/m5.PNG';
import m7 from '../assets/projecti_amge/m7.PNG';
import m8 from '../assets/projecti_amge/m8.PNG';
import m9 from '../assets/projecti_amge/m9.PNG';

import f1 from '../assets/projecti_amge/f1.PNG';
import f2 from '../assets/projecti_amge/f2.PNG';
import f3 from '../assets/projecti_amge/f3.PNG';
import f4 from '../assets/projecti_amge/f4.PNG';
import f5 from '../assets/projecti_amge/f5.PNG';
import f6 from '../assets/projecti_amge/f6.PNG';
import f7 from '../assets/projecti_amge/f7.PNG';
import f9 from '../assets/projecti_amge/f9.PNG';
import f10 from '../assets/projecti_amge/f10.PNG';
 

const Projectstwo = () => {
    // Track active image index for each project separately
    const [activeImageIndices, setActiveImageIndices] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

    // Sample project data
    const projects = [


        {
            title: "Melodic Mutants - Music Learning Platform",
            description: "A comprehensive full-stack music education platform built with Next.js that connects students, instructors, and admins for interactive online learning, secure payments, and real-time progress tracking.",
            features: [
                "Full-Stack Course Management with multimedia lessons and progress tracking",
                "Secure authentication with NextAuth.js (Email & OAuth providers)",
                "Stripe integration for course payments and private lesson bookings",
                "Role-based dashboards for Students, Instructors, and Admins",
                "Automatic certificate generation upon course completion",
                "Interactive music tools including Chord Finder, Scale Explorer, and Metronome",
                "Admin panel for user management, analytics, and content moderation"
            ],
            technologies: [
                { icon: <SiNextdotjs className="text-gray-200" />, name: "Next.js" },
                { icon: <FaReact className="text-blue-400" />, name: "React" },
                { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
                { icon: <SiStripe className="text-purple-500" />, name: "Stripe" },
                { icon: <SiCloudinary className="text-blue-300" />, name: "Cloudinary" },
                { icon: <SiI18Next className="text-orange-400" />, name: "NextAuth.js" },
                { icon: <SiVercel className="text-white" />, name: "Vercel" },

            ],
            images: [m1, m2, m3, m4, m5, m7, m8, m9],
            liveLink: "https://melodic-mutants-bd.vercel.app/",
            githubLink: "https://github.com/mahin67580/MELODIC_MUTANTS_BD"
        },
        {
            title: "FoodieFrog - Food Delivery Platform",
            description: "A modern full-stack food delivery platform built with Next.js 15 featuring multi-vendor support, secure payments, and comprehensive restaurant management systems for customers and business owners.",
            features: [
                "Multi-role platform for Customers, Restaurants, and Admins",
                "Secure authentication with NextAuth.js (Email & OAuth providers)",
                "Stripe integration for secure payment processing and order management",
                "Smart shopping cart with real-time calculations and item management",
                "Restaurant dashboard for menu management and order processing",
                "Advanced filtering and search for restaurant and food discovery",
                "Order history tracking and user profile management",
                "Responsive design with modern UI/UX and dark mode support"
            ],
            technologies: [
                { icon: <SiNextdotjs className="text-gray-200" />, name: "Next.js 15" },
                { icon: <FaReact className="text-blue-400" />, name: "React 19" },
                { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
                { icon: <SiStripe className="text-purple-500" />, name: "Stripe" },
                { icon: <SiCloudinary className="text-blue-300" />, name: "Cloudinary" },
                { icon: <SiI18Next className="text-orange-400" />, name: "NextAuth.js" },
                { icon: <SiGooglemaps className="text-red-500" />, name: "Google Maps API" }
            ],
            images: [f1,f2,f3,f4,f5,f6,f7,f9,f10],
            liveLink: "https://foodie-frog.vercel.app/",
            githubLink: "https://github.com/mahin67580/FoodieFrog"
        },

        {
            title: "Medical Camp Management System",
            description: "A full-stack web app for managing medical camps, enabling organizers to create camps, handle registrations, process payments, and track analytics.",
            features: [
                "Authentication with Firebase (Email/Google Sign-In)",
                "Create, Browse, Update, and Delete Medical Camps",
                "Camp Registration and Management with secure Stripe payments",
                "Interactive Dashboard with analytics and charts for admins and organizers",
                "Role-based access control (Admin, Organizer, Participant)",
                "Advanced filtering and search by location, specialty, and date",

            ],
            technologies: [
                { icon: <FaReact className="text-blue-400" />, name: "React" },
                { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
                { icon: <SiExpress className="text-gray-400" />, name: "Express" },
                { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
                { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
                { icon: <SiStripe className="text-purple-500" />, name: "Stripe" },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" }
            ],
            images: [medisnap1, medisnap2, medisnap3, medisnap14, medisnap16, medisnap17, medisnap110, medisnap111],
            liveLink: "https://medical-camp-auth.web.app/",
            githubLink: "https://github.com/mahin67580/medical-camp-management"
        },

        {
            title: "Roommate Finder Website",
            description: "A full-stack web application to help users find compatible roommates based on location, budget, lifestyle, and interests. Includes dashboard analytics, advanced search, and protected user features.",
            features: [
                "Authentication with Firebase (Email/Google Sign-In)",
                "Add, Browse, Update, and Delete Roommate Listings",
                "Interactive Dashboard with analytics and charts",
                "Advanced filtering and search by price, location, and status",
                "Like functionality with contact reveal and self-like prevention",
                "Responsive design with Dark/Light mode toggle"
            ],
            technologies: [
                { icon: <FaReact className="text-blue-400" />, name: "React" },
                { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
                { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
                { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
                { icon: <SiExpress className="text-gray-400" />, name: "Express" },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" }
            ],
            images: [project1, project2, project3, project4, project5, project6, project7, project8],
            liveLink: "https://roommate-app-a4ed0.web.app/",
            githubLink: "https://github.com/mahin67580/roommate-finder-app-frontend"
        },

        {
            title: "WhereIsIt - Lost & Found Web App",
            description: "A full-stack platform that connects users who have lost items with those who’ve found them. Features secure authentication, item recovery workflows, and dynamic UI components.",
            features: [
                "Email/Google authentication with Firebase & JWT protection",
                "Add, Update, Delete Lost/Found posts",
                "Post recovery workflow with modal form and recovery status",
                "Search functionality by title/location",
                "Layout toggle (table/card) on recovered items page",
                "Responsive design with Framer Motion animations and spinners"
            ],
            technologies: [
                { icon: <FaReact className="text-blue-400" />, name: "React" },
                { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
                { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
                { icon: <SiExpress className="text-gray-400" />, name: "Express" },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
                { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" }
            ],
            images: [project12, project13, project14, project15],
            liveLink: "https://lost-and-found-da620.web.app/",
            githubLink: "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-mahin67580"
        },



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
        <div className=' '>
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

                                    {/* <div className="overflow-hidden rounded-xl shadow-2xl border-2 border-[#1e3a8a]/30">
                                        <img
                                            src={project.images[activeImageIndices[index] || 0]}
                                            alt={project.title}
                                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div> */}
                                    <div className="overflow-hidden rounded-xl shadow-2xl  
                                     lg:w-[900px] lg:h-[570px] laptop-large relative  ">
                                        <div
                                            className="flex transition-transform duration-700 ease-in-out h-full"
                                            style={{
                                                transform: `translateX(-${(activeImageIndices[index] || 0) * 100}%)`,

                                            }}
                                        >
                                            {project.images.map((img, i) => (
                                                <img
                                                    key={i}
                                                    src={img}
                                                    alt={`${project.title} ${i}`}
                                                    className="min-w-full h-full object-contain flex-shrink-0"
                                                />
                                            ))}
                                        </div>
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