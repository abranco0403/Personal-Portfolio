// src/pages/ErrorPage.jsx
import React from 'react';

const ErrorPage = () => {
  console.log('ErrorPage component rendered'); 
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-customBlue to-customBlack text-center text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page Not Found</p>
      <a 
        href="/" 
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        aria-label="Go to Homepage"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default ErrorPage;
