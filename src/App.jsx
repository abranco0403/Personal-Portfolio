import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Loader from "./components/common/Loader";
import ErrorPage from "./pages/ErrorPage";

// ✅ Project case study pages (create these files)
import RetailOpsDashboard from "./pages/projects/RetailOpsDashboard";
import HealthcareRevenueCycle from "./pages/projects/HealthcareRevenueCycle";
import CustomerRFMSegmentation from "./pages/projects/CustomerRFMSegmentation";
// Optional
// import PortfolioWebsite from "./pages/projects/PortfolioWebsite";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate data fetching or initial setup
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error("Data fetch failed", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-HLBH2Z8MXX", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return (
    <ErrorBoundary>
      <div className="app-container">
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Project archive */}
            <Route path="/allprojects" element={<AllProjects />} />

            {/* ✅ Case study pages (one per main project) */}
            <Route
              path="/projects/retail-ops-dashboard"
              element={<RetailOpsDashboard />}
            />
            <Route
              path="/projects/healthcare-revenue-cycle"
              element={<HealthcareRevenueCycle />}
            />
            <Route
              path="/projects/customer-rfm-segmentation"
              element={<CustomerRFMSegmentation />}
            />

            {/* Optional */}
            {/* <Route path="/projects/portfolio-website" element={<PortfolioWebsite />} /> */}

            {/* 404 */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
