import React, { useRef, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router';
import Footertwo from './Footertwo';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const Contact = () => {
    const phoneNumber = "+8801875027270";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const emailAddress = "afjalhossainmahin0@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/afjal-hossain-webdev/";
    const facebookUrl = "https://www.facebook.com/afzalh0ssainmahin/";

    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            'service_v1mp155', // Replace with your EmailJS service ID
            'template_jwymulh', // Replace with your EmailJS template ID
            form.current,
            'gyR6cEI9loSlBG101' // Replace with your EmailJS user/public key
        )
            .then(() => {
                setLoading(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Great!',
                    text: 'Two emails have been sent',
                    confirmButtonColor: '#0d9488', // teal color for matching theme
                });
                form.current.reset();
            })
            .catch((error) => {
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to send the message, please try again.',
                    confirmButtonColor: '#dc2626', // red color for error
                });
                console.error(error.text);
            });
    };
    return (
        <div>
            <section id="contact" className="bg-gradient-to-br from-[#0a192f] to-[#0d2b50] text-gray-300 py-20 px-4">
                <div className="container mx-auto">
                    <Fade direction="down" triggerOnce>
                        <h2 className="text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
                        <p className="text-center max-w-2xl mx-auto mb-12">
                            Have a project in mind or want to discuss opportunities? Feel free to reach out!
                        </p>
                    </Fade>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Contact Information */}
                        <Slide direction="left" triggerOnce>
                            <div className="space-y-8">
                                {/* Email */}
                                <a href={`mailto:${emailAddress}`} className="text-gray-400 hover:text-teal-400 transition-colors" >
                                    <div className="flex items-start gap-4 p-4 w-80">
                                        <div className="p-3 bg-[#112240] rounded-lg text-teal-400">
                                            <FiMail className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">Email Me</h3>
                                            {emailAddress}
                                        </div>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition-colors">
                                    <div className="flex items-start gap-4 p-4 w-80">
                                        <div className="p-3 bg-[#112240] rounded-lg text-teal-400">
                                            <FaWhatsapp className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                                            {phoneNumber}
                                        </div>
                                    </div>
                                </a>

                                {/* Call */}
                                <a href={`tel:${phoneNumber}`}
                                    className="text-gray-400 hover:text-teal-400 transition-colors">
                                    <div className="flex items-start gap-4 p-4 w-80">
                                        <div className="p-3 bg-[#112240] rounded-lg text-teal-400">
                                            <FiPhone className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">Call Me</h3>
                                            {phoneNumber}
                                        </div>
                                    </div>
                                </a>

                                {/* Social Media */}
                                <div className="flex items-start gap-4 pt-4 p-4 w-80">
                                    <div className="p-3 bg-[#112240] rounded-lg text-teal-400">
                                        <FiMessageSquare className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Also Available On</h3>
                                        <div className="flex gap-4">
                                            <a
                                                href={linkedinUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-3xl text-gray-400 hover:text-[#0A66C2] transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <FaLinkedin />
                                            </a>
                                            <a
                                                href={facebookUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-3xl text-gray-400 hover:text-[#1877F2] transition-colors"
                                                aria-label="Facebook"
                                            >
                                                <FaFacebook />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                        {/* Contact Form */}
                        <Slide direction="right" triggerOnce>
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="bg-[#112240] p-8 rounded-xl shadow-xl space-y-6"
                            >
                                <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="user_name"
                                            required
                                            className="w-full bg-[#0a192f] border border-[#1e3a8a] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                            disabled={loading}
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="user_email"
                                            required
                                            className="w-full bg-[#0a192f] border border-[#1e3a8a] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="subject" className="block text-sm font-medium">Your Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full bg-[#0a192f] border border-[#1e3a8a] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                        placeholder="Job Opportunity / Project Inquiry"
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        className="w-full bg-[#0a192f] border border-[#1e3a8a] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                        placeholder="Hi Afjal, we're looking for a frontend developer for our team. We'd like to discuss a potential opportunity with you. Could we schedule a call to talk about the role requirements and your availability?"
                                        disabled={loading}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={`w-full bg-teal-400 hover:bg-teal-500 text-[#0a192f] font-bold py-3 px-6 rounded-lg transition-colors flex justify-center items-center gap-2`}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                className="animate-spin h-5 w-5 text-[#0a192f]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                ></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        "Hire Me - Let's Talk!"
                                    )}
                                </button>
                            </form>
                        </Slide>
                    </div>
                </div>
            </section>
            <Footertwo></Footertwo>
        </div>

    );
};

export default Contact;