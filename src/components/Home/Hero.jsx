import React, { useEffect, useRef } from 'react';
import './Hero.css';
// import hero_video from '../../assets/Home/hero_video.mp4';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { homeSliceAction } from '../../store/homeSlice';

const Hero = () => {
  const dispatch = useDispatch();
  const bannerVideo = useSelector(state => state.homeReducer.banners);
  const lang = useSelector(state => state.langReducer.lang);

  const videoCurrent = useRef();

  useEffect(() => {
    fetchData(!lang ? 'az/home' : 'en/home').then((data) => (
      dispatch(homeSliceAction.getBanners(data.Hero_Video))
    ))
  }, [lang, dispatch]);

  useEffect(() => {
    if (videoCurrent.current) {
      videoCurrent.current.play().catch(() => {
        if (videoCurrent.current) videoCurrent.current.controls = true;
      });

    }
  }, [videoCurrent]);

  return (
    <div className='hero-section'>
      <video ref={videoCurrent} preload='auto' src={bannerVideo.Image} type='video/mp4' playsInline='playsinline' loop muted='true' autoPlay='true'>
      </video>
    </div>
  );
};

export default Hero;