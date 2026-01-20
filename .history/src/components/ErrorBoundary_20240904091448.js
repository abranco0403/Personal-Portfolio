import React, { Component } from 'react';
import image from '../assets/404.png'; // Ensure the image path is correct

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="w-full h-screen grid place-content-center bg-gradient-to-r from-customBlue to-customBlack px-4 py-24">
          <img src={image} alt="404 error page not found" />
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
