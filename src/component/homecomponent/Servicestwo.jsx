import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FiCode, FiLayers, FiDatabase, FiSmartphone, FiServer } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
 

const Servicestwo = () => {
    const services = [
        {
            title: "Frontend Development",
            icon: <FiLayers className="text-4xl text-teal-400" />,
            items: [
                "React.js Applications",
                // "Next.js SSR Solutions",
                "Responsive UI Design",
                "Performance Optimization",
                // "State Management"
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
                // "Server Optimization"
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
                // "CI/CD Pipeline Setup"
            ]
        },
        {
            title: "Mobile Responsive",
            icon: <FiSmartphone className="text-4xl text-teal-400" />,
            items: [
                // "PWA Development",
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
                // "Data Modeling",
                "CRUD Operations",
                // "Database Security",
                // "Performance Tuning"
            ]
        },
    ];

    return (
        <div>
            <section id='#section' className="relative py-20 bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 overflow-hidden">
                <div className="container  mx-auto px-4">
                    <Fade direction="down" triggerOnce>
                        <div className="text-center mb-16">
                            <span className="text-teal-400 font-medium tracking-wider">My Services</span>
                            <h2 className="text-4xl font-bold text-white mt-2">Comprehensive MERN Stack Solutions</h2>
                        </div>
                    </Fade>

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
                            pagination={{ clickable: true }}
                            className="pb-12"
                        >
                            {services.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <Slide direction={index % 2 === 0 ? 'left' : 'right'} triggerOnce delay={index * 100}>
                                        <div className="bg-[#112240] h-72 p-8 rounded-xl   border border-[#1e3a8a]/30 hover:border-teal-400/30 transition-all duration-300 group">
                                            <div className="relative overflow-hidden">
                                                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 transition-all duration-500"></div>
                                                <div className="icon mb-6 relative z-10">
                                                    {service.icon}
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                                <ul className="space-y-2">
                                                    {service.items.map((item, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="text-teal-400 mr-2">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 transition-all duration-500"></div>
                                            </div>
                                        </div>
                                    </Slide>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-0 w-32 h-32 rounded-full bg-teal-400/10 blur-3xl"></div>
                <div className="absolute bottom-10 right-0 w-40 h-40 rounded-full bg-teal-400/10 blur-3xl"></div>

            </section>

        </div>

    );
};

export default Servicestwo;