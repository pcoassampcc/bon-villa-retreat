import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../HeroSection.scss';

const bannerImages = [
  'https://bonvillaretreat.co.in/assets/images/slider/slider1.jpg',
  'https://bonvillaretreat.co.in/assets/images/slider/slider2.jpg',
  'https://bonvillaretreat.co.in/assets/images/slider/slider3.jpg',
];

const HeroSection = () => {
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background" style={{
        background: `url(${bannerImages[current]}) center/cover no-repeat`,
      }} />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Bon Villa Retreat</h1>
          <div className="hero-separator"></div>
          <h2>Reconnect with Nature in Luxury</h2>
          <a href="#reservation" className="btn btn-hero">
            Book Your Escape
          </a>
        </div>
      </div>
      <div className="hero-dots">
        {bannerImages.map((_, i) => (
          <button 
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`View slide ${i + 1}`}
          />
        ))}
      </div>
      <a href="#about" className="scroll-indicator">
        <FaChevronDown />
      </a>
    </section>
  );
};

export default HeroSection;
