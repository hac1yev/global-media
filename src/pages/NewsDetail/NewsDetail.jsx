import React from 'react';
import './NewsDetail.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import newsDetailArrow from '../../assets/News/newsDetailArrow.svg';
import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const NewsDetail = () => {
  return (
    <div className='news-detail-wrapper'>  
        <div className='arrow-wrap' style={{ flex: 1 }}>
        <Link to={'/news'} className='news-detail-back-arrow'>
            <img src={newsDetailArrow} alt="news-detail-arrow" />
        </Link>
        </div>
        <div className="container news-detail-container">
            <div className='image-gallery-wrapper'>
                <span>04 İyul, 2023</span>
                <h2>Medianın gələcəyi: Rəqəmsal dövrdə jurnalistika</h2>
                <p>
                    Təməli 1752-ci ildə Qarabağ xanı Pənahəli xan tərəfindən qoyulan Şuşa şəhəri zəngin inkişaf 
                    yolu keçmiş, Azərbaycanın və bütün Cənubi Qafqazın mədəni və ictimai-siyasi həyatında müstəsna 
                    rol oynamışdır.
                </p> 
                <p>
                    Bənzərsiz tarixi görkəmini və formalaşdırdığı özünəməxsus mühiti həmişə qoruyub saxlayan bu 
                    şəhər yetirdiyi böyük şəxsiyyətləri ilə Azərbaycanın tarixi-mədəni, ictimai-siyasi həyatının 
                    mühüm mərkəzlərindən biri olmuşdur. XIX əsrin sonu və XX əsrin əvvəllərində Şuşa Qafqazın 
                    musiqi və mədəniyyət mərkəzinə çevrilmiş, “Kiçik Paris”, “Qafqazın sənət məbədi”, 
                    “Azərbaycan musiqisinin beşiyi” və “Zaqafqaziyanın konservatoriyası” adlandırılmışdır.
                </p>
                <ImageGallery className="news-image-gallery" items={images} />
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