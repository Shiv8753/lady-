import React from 'react';

const Contact = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: '2rem', maxWidth: '600px', margin: '0 auto', color: '#333' }}>
      <h1>Contact Us</h1>
      <p>If you have any questions or would like to book a service, please reach out to us:</p>
      <ul>
        <li>Email: <a href="mailto:info@ladysarahdetailing.com">info@ladysarahdetailing.com</a></li>
        <li>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
        <li>Address: 123 Main Street, Ottawa, ON</li>
      </ul>
      <p>We look forward to hearing from you!</p>
    </div>
  );
};

export default Contact;
