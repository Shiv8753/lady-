import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    paymentMethod: 'card',
  });

  const [message, setMessage] = useState('');

  const services = [
    'Professional exterior and interior polishing',
    'Complete engine cleaning',
    'Complete care for your car with the best products',
  ];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
      setMessage('Please fill in all required fields.');
      return;
    }
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessage('Booking successful! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          paymentMethod: 'card',
        });
      } else {
        setMessage('Booking failed. Please try again.');
      }
    } catch (error) {
      setMessage('Error submitting booking. Please try again later.');
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: '2rem', maxWidth: '500px', margin: '0 auto', color: '#333' }}>
      <h1>Book a Service</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ marginTop: '0.5rem', marginBottom: '1rem', padding: '0.5rem' }} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ marginTop: '0.5rem', marginBottom: '1rem', padding: '0.5rem' }} />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ marginTop: '0.5rem', marginBottom: '1rem', padding: '0.5rem' }} />
        </label>
        <label>
          Service:
          <select name="service" value={formData.service} onChange={handleChange} required style={{ marginTop: '0.5rem', marginBottom: '1rem', padding: '0.5rem' }}>
            <option value="">Select a service</option>
            {services.map((service, idx) => (
              <option key={idx} value={service}>{service}</option>
            ))}
          </select>
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required style={{ marginTop: '0.5rem', marginBottom: '1rem', padding: '0.5rem' }} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required style={{ marginTop: '0.5rem', marginBottom: '1rem', padding: '0.5rem' }} />
        </label>
        <label>
          Payment Method:
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} style={{ marginTop: '0.5rem', marginBottom: '1rem', padding: '0.5rem' }}>
            <option value="card">Card</option>
            <option value="cash">Cash</option>
          </select>
        </label>
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit Booking</button>
      </form>
      {message && <p style={{ marginTop: '1rem', color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
};

export default Booking;
