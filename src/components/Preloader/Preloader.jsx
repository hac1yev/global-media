import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className='preloader-section'>
        <div className='preloader-header container'>
            <div className='pre-logo'></div>
            <div className='preloader-ul'>
                <div className='preloader-li1'></div>
                <div className='preloader-li2'></div>
                <div className='preloader-li3'></div>
                <div className='preloader-li4'></div>
                <div className='preloader-li5'></div>
            </div>
        </div>
        <div className='preloader-middle'></div>
        <div className='preloader-footer'></div>
    </div>
  );
};

export default Preloader;