import React from 'react';
import './GlobalMediaMap.css';
import map_video from '../../assets/Map/sayt xəritə.mp4';

const GlobalMediaMap = () => {
  return (
        <div className='map-section'>
            <video preload='auto' playsInline loop muted autoPlay>
                <source src={map_video} type='video/mp4' />
            </video>
        </div>
  );
};

export default GlobalMediaMap;