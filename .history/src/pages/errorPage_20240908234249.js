// src/pages/ErrorPage.jsx
import React from 'react';

const ErrorPage = () => {
    console.log('ErrorPage component rendered'); 
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4 py-8">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-xl mt-2">Page Not Found</p>
      <a href="/" className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Go to Homepage</a>
    </div>
  );
};

export default ErrorPage;
