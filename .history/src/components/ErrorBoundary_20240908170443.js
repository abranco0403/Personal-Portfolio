import React, { Component } from 'react';
import image from '../assets/404.png'; // Ensure the image path is correct

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI for error state
      return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-black text-white px-4 py-8">
          <img
            src={image}
            alt="404 error page not found"
            className="max-w-xs sm:max-w-md lg:max-w-lg"
          />
          <h1 className="mt-4 text-3xl font-bold">Something went wrong</h1>
          <p className="mt-2 text-xl">We couldn't find the page you're looking for.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
