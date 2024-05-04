import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css'; // Import the CSS file containing the styles
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [showText, setShowText] = useState(false);
    const videoRef = useRef(null);

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
            <div className="video-container">
                <iframe
                    title="Background Video"
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/b7MIfaB5RPY?autoplay=1&loop=1&controls=0&showinfo=0&rel=0&playlist=b7MIfaB5RPY&mute=1"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="text-container">
                <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMRO4W91yNrZDZFuVQueEJa01KymR_P4XZA&s" alt="saturn coin"/>
                <h1 className={showText ? 'fadeInText' : ''}>Welcome to the $Saturn Universe!</h1>
                <p className='para'>Explore the Wonders of Saturn and Join the Meme Coin Revolution!</p>
                <Link to="/about" className="cta-button">Learn More About $Saturn</Link>
            </div>
        </div>
    );
}

export default HeroSection;
