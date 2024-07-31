import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Main page route */}
      <Route path="/allprojects" element={<AllProjects />} /> {/* Example of another route */}
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;


