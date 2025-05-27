import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import '../TestimonialsSection.scss';

const testimonials = [
  {
    name: 'Amit S.',
    photo: '/testimonial-amit.jpg',
    rating: 5,
    quote: 'A magical escape! The cottages are beautiful, the food is delicious, and the staff made us feel at home. The perfect blend of luxury and nature.',
  },
  {
    name: 'Priya R.',
    photo: '/testimonial-priya.jpg',
    rating: 5,
    quote: 'The perfect blend of luxury and nature. The organic meals were exceptional, and the evening bonfires created unforgettable memories. Highly recommended!',
  },
  {
    name: 'Rahul D.',
    photo: '/testimonial-rahul.jpg',
    rating: 4.5,
    quote: 'Peaceful, clean, and eco-friendly. The adventure trails were a highlight for our group. A truly unique experience in the heart of nature.',
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalf key="star-half" />);
  }

  return <div className="star-rating">{stars}</div>;
};

const TestimonialsSection = () => (
  <section className="testimonials-section" id="testimonials">
    <div className="container">
      <h2>Guest Experiences</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
            <StarRating rating={testimonial.rating} />
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-name">{testimonial.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
