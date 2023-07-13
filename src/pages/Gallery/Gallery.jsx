import React, { useEffect } from "react";
import '../../pages/Media/Media.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../api/fetchData";
import { gallerySliceSction } from "../../store/gallerySlice";

const Media = () => {

  const galleryAll = useSelector((state) => state.galleryReducer.allGallery);
  const citeAll = useSelector((state) => state.galleryReducer.allCite);
  const lang = useSelector((state) => state.langReducer.lang);


  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(!lang ? 'az/media' : 'en/media').then((data) => (
      dispatch(gallerySliceSction.getAllGallery(data.Galery))
    ));
  }, [dispatch, lang]);


  useEffect(() => {
    fetchData(!lang ? 'az/media' : 'en/media').then((data) => (
      dispatch(gallerySliceSction.getAllCite(data.Sitatlar))
    ));
  }, [dispatch, lang]);

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
              Object.values(galleryAll).map((item) =>
                <a className="gallery-card" data-aos="zoom-in" data-aos-duration="700"
                  data-fancybox="gallery"
                  data-src={item?.Image}
                  data-caption={item.Content}
                  href="/" >
                  <div className="gallery-img">
                    <img src={item?.Image} alt="" />
                    <p className="time-p">22-07-2022</p>
                  </div>
                  <p className="gallery-info" dangerouslySetInnerHTML={{ __html: item.Content }} />
                </a>
              )
            }
          </div>
          <hr />
          <div className="gallery-more-div">
            <button className="gallery-more">
              {!lang ? 'Daha Çox' : 'More'}
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

            {Object.values(citeAll).map((data) =>
              <a data-fancybox="gallery1"
                  data-src={data?.Image}
                  data-caption={data.Content_Az}
                  href="/"  className="gallery-card" data-aos="zoom-in" data-aos-duration="700">
              <div className="gallery-img">
                <img src={data.Image} alt="" />
              </div>
              <p className="gallery-info" dangerouslySetInnerHTML={{__html: data.Content_Az}} />
            </a>
            )}

          </div>
          <hr />
          <div className='gallery-more-div mb-3'>
            <button className="gallery-more">
              {!lang ? 'Daha Çox' : 'More'}
            </button>
          </div>
        </div>
        <div className="media-right-div"></div>
      </div>
    </>
  );
};

export default Media;
