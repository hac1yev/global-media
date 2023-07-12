import React, { useEffect } from "react";
import "./ForumLocation.css";
import susha from '../../assets/Home/susha.png'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../api/fetchData";
import { formLocationSliceAction } from "../../store/formLocation";

const ForumLocation = () => {
  const lang = useSelector(state => state.langReducer.lang);
  const formLocationAll = useSelector((state) => state.formLocationReducer.overAllLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(!lang ? `az/location` : `en/location`).then((data) => (
      dispatch(formLocationSliceAction.getOverAll(data.Forum_Məkanı))
    ));
  }, [dispatch,lang]);


  return (
    <>
      <div className="information-section location-sec">
        <div style={{ flex: "1" }}></div>
        <div className="container-xl px-0">
          <div className="info-content loc-h3">
            <h3 className="text-center" data-aos="fade-down" data-aos-duration="700">{formLocationAll.Title}</h3>
            <span className="info-red-circle"></span>
            <div className="info-content-div" data-aos="zoom-in" data-aos-duration="700"></div>
          </div>
          <div className="loc-p" data-aos="zoom-in" data-aos-duration="700">
            <div dangerouslySetInnerHTML={{__html: formLocationAll.Information }} />      
          </div>
        </div>
        <div className="info-left-div-2" data-aos="zoom-in" data-aos-duration="700"></div>
      </div>
      <div className="container mb-4">
        <div className="explore-cont" data-aos="fade-down" data-aos-duration="700">
          <a target="_blank" rel="noreferrer" href="https://www.virtualkarabakh.az/az/project2-item/39/249/susa-virtual-seyahet.html" className="explore-susha">{!lang ? 'Şuşanı kəşf et' : 'Discover Shusha'}</a>
        </div>
      </div>
      <img style={{ width: '100%' }} src={susha} alt="" />
    </>
  );
};

export default ForumLocation;
