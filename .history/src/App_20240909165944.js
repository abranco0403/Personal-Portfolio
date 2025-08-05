// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate data fetching
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error('Data fetch failed', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (window.gtag) {
      // Track page views
      window.gtag('config', 'G-HLBH2Z8MXX', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return (
    <ErrorBoundary>
      <div className="app-container">
        {isLoading ? <Loader /> : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allprojects" element={<AllProjects />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
