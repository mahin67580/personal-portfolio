import React, { useEffect } from 'react';

const DynamicResponse = ({ steps, triggerNextStep }) => {
  // Get the user's typed input from the step where user asked the question
  const input = steps['user-question']?.value?.toLowerCase() || '';

  // Default response
  let response = "Sorry, I didn't understand your question. Please ask about projects, skills, or contact info.";

  // Simple keyword-based response logic
  if (input.includes('project')) {
    response = 'I have worked on projects like X, Y, and Z. You can find details in the Projects section.';
  } else if (input.includes('contact')) {
    response = 'You can reach me at your-email@example.com.';
  } else if (input.includes('skills')) {
    response = 'My skills include React, JavaScript, HTML, CSS, and more!';
  }

  // Trigger the next step once after showing this message
  useEffect(() => {
    triggerNextStep();
  }, [triggerNextStep]);

  // Render the response message as chatbot output
  return <div>{response}</div>;
};

export default DynamicResponse;
