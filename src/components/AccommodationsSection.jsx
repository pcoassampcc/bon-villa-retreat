import React from 'react';
import '../AccommodationsSection.scss';

const accommodations = [
  {
    name: 'Cottage Rooms',
    image: '/accommodation-cottage.jpg',
    description: 'Charming, private cottages with modern amenities and serene views. Perfect for couples and families seeking comfort in nature.',
    link: '#',
  },
  {
    name: 'Luxury Tents',
    image: '/accommodation-tent.jpg',
    description: 'Spacious, beautifully appointed tents for a unique glamping experience. Enjoy the sounds of the wild with all the luxuries you desire.',
    link: '#',
  },
  {
    name: 'Dormitories',
    image: '/accommodation-dorm.jpg',
    description: 'Cozy, well-designed dormitories ideal for groups and solo travelers. Affordable comfort with a community vibe.',
    link: '#',
  },
];

const AccommodationsSection = () => (
  <section className="section accommodations-section" id="accommodations">
    <div className="container">
      <h2>Accommodations</h2>
      <div className="accommodations-list">
        {accommodations.map((acc) => (
          <div className="accommodation-card" key={acc.name}>
            <img src={acc.image} alt={acc.name} className="accommodation-img" />
            <h3>{acc.name}</h3>
            <p>{acc.description}</p>
            <a href={acc.link} className="btn btn-secondary">View More</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AccommodationsSection;
