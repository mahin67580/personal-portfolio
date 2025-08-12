import React from "react";
import { motion } from "framer-motion";
import Footertwo from '../component/Footertwo';
import { div } from "framer-motion/client";
const BlogOne = () => {
    return (
        <div>
            <section
                id="blog-one"
                className="bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 py-16 px-6 md:px-12 lg:px-20"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            My DIY Virtual Drum Kit Journey
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed text-lg md:text-xl">
                            Building a Virtual Drum Kit using Arduino was a challenging yet
                            rewarding adventure. Here’s a detailed overview of the process,
                            materials, and software involved.
                        </p>
                    </motion.div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {/* Step Card */}
                        <motion.article
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#112240] rounded-lg p-6 shadow-lg flex flex-col"
                        >
                            <h3 className="text-teal-400 font-semibold text-xl mb-3">
                                1. Materials & Components
                            </h3>
                            <p className="text-gray-400 flex-grow">
                                Used Piezo sensors, 10k resistors, and Arduino Uno as the brain,
                                alongside PVC pipes for the drum frame and drum pads
                                constructed with duct tape and bucket heads.
                            </p>
                        </motion.article>

                        <motion.article
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#112240] rounded-lg p-6 shadow-lg flex flex-col"
                        >
                            <h3 className="text-teal-400 font-semibold text-xl mb-3">
                                2. Designing the Drum Structure
                            </h3>
                            <p className="text-gray-400 flex-grow">
                                Constructed a sturdy yet lightweight frame using PVC pipes.
                                Designed cylindrical drum pads and cymbals with sensors to detect
                                vibration, allowing for realistic drum response.
                            </p>
                        </motion.article>

                        <motion.article
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#112240] rounded-lg p-6 shadow-lg flex flex-col"
                        >
                            <h3 className="text-teal-400 font-semibold text-xl mb-3">
                                3. Circuit & Software Setup
                            </h3>
                            <p className="text-gray-400 flex-grow">
                                Connected piezo sensors to Arduino analog pins with resistors for
                                signal stability. Programmed the Arduino to detect drum hits and
                                send MIDI signals to DAW software, integrated via loopMIDI and
                                Hairless MIDI.
                            </p>
                        </motion.article>

                        <motion.article
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#112240] rounded-lg p-6 shadow-lg flex flex-col"
                        >
                            <h3 className="text-teal-400 font-semibold text-xl mb-3">
                                4. MIDI Mapping & DAW Integration
                            </h3>
                            <p className="text-gray-400 flex-grow">
                                Mapped MIDI notes from Arduino to trigger drum sounds in FL Studio
                                using EZDrummer. Configured loopMIDI virtual ports and fine-tuned
                                velocities for accurate sound dynamics.
                            </p>
                        </motion.article>

                        <motion.article
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#112240] rounded-lg p-6 shadow-lg flex flex-col"
                        >
                            <h3 className="text-teal-400 font-semibold text-xl mb-3">
                                5. Final Testing & Usage
                            </h3>
                            <p className="text-gray-400 flex-grow">
                                Thorough testing ensured responsive drum triggers. The final
                                prototype allowed me to joyfully play the kit anywhere—
                                demonstrating the power of DIY and technical craftsmanship.
                            </p>
                        </motion.article>

                        <motion.article
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#112240] rounded-lg p-6 shadow-lg flex flex-col"
                        >
                            <h3 className="text-teal-400 font-semibold text-xl mb-3">
                                Learn More
                            </h3>
                            <p className="text-gray-400 mb-4 flex-grow">
                                You can check out the step-by-step guide and detailed circuit
                                design I documented on Instructables — linking code, diagrams, and
                                resources.
                            </p>
                            <a
                                href="https://www.instructables.com/Virtual-Drum-Kit-Using-Arduino-Uno/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-auto text-teal-400 hover:text-teal-600 font-semibold transition"
                            >
                                Visit the Full Guide &rarr;
                            </a>
                        </motion.article>
                    </div>
                </div>
            </section>
            <Footertwo></Footertwo>
        </div>
    );
};

export default BlogOne;
