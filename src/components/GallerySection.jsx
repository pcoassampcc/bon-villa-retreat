import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import '../GallerySection.scss';

const images = [
  { src: '/gallery-1.jpg', alt: 'Resort View 1' },
  { src: '/gallery-2.jpg', alt: 'Resort View 2' },
  { src: '/gallery-3.jpg', alt: 'Nature Trail' },
  { src: '/gallery-4.jpg', alt: 'Luxury Tent' },
  { src: '/gallery-5.jpg', alt: 'Cottage Room' },
  { src: '/gallery-6.jpg', alt: 'Bonfire Night' },
  // Add more images as needed
];

const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="gallery-thumb"
              onClick={() => { setOpen(true); setIndex(i); }}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map(img => ({ src: img.src, alt: img.alt }))}
          index={index}
          on={{ view: ({ index }) => setIndex(index) }}
        />
      </div>
    </section>
  );
};

export default GallerySection;
