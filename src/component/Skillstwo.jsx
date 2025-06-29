import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import html from '../assets/projecti_amge/html.png';
import css from '../assets/projecti_amge/css.png';
import JavaScript from '../assets/projecti_amge/javascript.png';
import Reactimg from '../assets/projecti_amge/react.png';
import MongoDB from '../assets/projecti_amge/mongo-db.png';
import Firebase from '../assets/projecti_amge/firebase.png';
import Tailwind from '../assets/projecti_amge/tailwind-css.png';
import Express from '../assets/projecti_amge/Adobe Express - file.png';
import Git from '../assets/projecti_amge/github.png';
import Node from '../assets/projecti_amge/node.jpg';
 


const Skillstwo = () => {
    const skills = [
        { name: 'HTML5', percentage: 95, icon: html, color: '#E44D26' },
        { name: 'CSS3', percentage: 90, icon: css, color: '#264DE4' },
        { name: 'JavaScript', percentage: 92, icon: JavaScript, color: '#F7DF1E' },
        { name: 'React', percentage: 90, icon: Reactimg, color: '#61DAFB' },
        { name: 'Node.js', percentage: 65, icon: Node, color: '#68A063' },
        { name: 'MongoDB', percentage: 80, icon: MongoDB, color: '#4DB33D' },
        { name: 'Firebase', percentage: 75, icon: Firebase, color: '#FFCA28' },
        { name: 'Tailwind CSS', percentage: 88, icon: Tailwind, color: '#38B2AC' },
        // { name: 'Next.js', percentage: 82, icon: '/icons/nextjs.svg', color: '#000000' },
        { name: 'Express', percentage: 78, icon: Express, color: '#000000' },

        { name: 'Git', percentage: 83, icon: Git, color: '#F05032' },
    ];

    return (

        <div>
            <section id='skills' className="bg-gradient-to-br   from-[#0a192f] to-[#0d2b50] text-gray-300 py-20 px-4">
                <div className="container mx-auto">
                    <Fade direction="down" triggerOnce>
                        <h2 className="text-4xl font-bold text-center mb-4 text-white">Technical Skills</h2>
                        <p className="text-center max-w-2xl mx-auto mb-12">
                            Here's a showcase of my technical expertise with proficiency levels
                        </p>
                    </Fade>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
                        {skills.map((skill, index) => (
                            <Slide
                                key={skill.name}
                                direction={index % 2 === 0 ? 'up' : 'down'}
                                triggerOnce
                                delay={index * 50}
                            >
                                <div className="relative group transform hover:scale-105 transition-transform duration-300">
                                    <div className="bg-[#112240] p-6 rounded-2xl shadow-xl h-full flex flex-col items-center relative overflow-hidden">
                                        {/* Skill Icon + Animated Circle */}
                                        <div className="relative w-24 h-24 mb-4">
                                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-14 h-14 object-contain  "
                                                    loading="lazy"
                                                />
                                            </div>
                                            <svg className="w-full h-full rotate-[-90deg] absolute z-0" viewBox="0 0 36 36">
                                                <circle
                                                    cx="18" cy="18" r="15.9155"
                                                    fill="none"
                                                    stroke="#1e3a8a"
                                                    strokeWidth="3"
                                                />
                                                <circle
                                                    cx="18" cy="18" r="15.9155"
                                                    fill="none"
                                                    stroke={skill.color}
                                                    strokeWidth="3"
                                                    strokeDasharray="100"
                                                    strokeDashoffset={`${100 - skill.percentage}`}
                                                    className="animate-ring"
                                                />
                                            </svg>

                                        </div>
                                        <div className='flex justify-between items-center gap-3'>

                                            <h3 className="text-lg font-semibold  text-center">{skill.name}</h3>

                                            <div>
                                                <span className="text-sm font-bold" style={{ color: skill.color }}>
                                                    {skill.percentage}%
                                                </span>
                                            </div>

                                        </div>

                                        {/* Progress bar for small screens */}
                                        <div className="w-full bg-[#1e3a8a] rounded-full h-2 mt-3 md:hidden">
                                            <div
                                                className="h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        ))}
                    </div>


                </div>

                {/* Add keyframe animation for stroke dashoffset */}
                <style jsx>{`
        .animate-ring {
          animation: progressAnimation 3s ease-in-out   alternate;
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes progressAnimation {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
            </section>

           
        </div>

    );
};

export default React.memo(Skillstwo);
