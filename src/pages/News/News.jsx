import React from 'react'
import newsCard from "../../assets/News/thumb.jpg";
import { Link } from "react-router-dom";
import '../../pages/Media/Media.css'

const News = () => {
  return (
    <div className="media-section latest-section">
    <div className="media-left-div" data-aos="zoom-in" data-aos-duration="700"></div>
    <div className="container">
      <div className="media-content">
        <div className="media-content-div" data-aos="zoom-in" data-aos-duration="700"></div>
        <span className="media-red-circle"></span>
        <h3 className='mb-3'>Xəbərlər</h3>
      </div>
      <div className="gallery-con">
        <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
          <div className="gallery-img">
            <img src={newsCard} alt="" />
            <p className="time-p">22-07-2022</p>
          </div>
          <p className="gallery-info">
            Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib
          </p>
        </Link>

        <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
          <div className="gallery-img">
            <img src={newsCard} alt="" />
            <p className="time-p">22-07-2022</p>
          </div>
          <p className="gallery-info">
            Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib
          </p>
        </Link>

        <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
          <div className="gallery-img">
            <img src={newsCard} alt="" />
            <p className="time-p">22-07-2022</p>
          </div>
          <p className="gallery-info">
            Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib
          </p>
        </Link>

        <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
          <div className="gallery-img">
            <img src={newsCard} alt="" />
            <p className="time-p">22-07-2022</p>
          </div>
          <p className="gallery-info">
            Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib
          </p>
        </Link>

        <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
          <div className="gallery-img">
            <img src={newsCard} alt="" />
            <p className="time-p">22-07-2022</p>
          </div>
          <p className="gallery-info">
            Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib
          </p>
        </Link>

        <Link to={''} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
          <div className="gallery-img">
            <img src={newsCard} alt="" />
            <p className="time-p">22-07-2022</p>
          </div>
          <p className="gallery-info">
            Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib
          </p>
        </Link>
      </div>
      <hr />
      <div className='gallery-more-div'>
        <button className="gallery-more">
          Daha Çox
        </button>
      </div>
    </div>
    <div className="media-right-div"></div>
  </div>
  )
}

export default News