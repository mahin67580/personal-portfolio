import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#007bff',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#007bff',
  botFontColor: '#fff',
  userBubbleColor: '#e0e0e0',
  userFontColor: '#4a4a4a',
};

function getDynamicResponse(input) {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes('project')) {
    return 'I have worked on projects like X, Y, and Z. You can find details in the Projects section.';
  } else if (lowerInput.includes('contact')) {
    return 'You can reach me at your-email@example.com.';
  } else if (lowerInput.includes('skills')) {
    return 'My skills include React, JavaScript, HTML, CSS, and more!';
  } else {
    return "Sorry, I didn't understand your question. Please ask about projects, skills, or contact info.";
  }
}

const steps = [
  {
    id: '1',
    message: 'Welcome to my portfolio! Ask me anything.',
    trigger: 'user-question',
  },
  {
    id: 'user-question',
    user: true,
    trigger: 'handle-question',
  },
  {
    id: 'handle-question',
    message: ({ previousValue }) => getDynamicResponse(previousValue),
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'projects', label: 'Show me your projects', trigger: '3' },
      { value: 'contact', label: 'How can I contact you?', trigger: '4' },
      { value: 'ask-again', label: 'Ask another question', trigger: 'user-question' },
    ],
  },
  {
    id: '3',
    message: 'You can check out my projects in the Projects section!',
    trigger: '2',
  },
  {
    id: '4',
    message: 'Feel free to email me at your-email@example.com',
    trigger: '2',
  },
];

function Chatbot() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot headerTitle="Portfolio Chatbot" steps={steps} floating={true} />
    </ThemeProvider>
  );
}

export default Chatbot;
