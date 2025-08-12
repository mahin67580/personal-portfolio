import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import daisy from '../assets/projecti_amge/daisyui-logo-2000.png';
import netlify from '../assets/projecti_amge/neli.jpg';
import vite from '../assets/projecti_amge/vite-frontend-tool1721420726.logowik.com.jpg';
import figma from '../assets/projecti_amge/figma.jpg';
import vercel from '../assets/projecti_amge/figma2.png';

const skills = [
  { name: 'HTML5', percentage: 100, icon: html, color: '#E44D26', category: 'frontend' },
  { name: 'CSS3', percentage: 100, icon: css, color: '#264DE4', category: 'frontend' },
  { name: 'JavaScript', percentage: 100, icon: JavaScript, color: '#F7DF1E', category: 'backend' },
  { name: 'React', percentage: 100, icon: Reactimg, color: '#61DAFB', category: 'frontend' },
  { name: 'Node.js', percentage: 100, icon: Node, color: '#68A063', category: 'backend' },
  { name: 'MongoDB', percentage: 100, icon: MongoDB, color: '#4DB33D', category: 'backend' },
  { name: 'Firebase', percentage: 100, icon: Firebase, color: '#FFCA28', category: 'backend' },
  { name: 'Tailwind CSS', percentage: 100, icon: Tailwind, color: '#38B2AC', category: 'frontend' },
  { name: 'Express', percentage: 100, icon: Express, color: '#000000', category: 'backend' },
  { name: 'Git', percentage: 100, icon: Git, color: '#F05032', category: 'devops' },
  { name: 'Daisy', percentage: 100, icon: daisy, color: '#F7DF1E', category: 'frontend' },
  { name: 'Netlify', percentage: 100, icon: netlify, color: '#38B2AC', category: 'devops' },
  { name: 'Vite', percentage: 100, icon: vite, color: '#F7DF1E', category: 'frontend' },
  { name: 'Figma', percentage: 100, icon: figma, color: '#264DE4', category: 'devops' },
  { name: 'Vercel', percentage: 100, icon: vercel, color: '#000000', category: 'devops' },
];

const circleRadius = 15.9155;
const circumference = 2 * Math.PI * circleRadius;

const Skillstwo = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

    

  return (
    <section id="skills" className="bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-bold text-center mb-4 text-white"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          Here's a showcase of my technical expertise with proficiency levels
        </motion.p>

        {/* Category Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full font-bold transition-all ${activeCategory === 'all' ? 'bg-teal-400 text-[#0a192f]' : 'bg-[#112240] hover:bg-[#1e3a8a]'}`}
          >
            All Skills
          </button>
          <button
            onClick={() => setActiveCategory('frontend')}
            className={`px-4 py-2 rounded-full  font-bold transition-all ${activeCategory === 'frontend' ? 'bg-teal-400 text-[#0a192f]' : 'bg-[#112240] hover:bg-[#1e3a8a]'}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveCategory('backend')}
            className={`px-4 py-2 rounded-full  font-bold transition-all ${activeCategory === 'backend' ? 'bg-teal-400 text-[#0a192f]' : 'bg-[#112240] hover:bg-[#1e3a8a]'}`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveCategory('devops')}
            className={`px-4 py-2 rounded-full font-bold transition-all ${activeCategory === 'devops' ? 'bg-teal-400 text-[#0a192f]' : 'bg-[#112240] hover:bg-[#1e3a8a]'}`}
          >
            DevOps/Tools
          </button>
        </motion.div>

        <div className=" flex flex-wrap justify-around items-center  gap-5   ">
          {filteredSkills.map((skill, index) => {
            const strokeDashoffset = circumference - (circumference * skill.percentage) / 100;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group transform hover:scale-105 transition-transform duration-300 w-44 lg:w-56"
              >
                <div className="bg-[#112240] p-6 rounded-2xl shadow-xl h-full flex flex-col items-center relative overflow-hidden">
                  {/* Animated Circle + Icon */}
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-14 h-14 object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* Circular Progress Animation */}
                    <motion.svg
                      className="w-full h-full rotate-[-90deg] absolute z-0"
                      viewBox="0 0 36 36"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0 }}
                      viewport={{ once: true }}
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r={circleRadius}
                        fill="none"
                        stroke="#1e3a8a"
                        strokeWidth="3"
                      />
                      <motion.circle
                        cx="18"
                        cy="18"
                        r={circleRadius}
                        fill="none"
                        stroke={skill.color}
                        strokeWidth="3"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        transition={{ 
                          duration: 1.5, 
                          ease: 'easeInOut',
                          delay: 0.2 + (index * 0.04)
                        }}
                        viewport={{ once: true }}
                      />
                    </motion.svg>
                  </div>

                  {/* Skill Name & Percentage */}
                  <div className="flex justify-center items-center gap-3 w-full px-1">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    
                  </div>

                  {/* Progress Bar for Small Screens */}
                  <div className="w-full bg-[#1e3a8a] rounded-full h-2 mt-3 md:hidden">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skillstwo);