import React, { useEffect } from 'react';
import './GalleryInner.css';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { useParams } from 'react-router-dom';
import { gallerySliceAction } from '../../store/gallerySlice';

const GalleryInner = () => {
    const galleryInner = useSelector(state => state.galleryReducer.galleryInner);
    const galleryInnerText = useSelector(state => state.galleryReducer.galleryInnerText);
    const dispatch = useDispatch();
    const { galleryId } = useParams();
    let sliderImages = [];

    const innerDesc = galleryInnerText.slice(0,20)

    console.log(innerDesc)

    useEffect(() => {
      fetchData(`media/${galleryId}`).then((data) => (
        dispatch(gallerySliceAction.getGalleryInner(data))
      ))
    }, [dispatch,galleryId]);

    sliderImages.push({
      original: galleryInner[0],
      thumbnail: galleryInner[0]
    })
  
    for(let i=0;i<galleryInner[1]?.length;i++){
      sliderImages.push({
        original: galleryInner[1][i].Name,
        thumbnail: galleryInner[1][i].Name
      })
    }

    console.log(galleryInner[0]);

    return (
        <div>
            <div className="container">
                <div className="row">
                  <div className='col-12 my-3'>
                      <h3 className='gallery-inner-h3' dangerouslySetInnerHTML={{ __html: galleryInnerText }}></h3>
                    </div>
                    <div className="col-12">
                        <ReactImageGallery className="news-image-gallery" items={[...sliderImages]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryInner;