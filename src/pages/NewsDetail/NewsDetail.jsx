import React, { useEffect } from 'react';
import './NewsDetail.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import newsDetailArrow from '../../assets/News/newsDetailArrow.svg';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { newsSliceAction } from '../../store/newsSlice';

// const images = [
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
// ];

const NewsDetail = () => {
  const lang = useSelector((state) => state.langReducer.lang);
  const newsDetail = useSelector(state => state.newsReducer.newsDetail);
  let sliderImages = [];
  const { newsId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(!lang ? `az/news/${newsId}` : `en/news/${newsId}`).then((data) => {
     dispatch(newsSliceAction.getNewsDetail(data))
    });
  },[lang,newsId,dispatch]);

  // console.log(newsDetail);
  sliderImages.push({
    original: newsDetail[0]?.Image,
    thumbnail: newsDetail[0]?.Image
  })

  for(let i=0;i<newsDetail[1]?.length;i++){
    sliderImages.push({
      original: newsDetail[1][i].Name,
      thumbnail: newsDetail[1][i].Name
    })
  }

  return (
    <div className='news-detail-wrapper'>  
        <div className='arrow-wrap' style={{ flex: 1 }}>
        <Link to={'/news'} className='news-detail-back-arrow'>
            <img src={newsDetailArrow} alt="news-detail-arrow" />
        </Link>
        </div>
        <div className="container news-detail-container">
            <div className='image-gallery-wrapper'>
                <span>{newsDetail.Time_converted}</span>
                <h2 dangerouslySetInnerHTML={{ __html: newsDetail[0]?.Title }}></h2>
                <p dangerouslySetInnerHTML={{ __html: newsDetail[0]?.Content }}>
                </p> 
                <ImageGallery className="news-image-gallery" items={sliderImages} />
                {/* <div className='news-share-info'>
                    <span>Məlumatı paylaş</span>
                    <div className='news-social-icons'>
                        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer" className='news-social-icon'>
                            <FaFacebookF className='social-icon' />
                        </a>
                        <a href='https://twitter.com/' target='_blank' rel="noreferrer" className='news-social-icon'>
                            <FaTwitter className='social-icon' />
                        </a>
                        <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer" className='news-social-icon'>
                            <FaLinkedinIn className='social-icon' />
                        </a>
                        <a href='https://web.telegram.org/a/' target='_blank' rel="noreferrer" className='news-social-icon'>
                           <FaTelegramPlane className='social-icon' />
                        </a>
                        <a href='https://web.whatsapp.com/' target='_blank' rel="noreferrer" className='news-social-icon'>
                            <FaWhatsapp className='social-icon' />
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
        <div style={{ flex: 1 }}></div>
    </div>
  );
};

export default NewsDetail;