import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

const activeStyle = {
  fontWeight: 'bold',
  color: '#007bff',
  textDecoration: 'underline',
};

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '15px 20px', backgroundColor: '#222', color: '#fff', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff', textDecoration: 'none' })}>Home</NavLink>
          <NavLink to="/services" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff', textDecoration: 'none' })}>Services</NavLink>
          <NavLink to="/gallery" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff', textDecoration: 'none' })}>Gallery</NavLink>
          <NavLink to="/booking" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff', textDecoration: 'none' })}>Booking</NavLink>
          <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff', textDecoration: 'none' })}>Contact</NavLink>
          <NavLink to="/admin" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff', textDecoration: 'none' })}>Admin</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
