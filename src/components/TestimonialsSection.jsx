import React from 'react';
import '../TestimonialsSection.scss';

const testimonials = [
  {
    name: 'Amit S.',
    photo: '/testimonial-amit.jpg',
    rating: 5,
    quote: 'A magical escape! The cottages are beautiful, the food is delicious, and the staff made us feel at home. Will visit again!'
  },
  {
    name: 'Priya R.',
    photo: '/testimonial-priya.jpg',
    rating: 5,
    quote: 'The perfect blend of luxury and nature. Loved the bonfire evenings and organic meals. Highly recommended!'
  },
  {
    name: 'Rahul D.',
    photo: '/testimonial-rahul.jpg',
    rating: 4,
    quote: 'Peaceful, clean, and eco-friendly. The adventure trails were a highlight for our group.'
  },
];

const StarRating = ({ rating }) => (
  <span style={{ color: '#a68a64' }}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
);

const TestimonialsSection = () => (
  <section className="section testimonials-section" id="testimonials">
    <div className="container">
      <h2>Guest Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <img src={t.photo} alt={t.name} className="testimonial-photo" />
            <StarRating rating={t.rating} />
            <p className="testimonial-quote">“{t.quote}”</p>
            <div className="testimonial-name">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
