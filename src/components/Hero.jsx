import React from 'react';
import './Hero.css';

const Hero = () => {

  const asciiArt = `
      ▄• ▄▌▄▄▄▄▄▄▄▄  ▄• ▄▌ ▐ ▄ 
▪     █▪██▌•██  ▀▄ █·█▪██▌•█▌▐█
 ▄█▀▄ █▌▐█▌ ▐█.▪▐▀▀▄ █▌▐█▌▐█▐▐▌
▐█▌.▐▌▐█▄█▌ ▐█▌·▐█•█▌▐█▄█▌██▐█▌
 ▀█▄▀▪ ▀▀▀  ▀▀▀ .▀  ▀ ▀▀▀ ▀▀ █▪
  `

  return (
    <section className="hero">
      <div className="ascii-art">
        <pre>
          {asciiArt}
        </pre>
      </div>
      <p className="tagline">Streamline your next.js project hosting with essential configurations</p>
    </section>
  );
};

export default Hero;