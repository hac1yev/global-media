import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/Footer/gmf_logo_az.svg";
import footer_logo_en from "../../assets/Footer/gmf_logo_en.svg";
import gray from "../../assets/Footer/gray.png";
import white from "../../assets/Footer/white.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const lang = useSelector((state) => state.langReducer.lang);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo-content">
              <div className="footer-img">
                <img src={!lang ? footer_logo : footer_logo_en} alt="footer-logo" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 footer-col-lg-3 footer-links-col1">
            <div className="footer-links">
              <span>{!lang ? 'Naviqasiya' : 'Navigation'}</span>
              <Link to="/about-forum" onClick={() => window.scrollTo(0,0)}>
                {!lang ? 'Ümumi məlumat' : 'Overall Info' }
              </Link>
              <Link to="/forum-location" onClick={() => window.scrollTo(0,0)}>
                {!lang ? 'Forum məkanı' : 'Forum Location'}
              </Link>
              <Link to="/agenda-spiker" onClick={() => window.scrollTo(0,0)}>
                {!lang ? 'Sessiya və Spikerlər' : 'Session and Speakers'}
              </Link>
              <Link to="/gallery" onClick={() => window.scrollTo(0,0)}>
                {!lang ? 'Xəbərlər' : 'News'}
              </Link>
              <Link to="/news" onClick={() => window.scrollTo(0,0)}>
                {!lang ? 'Qalereya' : 'Gallery'}
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 footer-col-lg-3 footer-links-col">
            <div className="footer-links">
              <span>{!lang ? 'Bizi İzləyin' : 'Follow Us'}</span>
              <div className="footer-sosial-icons">
                <a
                  href="https://www.facebook.com/mediaforum2023/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF
                    style={{ marginRight: "16px", width: "12px", height: "20px" }}
                  />
                </a>
                <a href="https://twitter.com/GMFShusha2023" target="_blank" rel="noreferrer">
                  <FaTwitter
                    style={{ marginRight: "11px", width: "20px", height: "20px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/globalmediaforum/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    style={{ marginRight: "10px", width: "20px", height: "20px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 footer-col-lg-3 footer-links-col1">
            <div className="footer-links">
              <span>{!lang ? 'Bizimlə əlaqə' : 'Contact us'}</span>
              <Link>info@globalmediaforum.az</Link>
            </div>
          </div>
          <div className="col-md-6 footer-copyright">
            <span>
              Copyright © 2023. &nbsp;&nbsp;&nbsp;{" "}
              <a
                target="_blank"
                href="https://www.butagrup.com.tr/?lang=az"
                rel="noreferrer"
              >
                <img
                  id="footer-logo"
                  alt=""
                  src={gray}
                  onMouseOver={(e) => (e.currentTarget.src = `${white}`)}
                  onMouseLeave={(e) => (e.currentTarget.src = `${gray}`)}
                />
              </a>
              &nbsp;&nbsp;&nbsp; {!lang ? 'Bütün hüquqlar qorunur.' : 'All rights reserved.'}
            </span>
          </div>
          <div className="col-md-6 footer-privacy">
            <Link to="/privacy" onClick={() => window.scrollTo(0,0)} style={{ color: '#fff' }}>{!lang ? 'Məxfilik Siyasəti' : 'Privacy Policy'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
