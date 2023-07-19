import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className='preloader-section'>
        <div className='preloader-header container'>
            <div className='pre-logo logo-skeleton'></div>
            <div className='preloader-ul'>
                <div className='preloader-li1 li1-skeleton'></div>
                <div className='preloader-li2 li2-skeleton'></div>
                <div className='preloader-li3 li3-skeleton'></div>
                <div className='preloader-li4 li4-skeleton'></div>
                <div className='preloader-li5 li5-skeleton'></div>
            </div>
        </div>
        <div className='preloader-middle middle-skeleton'></div>
        <div className='preloader-footer'></div>
    </div>
  );
};

export default Preloader;