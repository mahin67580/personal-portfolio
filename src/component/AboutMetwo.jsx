import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import devImage from '../assets/projecti_amge/dev.jpg';
import devImage2 from '../assets/projecti_amge/phavatar.jpg';
import { FaFacebook, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
const AboutMetwo = () => {
  useEffect(() => {
    document.title = 'AboutMe';
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeUp = {
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

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Stagger animation for list items
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 py-20 px-4   overflow-hidden">
      <div className="container mx-auto ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-teal-400 text-lg md:text-xl max-w-2xl mx-auto">
            Passionate Developer | Tech Enthusiast | Problem Solver
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Image Section */}
          <motion.div
            className="relative group   max-w-md  "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            variants={fadeLeft}
          >
            <div className="overflow-hidden rounded-xl border-2 border-teal-400/30 shadow-xl  ">
              <picture>
                <source media="(max-width: 1023px)" srcSet={devImage} />
                <source media="(min-width: 1024px)" srcSet={devImage2} />
                <img
                  src={devImage}
                  alt="Developer Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </picture>
              <div className="absolute  
              transform -translate-y-1/2
               flex flex-row  gap-7 lg:gap-5
                bg-white/10 backdrop-blur-sm 
                p-3 lg:p-4 rounded-full z-20">
                <a
                  href="https://www.linkedin.com/in/afjal-hossain-webdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaLinkedinIn className="text-xl lg:text-2xl" />
                </a>

                <a
                  href="https://www.facebook.com/afzalh0ssainmahin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  <FaFacebook className="text-xl lg:text-2xl" />
                </a>

                <a
                  href="https://github.com/mahin67580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FaGithub className="text-xl lg:text-2xl" />
                </a>

                <a
                  href="#contact"
                  className="text-white hover:text-red-400 transition-colors"
                >
                  <FaEnvelope className="text-xl lg:text-2xl" />
                </a>
              </div>


            </div>
            <div className="absolute -inset-4 border-2 border-teal-400/20 rounded-xl z-[-1] group-hover:border-teal-400/40 transition-all duration-300"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className=" space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            variants={fadeRight}
          >
            <h3 className="text-2xl font-bold text-teal-400">MERN Stack Web Developer</h3>

            <p className='text-lg leading-relaxed text-center lg:text-justify '>
              👋 I'm <strong>Afjal Hossain</strong>, a <strong>Computer Science & Engineering graduate</strong> from
              <strong> Bangladesh Army International University of Science and Technology (BAIUST)</strong>. I'm a passionate and confident
              <strong> MERN Stack Developer</strong> with a deep enthusiasm for crafting powerful, responsive web applications.
            </p>

            <motion.div
              className="space-y-4 text-justify"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p className="font-semibold text-teal-400" variants={item}>
                🔍 What sets me apart:
              </motion.p>

              <motion.div className="flex items-start" variants={item}>
                <span className="text-teal-400 mr-2">•</span>
                <span>
                  <strong>Confident Full-Stack Developer</strong> – Proficient in MongoDB, Express.js, React.js, and Node.js.
                </span>
              </motion.div>

              <motion.div className="flex items-start" variants={item}>
                <span className="text-teal-400 mr-2">•</span>
                <span>
                  <strong>Engineering Perspective</strong> – I combine algorithmic thinking with hands-on development, rooted in my strong academic foundation.
                </span>
              </motion.div>

              <motion.div className="flex items-start" variants={item}>
                <span className="text-teal-400 mr-2">•</span>
                <span>
                  <strong>AI Integration:</strong> I'm enthusiastic about AI integration and leveraging AI tools
                  to boost productivity and enhance development workflows.
                </span>
              </motion.div>

              <motion.div className="flex items-start" variants={item}>
                <span className="text-teal-400 mr-2">•</span>
                <span>
                  <strong>UI/UX Focus:</strong> I love creating unique, intuitive user interfaces and bringing
                  them to life through clean, efficient code before deploying to production environments.
                </span>
              </motion.div>

              <motion.div className="flex items-start" variants={item}>
                <span className="text-teal-400 mr-2">•</span>
                <span>
                  <strong>Functionality & Performance:</strong> I prioritize building responsive, functional
                  features with clean logic, while ensuring smooth performance and fast load times across devices.
                </span>
              </motion.div>

              <motion.div className="flex items-start" variants={item}>
                <span className="text-teal-400 mr-2">•</span>
                <span>
                  <strong>Team Player:</strong> Comfortable collaborating in team environments, I'm flexible
                  under pressure and committed to delivering quality work within deadlines.
                </span>
              </motion.div>

              <motion.div className="flex items-start" variants={item}>
                <span className="text-teal-400 mr-2">•</span>
                <span>
                  <strong>Hands-On Learning:</strong> 💻 I completed the MERN Stack Development course from Programming Hero, building 20+ production-ready applications including complex dashboards, e-commerce systems, and real-time collaboration tools.
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-xl text-center lg:text-start font-semibold mb-3 text-white">Technical Approach:</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {["Modern JavaScript", "Responsive Design", "RESTful APIs", "State Management", "Performance Optimization", "AI Tool Integration"].map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 border bg-[#112240] rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[#0a192f] text-white px-6 py-8 rounded-xl shadow-lg border border-teal-500/30 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-teal-400 mb-3 flex items-center justify-center gap-2">
                🎯 My Goal
              </h2>
              <p className="text-gray-300 text-center leading-relaxed">
                Seeking <strong>internships</strong> or <strong>entry-level opportunities</strong> where I can actively contribute,
                solve <strong>real-world challenges</strong>, and grow alongside a motivated and collaborative team.
              </p>
            </motion.div>

            <motion.p
              className="mt-6 border-l-4 border-teal-400 pl-4 italic text-gray-300 bg-white/5 rounded-md shadow-sm p-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              "I don't just write code — I build purposeful, elegant digital experiences with precision, passion, and persistence."
              <br className="hidden md:block" />
              If you're looking for a developer who's technically sound, driven by curiosity, and never afraid of a challenge — I'd love to connect!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMetwo;