import React from 'react'
import './style.css';

const HeroSection = () => {
  return (
    <div  className='hero-container'>
      <video src='/videos/vid-1.mp4' autoPlay loop muted />
      <h1 class="text-center">"You bring the love, We'll bring the flowers."</h1>
      <p class="text-center">Find the perfect flower for that important day!</p>

    </div>
    
  )
}

export default HeroSection
