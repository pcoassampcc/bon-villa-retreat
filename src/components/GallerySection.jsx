import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import '../GallerySection.scss';

const images = [
  // Home Banners
  { src: 'https://bonvillaretreat.co.in/assets/images/slider/slider1.jpg', alt: 'Home Banner 1' },
  { src: 'https://bonvillaretreat.co.in/assets/images/slider/slider2.jpg', alt: 'Home Banner 2' },
  { src: 'https://bonvillaretreat.co.in/assets/images/slider/slider3.jpg', alt: 'Home Banner 3' },
  // Room Images
  { src: 'https://bonvillaretreat.co.in/assets/images/rooms/Executive-Room.jpg', alt: 'Executive Room' },
  { src: 'https://bonvillaretreat.co.in/assets/images/rooms/Deluxe-Room.jpg', alt: 'Deluxe Room' },
  { src: 'https://bonvillaretreat.co.in/assets/images/rooms/Super-Deluxe-Room.jpg', alt: 'Super Deluxe Room' },
  // Gallery Images
  ...Array.from({ length: 50 }, (_, i) => ({
    src: `https://bonvillaretreat.co.in/assets/images/gallery/gallery${i + 1}.jpg`,
    alt: `Gallery Image ${i + 1}`
  }))
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
