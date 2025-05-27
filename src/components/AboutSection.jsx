import React from 'react';
import '../AboutSection.scss';

const AboutSection = () => (
  <section className="section about-section" id="about">
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
      <div style={{ flex: '1 1 350px', minWidth: 0 }}>
        <h2>About Bon Villa Retreat</h2>
        <p>
          Bon Villa Retreat is a premium eco-resort nestled in the heart of nature, offering a sanctuary of serenity and luxury. Our philosophy is rooted in sustainable living, blending modern comfort with the tranquility of the wild. Located amidst lush forests and rolling hills, we invite you to reconnect with nature while enjoying world-class hospitality and eco-friendly amenities.
        </p>
        <p>
          Experience the harmony of eco-luxury, organic cuisine, and immersive cultural adventures. Whether you seek peaceful solitude or vibrant experiences, Bon Villa Retreat is your gateway to a rejuvenating escape.
        </p>
      </div>
      <div style={{ flex: '1 1 350px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <img src="/about-nature.jpg" alt="Nature at Bon Villa Retreat" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(62,92,58,0.08)' }} />
        <img src="/about-property.jpg" alt="Property at Bon Villa Retreat" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(62,92,58,0.08)' }} />
      </div>
    </div>
  </section>
);

export default AboutSection;
