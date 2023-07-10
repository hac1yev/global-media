import "./Information.css";
import info_img from "../../assets/Home/info-img.png";
import info_right_banner from "../../assets/Home/info-right-banner.png";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../../api/fetchData";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// import { homeSliceAction } from "../../store/homeSlice";


const Information = () => {
  // const about = useSelector((state) => state.homeReducer.about);
  // console.log("About Data" , about)
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchData(`home`).then((data) => dispatch(homeSliceAction.getAbout(data.About)));
  // }, []);

  useEffect(() => {
    AOS.init({ disable: 'mobile' });
  }, [])

  return (
    <div className="information-section">
      <div className="info-left-div"  data-aos="zoom-in" data-aos-duration="700"></div>
      <div className="container">
        <div className="info-content">
          <div className="info-content-div" data-aos="zoom-in" data-aos-duration="700"></div>
          <span className="info-red-circle" data-aos="zoom-in" data-aos-duration="700"></span>
          <div className="info-content-img">
            <h3 data-aos="zoom-in" data-aos-duration="700">
              Qlobal informasiya mühitinin modernləşməsi, qabaqcıl texnologiyaların media sahəsində geniş tətbiqi, ümumilikdə rəqəmsallaşma prosesləri dünya üzrə yeni və dinamik media mühitinin formalaşmasına gətirib çıxarmışdır. Yeni media mühitində müşahidə edilən tendensiyaların geniş spektrdan təhlili, media sahəsində beynəlxalq əməkdaşlığın genişləndirilməsi və təkmilləşdirilməsi, bu sahədə aparıcı trendlərin izlənilməsi, innovativ təkamülün yaradıcı sənayelər üçün yaratdığı imkanların tətbiq mexanizmlərinin araşdırılması məqsədilə 2023-ci il 21-23 iyun tarixlərində Azərbaycan Respublikasında, Şuşa şəhərində “4-cü Sənaye İnqilabı Dövründə Yeni Media” mövzusunda Qlobal Media Forum keçiriləcəkdir.
            </h3>
            <img data-aos="zoom-in" data-aos-duration="700" src={info_img} alt="info_img" />
          </div>
        </div>
      </div>
      <div className="info-right-div"></div>
      <img
        src={info_right_banner}
        className="info-right-banner"
        alt="info-right-banner"
      />
    </div>
  );
};

export default Information;
