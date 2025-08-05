// src/pages/ErrorPage.jsx
import image404 from "../assets/404.png"

const ErrorPage = () => {
  console.log('ErrorPage component rendered'); 
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-customBlue to-customBlack text-center text-white">
      <img src={image404} alt="Page Not Found - 404 Error" />
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
