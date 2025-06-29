import React from 'react';
import { useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import errorAnimation from '../assets/projecti_amge/error - 1751190266283.json'; // Replace with your Lottie file

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full bg-blue-100 opacity-50 animate-float"></div>
      <div className="absolute bottom-8 right-8 w-48 h-48 rounded-full bg-blue-100 opacity-50 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-36 h-36 rounded-full bg-blue-100 opacity-50 animate-float animation-delay-1000"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Lottie Animation */}
        <div className="max-w-md mx-auto">
          <Lottie 
            animationData={errorAnimation} 
            loop={true}
            className="w-full h-auto"
          />
        </div>

        {/* Error Message */}
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;