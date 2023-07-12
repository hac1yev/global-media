import React from "react";
import '../../pages/Media/Media.css'
import galleryCard from "../../assets/Home/gallerycard.png";
import sitatCard from "../../assets/Home/sitat.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Media = () => {

  const lang = useSelector((state) => state.langReducer.lang);
  return (
    <>
      <div className="media-section">
        <div className="media-left-div" data-aos="zoom-in" data-aos-duration="700"></div>
        <div className="container">
          <div className="media-content">
            <div className="media-content-div" data-aos="zoom-in" data-aos-duration="700"></div>
            <span className="media-red-circle"></span>
            <h3>{!lang ? 'Qalereya' : 'Gallery'}</h3>
          
          </div>
          <div className="gallery-con">
            <a className="gallery-card" data-aos="zoom-in" data-aos-duration="700"
              data-fancybox="gallery"
              data-src={galleryCard}
              data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
              href="/" >
              <div className="gallery-img">
                <img src={galleryCard} alt="" />
                <p className="time-p">22-07-2022</p>
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </a>


            <a className="gallery-card" data-aos="zoom-in" data-aos-duration="700"
              data-fancybox="gallery"
              data-src={galleryCard}
              data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
              href="/" >
              <div className="gallery-img">
                <img src={galleryCard} alt="" />
                <p className="time-p">22-07-2022</p>
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </a>

            <a className="gallery-card" data-aos="zoom-in" data-aos-duration="700"
              data-fancybox="gallery"
              data-src={galleryCard}
              data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
              href="/" >
              <div className="gallery-img">
                <img src={galleryCard} alt="" />
                <p className="time-p">22-07-2022</p>
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </a>

            <a className="gallery-card" data-aos="zoom-in" data-aos-duration="700"
              data-fancybox="gallery"
              data-src={galleryCard}
              data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
              href="/" >
              <div className="gallery-img">
                <img src={galleryCard} alt="" />
                <p className="time-p">22-07-2022</p>
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </a>

            <a className="gallery-card" data-aos="zoom-in" data-aos-duration="700"
              data-fancybox="gallery"
              data-src={galleryCard}
              data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
              href="/" >
              <div className="gallery-img">
                <img src={galleryCard} alt="" />
                <p className="time-p">22-07-2022</p>
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </a>

            <a className="gallery-card" data-aos="zoom-in" data-aos-duration="700"
              data-fancybox="gallery"
              data-src={galleryCard}
              data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
              href="/" >
              <div className="gallery-img">
                <img src={galleryCard} alt="" />
                <p className="time-p">22-07-2022</p>
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </a>
          </div>
          <hr />
          <div className="gallery-more-div">
            <button className="gallery-more">
             {!lang ? ' Daha Çox' : 'More'}
            </button>
          </div>
        </div>
        <div className="media-right-div"></div>
      </div>

      <div className="media-section">
        <div className="media-left-div" data-aos="zoom-in" data-aos-duration="700"></div>
        <div className="container">
          <div className="media-content">
            <div className="media-content-div" data-aos="zoom-in" data-aos-duration="700"></div>
            <span className="media-red-circle"></span>
            <h3>{!lang ? 'Sitatlar' : 'Quotes'}</h3>
          </div>
          <div className="gallery-con">
            <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
              <div className="gallery-img">
                <img src={sitatCard} alt="" />
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </Link>

            <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
              <div className="gallery-img">
                <img src={sitatCard} alt="" />
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </Link>

            <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
              <div className="gallery-img">
                <img src={sitatCard} alt="" />
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </Link>

            <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
              <div className="gallery-img">
                <img src={sitatCard} alt="" />
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </Link>

            <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
              <div className="gallery-img">
                <img src={sitatCard} alt="" />
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </Link>

            <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
              <div className="gallery-img">
                <img src={sitatCard} alt="" />
              </div>
              <p className="gallery-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id sem quis quam laoreet bibendum.
              </p>
            </Link>
          </div>
          <hr />
          <div className='gallery-more-div mb-3'>
            <button className="gallery-more">
             {!lang ? ' Daha Çox' : 'More'}
            </button>
          </div>
        </div>
        <div className="media-right-div"></div>
      </div>
    </>
  );
};

export default Media;
