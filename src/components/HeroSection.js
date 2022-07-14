import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vid-1.mp4' autoPlay loop muted />
      <h1>"You bring the love, We'll bring the flowers."</h1>
      <p>Find the perfect flower for that important day!</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
