import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
// import videoPic from "../../assets/Home/videoSlider.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../api/fetchData";
import { homeSliceAction } from "../../store/homeSlice";

const Sliders = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayStart: false,
    draggable: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderData = useSelector(state => state.homeReducer.videos);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.langReducer.lang);


  console.log(sliderData)


  useEffect(() => {
    fetchData(!lang ? 'az/home' : 'en/home')
      .then(data => dispatch(homeSliceAction.getVideos(data.Videos)))
  }, [dispatch , lang]);

  return (
    <div className="container slider-container mt-5">
      <Slider {...settings}>

        {/* {
          sliderData.map(item => 
            <div className="swiper-content" key={item.Id}>
              <a
                href={item.Name}
                data-fancybox="gallery"
                data-caption="Caption #1"
              >
                <img alt="thumbnail" src={videoPic} />
              </a>
            </div>
          )
        } */}

      </Slider>
    </div>
  );
};

export default Sliders;
