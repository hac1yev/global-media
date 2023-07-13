import React, { useEffect } from 'react';
import './GlobalMediaMap.css';
// import map_video from '../../assets/Map/sayt xəritə.mp4';
import { useDispatch,useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { homeSliceAction } from '../../store/homeSlice';

const GlobalMediaMap = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.langReducer.lang);
  const mapVideo = useSelector(state => state.homeReducer.map);

  useEffect(() => {
    fetchData(!lang ? 'az/home' : 'en/home').then((data) => (
      dispatch(homeSliceAction.getMap(data.Xəritə_Video))
    ))
  }, [lang,dispatch]);

  return (
        <div className='map-section'>
            <video preload='auto' src={mapVideo.Image} type='video/mp4' playsInline loop muted autoPlay>
            </video>
        </div>
  );
};

export default GlobalMediaMap;