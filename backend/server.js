const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory storage for bookings and admin credentials (for demo purposes)
const bookings = [];
const adminUser = { username: 'admin', password: 'password123' };

// Routes
app.get('/', (req, res) => {
  res.send('Lady Sarah Detailing Backend API');
});

// Booking endpoint
app.post('/api/bookings', (req, res) => {
  const booking = req.body;
  booking.id = bookings.length + 1;
  bookings.push(booking);
  // Here you would add payment processing and email sending logic
  res.status(201).json({ message: 'Booking received', bookingId: booking.id });
});

// Admin login endpoint
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === adminUser.username && password === adminUser.password) {
    res.json({ success: true, token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Admin get bookings endpoint
app.get('/api/admin/bookings', (req, res) => {
  // In real app, verify token here
  res.json(bookings);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
