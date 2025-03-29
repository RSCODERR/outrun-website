import React from 'react';

const Features = () => {
  const features = [
    "Provides a command-line interface with useful commands",
    "Checks for required system dependencies",
    "Supports project initialization with customizable settings",
    "Generates a structured out.run configuration file"
  ];

  return (
    <section className="features">
      <h2>Features <span className="emoji">⚡</span></h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  );
};

export default Features;