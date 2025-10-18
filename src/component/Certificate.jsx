import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import cer1 from '../assets/projecti_amge/phcer.PNG';
import cer2 from '../assets/projecti_amge/black.png';
import cer3 from '../assets/projecti_amge/internship certificate.jpg';
import cer4 from '../assets/projecti_amge/certificate robot2.jpg';
import cer5 from '../assets/projecti_amge/certificate robot3.jpg';

const Certificate = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const certificates = [
        {
            title: "Complete Web Development Course",
            issuer: "Programming Hero",
            date: "2023",
            skills: ["JavaScript", "HTML", "CSS", "React", "Web Development", "Frontend", "Backend"],
            image: cer1,
            credentialUrl: "#",
            // Modal specific data
            modalData: {
                fullTitle: "Complete Web Development Course with Excellence",
                recipient: "MD Afjal Hossain",
                description: "Successfully completed the Complete Web Development Course with a rigorous amount of JavaScript, HTML, CSS, React and applied these skills to build several projects. Recognized as hard working, dedicated and quick learner who finished assigned tasks on time.",
                batch: "Batch 11 - WEB11-3032",
                issuerDetails: "Jhankar Mahbub - CEO, Programming Hero",
                skillsDetails: [
                    "Advanced JavaScript programming",
                    "Responsive HTML/CSS development",
                    "React.js framework mastery",
                    "Full-stack web application development",
                    "Project deployment and management"
                ],
                validity: "Permanent",
                achievement: "Certificate of Completion with Excellence"
            }
        },
        {
            title: "Web Developer BlackBelt",
            issuer: "Programming Hero",
            date: "2023",
            skills: ["Web Development", "JavaScript", "React", "Node.js", "MongoDB", "Full Stack"],
            image: cer2,
            credentialUrl: "#",
            modalData: {
                fullTitle: "Web Developer BlackBelt - Job Placement",
                recipient: "MD AFJAL HOSSAIN",
                description: "Awarded BlackBelt status in recognition of outstanding performance in the Complete Web Development Course, Batch 11. This certification represents expert-level proficiency in full-stack web development.",
                batch: "Batch 11",
                issuerDetails: "Programming Hero Job Placement",
                skillsDetails: [
                    "JavaScript ES6+ (Expert Level)",
                    "React.js & Advanced Concepts",
                    "Node.js & Express.js",
                    "MongoDB Database Management",
                    "RESTful API Development",
                    "Production Deployment"
                ],
                validity: "Valid till 31 Dec 2025",
                achievement: "BlackBelt Web Developer Certification",
                portfolio: "https://my-portfolio-web-b349f.web.app/",
                contact: "afjalhossainmahind@gmail.com"
            }
        },
        {
            title: "Industrial Attachment - Full Stack",
            issuer: "IPIT Institute",
            date: "2023",
            skills: ["Full Stack Development", "Industrial Training", "Web Applications", "Professional Development"],
            image: cer3,
            credentialUrl: "#",
            modalData: {
                fullTitle: "Industrial Attachment Certificate - Full Stack Web Development",
                recipient: "Md Afjal Hossain Mahin",
                description: "Successfully completed 3 months of Industrial Attachment focused on Full Stack Web Development. This intensive training program provided hands-on experience in real-world web development projects and professional work environment.",
                duration: "3 Months Industrial Attachment",
                focusArea: "Full Stack Web Development",
                issuerDetails: "IPIT Institute - www.ipitinstitute.com",
                mentors: [
                    "MD. Samsuuddin TOHA - Full Stack Web Developer",
                    "Ikbal Ahmed - Founder & CEO"
                ],
                skillsDetails: [
                    "Industry-standard development practices",
                    "Client project management",
                    "Team collaboration and version control",
                    "Production-ready application development",
                    "Professional workflow and deployment"
                ],
                achievement: "Industrial Attachment Completion"
            }
        },
        {
            title: "Robo Soccer Competition - 1st Runner Up",
            issuer: "BAIUST Robotics Society",
            date: "2022",
            skills: ["Robotics", "Competition", "Problem Solving", "Teamwork", "Engineering"],
            image: cer4,
            credentialUrl: "#",
            modalData: {
                fullTitle: "BAIUST Intra University Robo Soccer Competition - 1st Runner Up",
                recipient: "MD AFJAL HOSSAIN",
                description: "Achieved 1st Runner Up position in the BAIUST Intra University Robo Soccer Competition organized by BAIUST Robotics Society. Demonstrated exceptional skills in robotics programming, mechanical design, and competitive strategy.",
                event: "BAIUST Intra University Robo Soccer Competition",
                position: "1st Runner Up",
                duration: "22nd November to 23rd November, 2022",
                organizers: "BAIUST Robotics Society",
                issuerDetails: "Bangladesh Army International University of Science & Technology",
                authorities: [
                    "MD. IMRAN KHAN - Advisor & Assistant Professor, EEE Department",
                    "MD. KAMRUZZAMAN - Associate Professor & Head, EEE Department"
                ],
                skillsDetails: [
                    "Robotics system design and implementation",
                    "Competitive robotics strategy",
                    "Team coordination and leadership",
                    "Problem-solving under pressure",
                    "Technical innovation in robotics"
                ],
                achievement: "Intra-University Competition Achievement"
            }
        },
        {
            title: "CSE Fest Achievement",
            issuer: "BAIUST Computer Club",
            date: "2022",
            skills: ["Programming", "Technical Events", "University Competition", "Computer Science"],
            image: cer5,
            credentialUrl: "#",
            modalData: {
                fullTitle: "CSE Fest Certificate of Achievement",
                recipient: "Afjal Hossain Mahin",
                description: "Recognized for outstanding participation and achievement in the Intra-BAIUST CSE Fest 2022 organized by BAIUST Computer Club. Demonstrated excellence in computer science and programming competitions.",
                event: "Intra-BAIUST CSE Fest 2022",
                organizers: "BAIUST Computer Club",
                issuerDetails: "Bangladesh Army International University of Science & Technology",
                authorities: [
                    "Md. Fardin Mazumdar - President, 6th Executive Panel, Computer Club",
                    "Md. Asaduzzaman Khan - Associate Professor & Head, CSE Department",
                    "Mohammad Asaduzzaman Khan - Club Advisor & Associate Professor, CSE Department"
                ],
                skillsDetails: [
                    "Competitive programming",
                    "Technical event participation",
                    "Computer science fundamentals",
                    "University-level competition",
                    "Academic excellence demonstration"
                ],
                achievement: "CSE Fest Certificate of Achievement"
            }
        }
    ];

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardAnimation = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const modalAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    const overlayAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    };

    const openModal = (certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Re-enable scrolling
    };

    return (
        <>
            <section id="certificates" className="relative py-20 bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 overflow-hidden">
                <div className="mx-auto lg:px-9">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <span className="text-teal-400 font-medium tracking-wider">My Certifications</span>
                        <h2 className="text-4xl font-bold text-white mt-2 p-9">Professional Certificates</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Validated skills and expertise through comprehensive courses and certifications in modern web technologies.
                        </p>
                    </motion.div>

                    {/* Certificates Slider */}
                    <div className="relative">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                                1280: { slidesPerView: 2 }
                            }}
                            pagination={{
                                clickable: true,
                                el: '.certificates-pagination',
                                bulletClass: 'certificates-bullet',
                                bulletActiveClass: 'certificates-bullet-active'
                            }}
                            className="pb-16"
                        >
                            {certificates.map((certificate, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        variants={cardAnimation}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-[#112240] h-auto p-6 rounded-xl border-2 border-[#1e3a8a]/30 hover:border-teal-400/30 transition-all duration-300 group hover:transform hover:-translate-y-2"
                                    >
                                        <div className="relative overflow-hidden h-full flex flex-col">
                                            {/* Certificate Image - Larger Size */}
                                            <div className="relative mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-teal-400/20 to-blue-400/20 p-2 group/image">
                                                <div className="w-full lg:h-[600px] bg-gray-800 rounded-lg overflow-hidden">
                                                    <img
                                                        src={certificate.image}
                                                        alt={certificate.title}
                                                        className="w-full h-full object-cover bg-white"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    {/* Fallback if image fails to load */}
                                                    <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-teal-400/10 to-blue-400/10">
                                                        <div className="text-center">
                                                            <div className="text-4xl mb-2">🏆</div>
                                                            <span className="text-teal-400 text-sm font-medium">Certificate Preview</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Hover overlay with view icon */}
                                                <div
                                                    className="absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100 cursor-pointer"
                                                    onClick={() => openModal(certificate)}
                                                >
                                                    <div className="bg-teal-400/90 text-[#0a192f] p-3 rounded-full transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Certificate Content */}
                                            <div className="flex-1 flex flex-col">
                                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-teal-400 transition-colors">
                                                    {certificate.title}
                                                </h3>

                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-teal-400 text-sm font-medium bg-teal-400/10 px-3 py-1 rounded-full">
                                                        {certificate.issuer}
                                                    </span>
                                                    <span className="text-gray-400 text-sm bg-[#0a192f] px-3 py-1 rounded-full">
                                                        {certificate.date}
                                                    </span>
                                                </div>

                                                {/* Skills Tags */}
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {certificate.skills.map((skill, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 bg-teal-400/10 text-teal-400 text-sm rounded-md border border-teal-400/20 hover:bg-teal-400/20 transition-colors"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>

                                       
                                            </div>

                                            {/* Decorative Elements */}
                                            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 transition-all duration-500"></div>
                                            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 transition-all duration-500"></div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Pagination */}
                        <div className="certificates-pagination flex justify-center gap-3 mt-8" />
                    </div>

                    {/* View All Button */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mt-16"
                    >
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-teal-400 hover:bg-teal-500 text-[#0a192f] font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-400/25 text-lg"
                        >
                            <span>View All Certificates</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                    className="absolute top-20 left-0 w-32 h-32 rounded-full bg-teal-400/10 blur-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    className="absolute bottom-10 right-0 w-40 h-40 rounded-full bg-teal-400/10 blur-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                />

                {/* Custom CSS for pagination */}
                <style jsx>{`
                    .certificates-bullet {
                        width: 14px;
                        height: 14px;
                        background: #1e3a8a;
                        border-radius: 50%;
                        opacity: 0.5;
                        transition: all 0.3s ease;
                        cursor: pointer;
                        margin: 0 6px;
                    }
                    .certificates-bullet-active {
                        background: #2dd4bf;
                        opacity: 1;
                        transform: scale(1.3);
                    }
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                `}</style>
            </section>

            {/* Certificate Modal */}
            <AnimatePresence>
                {isModalOpen && selectedCertificate && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div className="bg-[#112240] rounded-2xl border-2 border-teal-400/30 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-teal-400/20 flex-shrink-0">
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-2xl font-bold text-white">{selectedCertificate.modalData.fullTitle}</h3>
                                    <p className="text-teal-400 mt-1">
                                        {selectedCertificate.issuer} • {selectedCertificate.date}
                                    </p>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Awarded to: <span className="text-teal-300">{selectedCertificate.modalData.recipient}</span>
                                    </p>
                                </div>
                            </div>

                            {/* Modal Content - Scrollable Area */}
                            <div className="flex-1 overflow-y-auto p-6">
                                {/* Certificate Image */}
                                <div className="bg-white rounded-lg overflow-hidden border-2 border-teal-400/20 mb-6">
                                    <img
                                        src={selectedCertificate.image}
                                        alt={selectedCertificate.title}
                                        className="w-full h-auto max-h-[50vh] object-contain"
                                    />
                                </div>

                                {/* Description */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-teal-400 mb-2">Description</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {selectedCertificate.modalData.description}
                                    </p>
                                </div>

                                {/* Skills Details */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-teal-400 mb-3">Skills & Competencies</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {selectedCertificate.modalData.skillsDetails.map((skill, i) => (
                                            <li key={i} className="flex items-center text-gray-300 text-sm">
                                                <svg className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Additional Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedCertificate.modalData.validity && (
                                        <div className="bg-[#0a192f] p-4 rounded-lg border border-teal-400/10">
                                            <h5 className="text-teal-400 font-semibold mb-1">Validity</h5>
                                            <p className="text-gray-300 text-sm">{selectedCertificate.modalData.validity}</p>
                                        </div>
                                    )}

                                    {selectedCertificate.modalData.batch && (
                                        <div className="bg-[#0a192f] p-4 rounded-lg border border-teal-400/10">
                                            <h5 className="text-teal-400 font-semibold mb-1">Batch/Program</h5>
                                            <p className="text-gray-300 text-sm">{selectedCertificate.modalData.batch}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="flex justify-between items-center p-6 border-t border-teal-400/20 flex-shrink-0">
                                <motion.a
                                    href={selectedCertificate.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-teal-400 hover:bg-teal-500 text-[#0a192f] font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
                                >
                                    <span>Verify Certificate</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </motion.a>

                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-white hover:bg-[#0a192f] py-3 px-6 rounded-lg transition-all duration-300 border border-gray-600 hover:border-teal-400/30"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Certificate;