import React, { useEffect } from 'react'
// import newsCard from "../../assets/News/thumb.jpg";
import { Link } from "react-router-dom";
import '../../pages/Media/Media.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { newsSliceAction } from "../../store/newsSlice";


// const newsData = [
// {
//     id: 'n1',
//     img: newsCard,
//     title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
//     time: '22-07-2022',
// },
// {
//     id: 'n2',
//     img: newsCard,
//     title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
//     time: '22-07-2022',
// },
// {
//     id: 'n3',
//     img: newsCard,
//     title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
//     time: '22-07-2022',
// },
// {
//     id: 'n4',
//     img: newsCard,
//     title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
//     time: '22-07-2022',
// },
// {
//     id: 'n5',
//     img: newsCard,
//     title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
//     time: '22-07-2022',
// },
// {
//     id: 'n6',
//     img: newsCard,
//     title: 'Şuşada Beynəlxalq Media Forumun açılış mərasimi keçirilib',
//     time: '22-07-2022',
// },
// ];

const News = () => {
  const lang = useSelector(state => state.langReducer.lang);
  const news = useSelector(state => state.newsReducer.news);
  const dispatch = useDispatch();

const handleClick = () => {
    window.scrollTo(0,0);    
};

useEffect(() => {
    fetchData(!lang ? 'az/news' : 'en/news').then((data) => (
     dispatch(newsSliceAction.getAllNews(data.Xəbərlər))
    ))
}, [dispatch,lang]);

console.log(news)

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
        {news.map((item,i) => (
         <Link onClick={handleClick} to={`/news/${item.id}`} key={i} className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
            <div className="gallery-img">
             <img src={item.Image} alt={item.Content_Az} />
             <p className="time-p">{item.time}</p>
            </div>
            <p className="gallery-info" dangerouslySetInnerHTML={{ __html: item.Content_Az }}>
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