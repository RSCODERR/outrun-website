import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import Usage from './components/Usage';
import Configuration from './components/Configuration';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation.jsx';
import './styles.css';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', smoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', smoothScroll));
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Installation />
        <Usage />
        <Configuration />
      </main>
      <Footer />
      <BackgroundAnimation />
    </div>
  );
}

export default App;