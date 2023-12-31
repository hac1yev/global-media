import React, { useEffect, useState } from "react";
import '../../pages/Media/Media.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../api/fetchData";
import { gallerySliceAction } from "../../store/gallerySlice";
import { Link } from "react-router-dom";



const Media = () => {
  const imagePerRow = 6;
  const citePerRow = 6;

  const galleryAll = useSelector((state) => state.galleryReducer.allGallery);
  const citeAll = useSelector((state) => state.galleryReducer.allCite);
  const lang = useSelector((state) => state.langReducer.lang);

  const [next, setNext] = useState(imagePerRow);
  const [next2, setNext2] = useState(citePerRow);

  console.log(next2)
  
  const handleMoreImage = () => {
      setNext(next + imagePerRow);
    };


    const handleMoreCite = () => {
      setNext2(next2 + citePerRow);
    };



  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(!lang ? 'az/media' : 'en/media').then((data) => (
      dispatch(gallerySliceAction.getAllGallery(data.Galery))
    ));
  }, [dispatch, lang]);

  useEffect(() => {
    fetchData(!lang ? 'az/media' : 'en/media').then((data) => (
      dispatch(gallerySliceAction.getAllCite(data.Sitatlar))
    ));
  }, [dispatch, lang]);

  const handleLinkTitle = (title) => {
    dispatch(gallerySliceAction.getGalleryInnerText(title));
  };

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
            {
              Object.values(galleryAll).slice(0, next)?.map((item) =>
                <Link className="gallery-card" key={item.id} data-aos="zoom-in" data-aos-duration="700"
                  data-fancybox="gallery"
                  data-src={item?.Image}
                  data-caption={item.Title}
                  to={`/gallery/${item.Id}`} 
                  onClick={handleLinkTitle.bind(null,item.Content)}
                >
                  <div className="gallery-img">
                    <img src={item?.Image} alt="" />
                    <p className="time-p">22-07-2022</p>
                  </div>
                  <p className="gallery-info" dangerouslySetInnerHTML={{ __html: item.Content }} />
                </Link>
              )
            }
          </div>
          <hr />
          <div className="gallery-more-div">

            {next < Object.keys(galleryAll).length && (
              <button onClick={handleMoreImage} className="gallery-more">
              {!lang ? 'Daha Çox' : 'More'}
            </button>
            )}
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

            {Object.values(citeAll).slice(0, next2).map((data) =>
              <Link
                key={data.Id}
                data-src={data?.Image}
                data-caption={data.Content_Az}
                className="gallery-card" data-aos="zoom-in" data-aos-duration="700"
                to="/"  
              >
              <div className="gallery-img">
                <img src={data.Image} alt="" />
              </div>
              <p className="gallery-info" dangerouslySetInnerHTML={{__html: data.Content_Az}} />
            </Link>
            )}

          </div>
          <hr />
          <div className='gallery-more-div mb-3'>
          {next2 < Object.keys(citeAll).length && (
              <button onClick={handleMoreCite} className="gallery-more">
              {!lang ? 'Daha Çox' : 'More'}
            </button>
            )}
          </div>
        </div>
        <div className="media-right-div"></div>
      </div>
    </>
  );
};

export default Media;
