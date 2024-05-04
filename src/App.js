import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './Header/HeroSection';
import AboutSaturn from './aboutSaturn/AboutSaturn';
import RoadmapSection from './saturnRoadmap/RoadmapSection';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSaturn />} />
        </Routes>
      </Router>
    </div>
  );
}
function HomePage() {
  return (
    <>
      <HeroSection />
      <RoadmapSection />
      <Footer />
    </>
  );
}

export default App;
