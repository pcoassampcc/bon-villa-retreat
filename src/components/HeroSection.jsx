import React from 'react';
import '../HeroSection.scss';

const HeroSection = () => (
  <section className="hero-section" style={{
    background: 'url(/hero-bg.jpg) center/cover no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: '#fff',
  }}>
    <div className="hero-overlay" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(34, 34, 34, 0.45)',
      zIndex: 1,
    }} />
    <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '2px' }}>Bon Villa Retreat</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }}>
        Reconnect with Nature in Luxury
      </h2>
      <a href="#reservation" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>Book Now</a>
    </div>
  </section>
);

export default HeroSection;
