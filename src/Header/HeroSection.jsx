import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Import the CSS file containing the styles
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Set showText to true after 2 seconds
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="hero-section">
      <div className="hero-content">
        <img src="https://media.istockphoto.com/id/606191046/photo/planet-saturn-with-major-moons.jpg?s=612x612&w=0&k=20&c=6cCk7S5mAB8VFZmSHIkf0MCYiAEHbSn5LDkU3ZVjCj4=" alt="Saturn" className="saturn-image" />
        <h1 className={showText ? 'fadeInText' : ''}>Welcome to the $Saturn Universe!</h1>
        <p>Explore the Wonders of Saturn and Join the Meme Coin Revolution!</p>
        <Link to="/about" className="cta-button">Learn More About $Saturn</Link>
      </div>
    </div>
  );
}

export default HeroSection;
