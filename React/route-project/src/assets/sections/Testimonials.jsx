// Testimonials.js

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Alice Johnson', text: 'This service has completely transformed our business!' },
    { name: 'Mark Spencer', text: 'Amazing user experience and fantastic support!' },
    { name: 'Sara Lee', text: 'Highly recommend to anyone looking for quality and efficiency.' },
  ];

  return (
    <section className="testimonials" style={testimonialsStyles}>
      <h2>What Our Users Say</h2>
      <div className="testimonials-list" style={testimonialsListStyles}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item" style={testimonialItemStyles}>
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const testimonialsStyles = {
  padding: '2rem 1rem',
  backgroundColor: '#fff3e0',
  textAlign: 'center',
};

const testimonialsListStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
};

const testimonialItemStyles = {
  maxWidth: '400px',
  padding: '1rem',
  border: '1px solid #ddd',
  borderRadius: '6px',
  fontStyle: 'italic',
};

export default Testimonials;
