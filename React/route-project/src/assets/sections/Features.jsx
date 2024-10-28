// Features.js

import React from 'react';

const Features = () => {
  const featuresList = [
    { title: 'Fast and Reliable', description: 'Experience lightning-fast load times and 99.9% uptime.' },
    { title: 'User-Friendly', description: 'Intuitive design with a focus on user experience.' },
    { title: '24/7 Support', description: 'Our team is available around the clock to assist you.' },
  ];

  return (
    <section className="features" style={featuresStyles}>
      <h2>Why Choose Us?</h2>
      <div className="feature-list" style={featureListStyles}>
        {featuresList.map((feature, index) => (
          <div key={index} className="feature-item" style={featureItemStyles}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const featuresStyles = {
  padding: '3rem 1rem',
  backgroundColor: '#e0f7fa',
  textAlign: 'center',
};

const featureListStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'wrap',
};

const featureItemStyles = {
  width: '200px',
  padding: '1rem',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

export default Features;
