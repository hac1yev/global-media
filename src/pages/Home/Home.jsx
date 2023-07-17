import React, { useEffect, useState } from 'react';
import './Home.css';
import MainAgenda from '../../components/Home/MainAgenda';
import Information from '../../components/Home/Information';
import Gallery from '../../components/Home/Gallery';
import Hero from '../../components/Home/Hero';
import Statics from '../../components/Home/Statics';
import Slider from '../../components/Home/Slider';
import GlobalMediaMap from '../GlobalMediaMap/GlobalMediaMap';

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? <div className="loader-container">
        <div className="spinner"></div>
      </div> : <>
        <Hero />
        <Information />
        <Statics />
        <MainAgenda />
        <Gallery />
        <GlobalMediaMap />
        {/* <Slider /> */}
      </>
      }

    </div>
  );
};

export default Home;