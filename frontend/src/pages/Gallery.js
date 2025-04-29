import React from 'react';

const Gallery = () => {
  const images = [
    '/images/car1.jpg',
    '/images/car2.jpg',
    '/images/car3.jpg',
    '/images/car4.jpg',
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: '2rem', maxWidth: '900px', margin: '0 auto', color: '#333' }}>
      <h1>Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {images.map((src, index) => (
          <div key={index} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <img src={src} alt={`Car detailing ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
