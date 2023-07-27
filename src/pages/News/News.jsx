import React, { useEffect, useState } from 'react'
// import newsCard from "../../assets/News/thumb.jpg";
import { Link } from "react-router-dom";
import '../../pages/Media/Media.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { newsSliceAction } from "../../store/newsSlice";


const News = () => {

   const newsPerRow = 6;

  const lang = useSelector(state => state.langReducer.lang);
  const news = useSelector(state => state.newsReducer.news);
  const dispatch = useDispatch();

  const [next, setNext] = useState(newsPerRow);

  const handleMoreNews = () => {
   setNext(next + newsPerRow);
 };

const handleClick = () => {
    window.scrollTo(0,0);    
};

useEffect(() => {
    fetchData(!lang ? 'az/news' : 'en/news').then((data) => (
     dispatch(newsSliceAction.getAllNews(data.Xəbərlər))
    ))
}, [dispatch,lang]);





return (
    <div className="media-section latest-section">
    <div className="media-left-div" data-aos="zoom-in" data-aos-duration="700"></div>
    <div className="container">
     <div className="media-content">
        <div className="media-content-div" data-aos="zoom-in" data-aos-duration="700"></div>
        <span className="media-red-circle"></span>
        <h3 className='mb-3'>{!lang ? 'Xəbərlər' : 'News'}</h3>
     </div>
     <div className="gallery-con">
        {news.slice(0, next)?.map((item,i) => (
         <Link onClick={handleClick} to={`/news/${item.Id}`} key={i} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
            <div className="gallery-img">
             <img src={item.Image} alt={item.Content_Az} />
             <p className="time-p">{item.Time_converted}</p>
            </div>
            <p className="gallery-info" dangerouslySetInnerHTML={{ __html: item.Title }}>
            </p>
         </Link>
        ))}
     </div>
     <hr />
     <div className='gallery-more-div'>
     
            {next < news?.length && (
              <button onClick={handleMoreNews} className="gallery-more">
              {!lang ? 'Daha Çox' : 'More'}
            </button>
            )}

     </div>
    </div>
    <div className="media-right-div"></div>
</div>
)
}

export default News