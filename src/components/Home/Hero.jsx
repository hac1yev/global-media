import React from 'react';
import './Hero.css';
import hero_video from '../../assets/Home/hero_video.mp4';

const Hero = () => {
  return (
    <div className='hero-section'>
        <video preload='auto' playsInline loop muted autoPlay>
          <source src={hero_video} type='video/mp4' />
        </video>
    </div>
  );
};

export default Hero;