import React from 'react'
import newsCard from "../../assets/News/thumb.jpg";
import { Link } from "react-router-dom";
import '../../pages/Media/Media.css'

const newsData = [
  {
    id: 'n1',
    img: newsCard,
    title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
    time: '22-07-2022', 
  },
  {
    id: 'n2',
    img: newsCard,
    title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
    time: '22-07-2022', 
  },
  {
    id: 'n3',
    img: newsCard,
    title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
    time: '22-07-2022', 
  },
  {
    id: 'n4',
    img: newsCard,
    title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
    time: '22-07-2022', 
  },
  {
    id: 'n5',
    img: newsCard,
    title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
    time: '22-07-2022', 
  },
  {
    id: 'n6',
    img: newsCard,
    title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
    time: '22-07-2022', 
  },
];

const News = () => {
  const handleClick = () => {
    window.scrollTo(0,0);    
  };

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
        {newsData.map((item) => (
          <Link onClick={handleClick} to={`/news/${item.id}`} key={item.id} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
            <div className="gallery-img">
              <img src={item.img} alt={item.id} />
              <p className="time-p">{item.time}</p>
            </div>
            <p className="gallery-info">
              {item.title}
            </p>
          </Link>
        ))}
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