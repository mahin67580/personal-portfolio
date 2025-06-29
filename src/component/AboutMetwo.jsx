import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import devImage from '../assets/projecti_amge/dev.jpg';

const AboutMetwo = () => {
  useEffect(() => {
    document.title = 'AboutMe';
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div>
      <section id="about" className="bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 py-20 px-4">
        <div className="container mx-auto">

          <motion.h2
            className="text-4xl font-bold text-center mb-4 text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-center max-w-2xl mx-auto mb-12 text-teal-400"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Passionate Developer | Tech Enthusiast | Problem Solver
          </motion.p>

          <div className="flex flex-col p-2 lg:flex-row items-center justify-center mx-auto gap-12">

            {/* Image Section */}
            <motion.div
              className="relative group"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-xl border-2 border-teal-400/30 shadow-xl">
                <img
                  src={devImage}
                  alt="Developer Profile"
                  className="lg:w-[900px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-teal-400/20 rounded-xl z-[-1] group-hover:border-teal-400/40 transition-all duration-300"></div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="text-justify space-y-6"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-teal-400">MERN Stack Web Developer</h3>

              <p className='text-center lg:text-start lg:text-xl leading-relaxed '>
                👋 I'm <strong>Afjal Hossain</strong>, a <strong>Computer Science & Engineering graduate</strong> from
                <strong> Bangladesh Army International University of Science and Technology (BAIUST)</strong>. I'm a passionate and confident
                <strong> MERN Stack Developer</strong> with a deep enthusiasm for crafting powerful, responsive web applications.
              </p>



              <div className="space-y-4">
                <p className="font-semibold text-teal-400">🔍 What sets me apart:</p>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>
                    <strong>Confident Full-Stack Developer</strong> – Proficient in MongoDB, Express.js, React.js, and Node.js.
                  </span>
                </div>

                <div className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>
                    <strong>Engineering Perspective</strong> – I combine algorithmic thinking with hands-on development, rooted in my strong academic foundation.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>
                    <strong>AI Integration:</strong> I'm enthusiastic about AI integration and leveraging AI tools
                    to boost productivity and enhance development workflows.
                  </span>
                </div>




                <div className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>
                    <strong>UI/UX Focus:</strong> I love creating unique, intuitive user interfaces and bringing
                    them to life through clean, efficient code before deploying to production environments.
                  </span>
                </div>

                <div className="flex items-start mt-2">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>
                    <strong>Functionality & Performance:</strong> I prioritize building responsive, functional
                    features with clean logic, while ensuring smooth performance and fast load times across devices.
                  </span>
                </div>

                <div className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>
                    <strong>Team Player:</strong> Comfortable collaborating in team environments, I'm flexible
                    under pressure and committed to delivering quality work within deadlines.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-3 text-white">Technical Approach:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">Modern JavaScript</span>
                  <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">Responsive Design</span>
                  <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">RESTful APIs</span>
                  <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">State Management</span>
                  <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">Performance Optimization</span>
                  <span className="px-3 py-1 bg-[#112240] rounded-full text-sm">AI Tool Integration</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMetwo;
