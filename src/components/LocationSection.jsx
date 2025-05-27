import React from 'react';
import '../LocationSection.scss';

const LocationSection = () => (
  <section className="section location-section" id="location">
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
      <div style={{ flex: '1 1 350px', minWidth: 0 }}>
        <h2>Find Us</h2>
        <p>
          Bon Villa Retreat, Village Bhoramdeo, Near Bhoramdeo Temple, District Kawardha, Chhattisgarh 491995, India
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+919993333388">+91 99933 33388</a><br />
          <strong>Email:</strong> <a href="mailto:bonvillaretreat@gmail.com">bonvillaretreat@gmail.com</a><br />
          <a href="https://wa.me/919993333388" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </p>
      </div>
      <div style={{ flex: '1 1 350px', minWidth: 0 }}>
        <iframe
          title="Bon Villa Retreat Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.019282019994!2d81.393889!3d22.011111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a6b1e2e2e2e2e%3A0x1234567890abcdef!2sBon%20Villa%20Retreat!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '1rem', boxShadow: '0 4px 24px rgba(62,92,58,0.08)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default LocationSection;
