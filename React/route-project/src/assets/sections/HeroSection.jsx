// HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section" style={heroStyles}>
      <h1>Welcome to My Website!</h1>
      <p>These is the first Web project Developed Through React</p>
      <button style={buttonStyles}>Get Started!</button>
    </section>
  );
};

const heroStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60vh',
  backgroundColor: '#f5f5f5',
  textAlign: 'center',
};

const buttonStyles = {
  marginTop: '1rem',
  padding: '0.8rem 1.5rem',
  fontSize: '1rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default HeroSection;
