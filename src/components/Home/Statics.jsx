import React, { useEffect, useState } from "react";
import "./Static.css";
import bottompic from "../../assets/Home/bottom.png";
import { useSpring, animated } from "react-spring";
import { useDispatch,useSelector } from "react-redux";
import { fetchData } from "../../api/fetchData";
import { homeSliceAction } from "../../store/homeSlice";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Statics = () => {
  const lang = useSelector(state => state.langReducer.lang);
  const statistics = useSelector(state => state.homeReducer.statics);
  const dispatch = useDispatch();
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    fetchData(!lang ? 'az/home' : 'en/home').then((data) => (
      dispatch(homeSliceAction.getStatics(data.Statistics))
    ))
  },[dispatch,lang])



  const changeNav = () => {
    if (window.innerWidth >= 768) {
      if (window.scrollY >= 1100) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    } else {
      if (window.scrollY >= 850) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [scrollNav]);

  return (
    <div className="static-container">
      <div className="container static-inner">
        {scrollNav ? statistics.map((item,i) => (
          <div className="static1" data-aos="zoom-in"
            data-aos-duration="700" key={i}>
            <h1>
              <Number n={item?.Number} />
            </h1>
            <p>{item?.Name_AZ}</p>
          </div>
        )) : (
          <>
            <div className="static1" data-aos="zoom-in"
              data-aos-duration="700">
              <h1>
                0
              </h1>
              <p>İştirak edən ölkələrin sayı</p>
            </div>
            <div className="static1" data-aos="zoom-in"
              data-aos-duration="700">
              <h1>
                0
              </h1>
              <p>İştirakçı sayı</p>
            </div>
            <div className="static1" data-aos="zoom-in"
              data-aos-duration="700">
              <h1>
                0
              </h1>
              <p>Media subyektlərinin sayı </p>
            </div>
          </>
        )}
      </div>
      <img className="bottom-img" src={bottompic} alt="" />
    </div>
  );
};

export default Statics;
