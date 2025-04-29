import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Exterior and Interior Polishing',
      description: 'Professional polishing to restore your car’s shine and protect the paint.',
    },
    {
      title: 'Complete Engine Cleaning',
      description: 'Thorough cleaning of your engine to improve performance and appearance.',
    },
    {
      title: 'Full Car Care',
      description: 'Comprehensive care using the best products to keep your car in top condition.',
    },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: '2rem', maxWidth: '900px', margin: '0 auto', color: '#333' }}>
      <h1>Our Services</h1>
      <div>
        {services.map((service, index) => (
          <div key={index} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginTop: 0 }}>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
