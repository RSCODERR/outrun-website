import React, { useEffect } from 'react';
// import anime from 'animejs';
import anime from 'animejs/lib/anime.es.js'
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  // Configuration object for easy tweaking
  const config = {
    particleCount: 300, // Increased from 50
    minSize: 1,
    maxSize: 4,
    minOpacity: 0.1,
    maxOpacity: 0.8,
    animationDuration: {
      min: 8000,
      max: 20000
    },
    colors: [
      '#fc8686', // Primary red
      '#ff7597', // Pink accent
      '#ff8a65', // Orange
      '#bb86fc', // Purple
      '#03dac6'  // Teal
    ]
  };

  useEffect(() => {
    // Main particle animation
    anime({
      targets: '.particle',
      translateX: () => Math.random() > 0.5 ? anime.random(50, 150) : anime.random(-150, -50),
      translateY: () => Math.random() > 0.5 ? anime.random(50, 150) : anime.random(-150, -50),
      duration: () => anime.random(config.animationDuration.min, config.animationDuration.max),
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate',
      delay: () => anime.random(0, 2000)
    });

    // Secondary animation for some particles
    anime({
      targets: '.particle:nth-child(3n)',
      scale: () => anime.random(0.8, 1.5),
      duration: () => anime.random(3000, 8000),
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate'
    });

  }, []);

  return (
    <div className="background-animation">
      {Array.from({ length: config.particleCount }).map((_, i) => {
        const size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
        return (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: Math.random() * (config.maxOpacity - config.minOpacity) + config.minOpacity,
              background: config.colors[Math.floor(Math.random() * config.colors.length)],
              borderRadius: `${Math.random() > 0.3 ? '70%' : '20%'}` // 70% circles, 30% squares
            }}
          />
        );
      })}
      
      {/* Grid lines remain unchanged */}
      <svg className="grid-lines" width="100%" height="100%">
        {/* ... existing grid code ... */}
      </svg>
    </div>
  );
};

export default BackgroundAnimation;