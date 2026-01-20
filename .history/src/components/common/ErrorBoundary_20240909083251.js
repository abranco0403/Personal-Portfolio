// src/components/ErrorBoundary.jsx
import React, { Component } from 'react';
import ErrorPage from '../pages/ErrorPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state to show fallback UI on error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an external service or console
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI if there is an error
      return <ErrorPage />;
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
