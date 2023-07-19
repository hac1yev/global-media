import React from 'react';
import './Home.css';
import MainAgenda from '../../components/Home/MainAgenda';
import Information from '../../components/Home/Information';
import Gallery from '../../components/Home/Gallery';
import Hero from '../../components/Home/Hero';
import Statics from '../../components/Home/Statics';
// import Slider from '../../components/Home/Slider';
import GlobalMediaMap from '../GlobalMediaMap/GlobalMediaMap';
// import Preloader from '../../components/Preloader/Preloader';

const Home = () => {
  
  return (
    <div>
        <Hero />
        <Information />
        <Statics />
        <MainAgenda />
        <Gallery />
        <GlobalMediaMap />
        {/* <Slider />*/}
    </div>
  );
};

export default Home;