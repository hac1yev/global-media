import React, { useEffect, useState } from "react";
import "./Static.css";
import bottompic from "../../assets/Home/bottom.png";
import { useSpring, animated } from "react-spring";

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

  const [scrollNav, setScrollNav] = useState(false);

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
        {scrollNav ? (<>
          <div className="static1" data-aos="zoom-in"
            data-aos-duration="700">
            <h1>
              <Number n={30} />
            </h1>
            <p>İştirak edən ölkələrin sayı</p>
          </div>
          <div className="static1" data-aos="zoom-in"
            data-aos-duration="700">
            <h1>
              <Number n={250} />
            </h1>
            <p>İştirakçı sayı</p>
          </div>
          <div className="static1" data-aos="zoom-in"
            data-aos-duration="700">
            <h1>
              <Number n={62} />
            </h1>
            <p>Media subyektlərinin sayı </p>
          </div></>) : (
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
