import React, { useState } from 'react';
import './Chatbot.css';
import { Link } from 'react-router';

const PortfolioChatbot = () => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Welcome to my portfolio! Ask me about my projects, skills, or contact info.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isMinimized, setIsMinimized] = useState(true);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMessage = { sender: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Process and add bot response
        setTimeout(() => {
            const botResponse = generateResponse(inputValue);
            setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
        }, 500);
    };



    const generateResponse = (input) => {
        const lowerInput = input.toLowerCase();

        // Greetings
        if (/hello|hey|greetings/.test(lowerInput)) {
            return 'Hello! Thanks for reaching out. How can I help you today?';
        }

        // About/Introduction
        if (/who are you|introduce|yourself/.test(lowerInput)) {
            return 'I\'m a passionate Full Stack Developer with expertise in JavaScript, React, Node.js, and more. I love building innovative web solutions!';
        }

        // Projects
        if (/project|portfolio|showcase/.test(lowerInput)) {
            return <>
                <p>I've developed multiple dynamic, interactive web applications featuring user role-based authentication. You can explore these projects in detail in my Projects section: <Link to={'/project-list'}><button
                    className='btn font-bold text-[#0077b6] hover:text-[#005f92]   underline-offset-4 hover:underline transition-all duration-200 cursor-pointer flex items-center gap-1'
                >
                    Projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                    </svg>
                </button></Link> </p>
            </>;
        }


        // Contact
        if (/contact|email|reach|connect|get in touch|hire/.test(lowerInput)) {
            return (
                <div className="contact-links">
                    <p>You can reach me through these channels:</p>
                    <ul>
                        <li>📧 <a href="mailto:afjalhossainmahin0@gmail.com" className="text-blue-600 hover:underline">afjalhossainmahin0@gmail.com</a></li>
                        <li>🔗 <a href="https://www.linkedin.com/in/afjal-hossain-webdev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Profile</a></li>
                        <li>📞 Phone: +8801875027270</li>

                    </ul>
                    <p>I'm actively available for new opportunities and would welcome a conversation.</p>
                </div>
            );
        }

        // Education
        if (/education|degree|study|university|college/.test(lowerInput)) {
            return ' I earned my Bachelors degree in Computer Science & Engineering (BSc in CSE) from Bangladesh Army International University of Science & Technology (BAIUST). You can find more details in the Education section of my portfolio.';
        }

        // Resume
        if (/resume|cv|download/.test(lowerInput)) {
            return 'You can download my resume from the Banner section of my portfolio';
        }

        // Availability
        if (/available|open|job|opportunity|position/.test(lowerInput)) {
            return 'I\'m currently available/open to new opportunities/seeking full-time roles. I\'d love to discuss how I can contribute to your team!';
        }

        // Experience
        if (/experience|years|worked|professional/.test(lowerInput)) {
            return 'I have One years of professional experience in web development, including roles at Dot-IT. Check my Experience section for details.';
        }

        // Hobbies & Passion
        if (/hobby|passion|interest|music|guitar|free time/.test(lowerInput)) {
            return `Beyond coding, I'm deeply passionate about music and have been playing guitar for [5] years. 

My musical interests include:
• Practicing fingerstyle and acoustic arrangements
• Composing original music 
• Exploring music production 

I find that my musical creativity often complements my problem-solving skills in development. The discipline of learning instruments translates well to mastering new technologies!`;
        }

        // Location
        if (/where|location|based|city|country/.test(lowerInput)) {
            return 'I\'m currently based in Bangladesh. And i am open to remote work/relocation if applicable.';
        }
        // Skills
        if (/skill|tech|technology|stack|expertise|specialized|speciality|specialty/.test(lowerInput)) {

            return (
                <div >
                    <p>My technical skills include:\n- Frontend: React, JavaScript, HTML5, CSS3, Redux\n- Backend: Node.js, Express, MongoDB\n- Tools: Git, Firebase\n- Also familiar with Python and Typescript. Visual representation of my skills: <Link to={'/tech-skill'}><button
                        className='btn font-bold text-[#0077b6] hover:text-[#005f92]   underline-offset-4 hover:underline transition-all duration-200 cursor-pointer flex items-center gap-1'
                    >
                        Tech-Skill
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                        </svg>
                    </button></Link> </p>
                </div>
            );

        }


        // Default response
        return 'I can tell you about my background, skills, projects, or how to contact me. What would you like to know more about? You can also explore my portfolio ';
    };



    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const toggleChatbot = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className={`chatbot-container ${isMinimized ? 'minimized' : ''}`}>
            {isMinimized ? (
                <div className="chat-bubble" onClick={toggleChatbot}></div>
            ) : (
                <div className="chatbot-content">
                    <div className="chatbot-header" onClick={toggleChatbot}>
                        <h3>Portfolio Chatbot</h3>
                        <button className="toggle-btn">×</button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your question..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioChatbot;