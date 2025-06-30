import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiSmartphone, FiServer } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { div } from 'framer-motion/client';
import Footertwo from './Footertwo';

const Services = () => {
    const services = [
        {
            title: "Frontend Development",
            icon: <FiLayers className="text-4xl text-teal-400" />,
            items: [
                "React.js Applications",
                "Responsive UI Design",
                "Performance Optimization",
                "RESTful API Integration",
            ]
        },
        {
            title: "Backend Development",
            icon: <FiServer className="text-4xl text-teal-400" />,
            items: [
                "Node.js REST APIs",
                "Express.js Frameworks",
                "Authentication Systems",
                "API Integration",
            ]
        },
        {
            title: "Full Stack Apps",
            icon: <FiCode className="text-4xl text-teal-400" />,
            items: [
                "MERN Stack Applications",
                "JWT Authentication",
                "Real-time Features",
                "End-to-End Testing",
            ]
        },
        {
            title: "Mobile Responsive",
            icon: <FiSmartphone className="text-4xl text-teal-400" />,
            items: [
                "Mobile-First Design",
                "Cross-Browser Support",
                "Touch Optimization",
                "Performance Metrics"
            ]
        },
        {
            title: "Database Solutions",
            icon: <FiDatabase className="text-4xl text-teal-400" />,
            items: [
                "MongoDB Architecture",
                "CRUD Operations",
            ]
        },
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

    return (
        <div>
            <section id="services" className="relative py-20 bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <span className="text-teal-400 font-medium tracking-wider">My Services</span>
                        <h2 className="text-4xl font-bold text-white mt-2">Comprehensive MERN Stack Solutions</h2>
                    </motion.div>

                    {/* Services Slider */}
                    <div className="relative">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                            pagination={{
                                clickable: true,
                                el: '.services-pagination',
                                bulletClass: 'services-bullet',
                                bulletActiveClass: 'services-bullet-active'
                            }}
                            className="pb-12"
                        >
                            {services.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        variants={cardAnimation}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-[#112240] h-72   p-8 rounded-xl border-2 border-[#1e3a8a]/30 hover:border-teal-400/30 transition-all duration-300 group"
                                    >
                                        <div className="relative overflow-hidden h-full ">
                                            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 transition-all duration-500"></div>
                                            <div className="icon mb-6 relative z-10">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                            <ul className="space-y-2">
                                                {service.items.map((item, i) => (
                                                    <motion.li
                                                        key={i}
                                                        className="flex items-start"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.2 + (i * 0.05) }}
                                                    >
                                                        <span className="text-teal-400 mr-2">•</span>
                                                        <span>{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 transition-all duration-500"></div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="services-pagination flex justify-center gap-2 mt-6" />
                    </div>
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
            </section>
            <Footertwo></Footertwo>
        </div>

    );
};

export default Services;

