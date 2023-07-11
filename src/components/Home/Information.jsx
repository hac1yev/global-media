import "./Information.css";
import info_right_banner from "../../assets/Home/info-right-banner.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../api/fetchData";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { homeSliceAction } from "../../store/homeSlice";


const Information = () => {
  const lang = useSelector(state => state.langReducer.lang);
  const about = useSelector((state) => state.homeReducer.about);
  const aboutImg = useSelector((state) => state.homeReducer.aboutImg);
  console.log("About Data" , about)
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(!lang ? `az/home` : `en/home`).then((data) => (
      dispatch(homeSliceAction.getAbout(data.Məlumat))
    ));
  }, [dispatch,lang]);

  useEffect(() => {
    fetchData(!lang ? `az/home` : `en/home`).then((data) => (
      dispatch(homeSliceAction.getAboutImg(data.Məlumat_Şəkli))
    ));
  }, [dispatch,lang]);

  useEffect(() => {
    AOS.init({ disable: 'mobile' });
  }, []);

  return (
    <div className="information-section">
      <div className="info-left-div"  data-aos="zoom-in" data-aos-duration="700"></div>
      <div className="container">
        <div className="info-content">
          <div className="info-content-div" data-aos="zoom-in" data-aos-duration="700"></div>
          <span className="info-red-circle" data-aos="zoom-in" data-aos-duration="700"></span>
          <div className="info-content-img">
            <h3 dangerouslySetInnerHTML={{ __html: about.Information }} data-aos="zoom-in" data-aos-duration="700">
            </h3>
            <img data-aos="zoom-in" data-aos-duration="700" src={aboutImg.Image} alt="info_img" />
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
