import React, { useEffect } from 'react';
import Slider from "react-slick";
import './Gallery.css';
// import G1 from '../../assets/Home/gallery1.webp';
// import G2 from '../../assets/Home/gallery2.webp';
// import G3 from '../../assets/Home/gallery3.webp';
// import G4 from '../../assets/Home/gallery4.webp';
// import G5 from '../../assets/Home/gallery5.webp';
// import G6 from '../../assets/Home/gallery6.webp';
// import G7 from '../../assets/Home/gallery7.webp';
// import G8 from '../../assets/Home/gallery8.webp';
// import G9 from '../../assets/Home/gallery9.webp';
// import G10 from '../../assets/Home/gallery10.webp';
// import G11 from '../../assets/Home/gallery11.webp';
// import G12 from '../../assets/Home/gallery12.webp';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { homeSliceAction } from '../../store/homeSlice';

// const DUMMY_IMG = [
//   {
//     id: 'g1',
//     img: G1
//   },
//   {
//     id: 'g2',
//     img: G2
//   },
//   {
//     id: 'g3',
//     img: G3
//   },
//   {
//     id: 'g4',
//     img: G4
//   },
//   {
//     id: 'g5',
//     img: G5
//   },
//   {
//     id: 'g6',
//     img: G6
//   },
// ];

// const DUMMY_IMG2 = [

//   {
//     id: 'g7',
//     img: G7
//   },
//   {
//     id: 'g8',
//     img: G8
//   },
//   {
//     id: 'g9',
//     img: G9
//   },
//   {
//     id: 'g10',
//     img: G10
//   },
//   {
//     id: 'g11',
//     img: G11
//   },
//   {
//     id: 'g12',
//     img: G12
//   }
// ];

const Gallery = () => {
  const dispatch = useDispatch();
  const highlight = useSelector(state => state.homeReducer.highlights);
  const lang = useSelector(state => state.langReducer.lang);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    fetchData(!lang ? 'az/home' : 'en/home').then((data) => (
      dispatch(homeSliceAction.getHighlight(data.Highlights))
    ))
  }, [lang,dispatch]);

  

  return (
    <div className='gallery-section'>
      <div className='gallery-top'>
        <h3>{!lang ? 'Spikerlər' : 'Speakers'}</h3>
        <Link to="/gallery" onClick={() => window.scrollTo(0, 0)} className='gallery-more'>
        {!lang ? 'Daha Çox' : 'More'}
        </Link>
      </div>
      <Slider {...settings1}>
        {highlight.map((item) => (
          <div className="gallery-slide-img" key={item.id}>
            <img src={item.Image} alt="gallery-img" />
          </div>
        ))}
      </Slider>
      <Slider {...settings2}>
      {highlight.map((item) => (
          <div className="gallery-slide-img" key={item.id}>
            <img src={item.Image} alt="gallery-img" />
          </div>
        ))}
      </Slider>
    </div>

  )
}

export default Gallery