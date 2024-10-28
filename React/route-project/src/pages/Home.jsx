import React from 'react'
import Navbar from '../components/Navbar'
// HomePage.js
import HeroSection from '../assets/sections/HeroSection';
import Features from '../assets/sections/Features';
import Testimonials from '../assets/sections/Testimonials';
const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      
      <Features />
      <Testimonials />
    </div>
  );
};

export default HomePage;
