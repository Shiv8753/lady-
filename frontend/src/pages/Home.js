import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333' }}>
      <section style={{ 
        backgroundImage: 'url(/images/car-detailing-banner.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '60vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
      }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>Lady Sarah Detailing</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>Professional Car Detailing Services</p>
      </section>
      <section style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2>Welcome to Lady Sarah Detailing</h2>
        <p>
          We provide top-quality car detailing services to keep your vehicle looking its best. Our expert team uses the best products and techniques to ensure your car shines inside and out.
        </p>
        <h3>Our Services</h3>
        <ul>
          <li>Professional exterior and interior polishing</li>
          <li>Complete engine cleaning</li>
          <li>Complete care for your car with the best products</li>
        </ul>
        <p>
          Book your appointment today and experience the difference!
        </p>
      </section>
    </div>
  );
};

export default Home;
