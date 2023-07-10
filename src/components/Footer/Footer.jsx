import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/Footer/GMF-footer-logo.png";
import gray from "../../assets/Footer/gray.png";
import white from "../../assets/Footer/white.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo-content">
              <div className="footer-img">
                <img src={footer_logo} alt="footer-logo" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 footer-col-lg-3 footer-links-col1">
            <div className="footer-links">
              <span>Naviqasiya</span>
              <Link to="/about-forum" onClick={() => window.scrollTo(0,0)}>Ümumi məlumat</Link>
              <Link to="/forum-location" onClick={() => window.scrollTo(0,0)}>Forum məkanı</Link>
              <Link to="/agenda-spiker" onClick={() => window.scrollTo(0,0)}>Sessiya və Spikerlər</Link>
              <Link to="/gallery" onClick={() => window.scrollTo(0,0)}>Qalereya</Link>
              <Link to="/news" onClick={() => window.scrollTo(0,0)}>Xəbərlər</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 footer-col-lg-3 footer-links-col">
            <div className="footer-links">
              <span>Bizi İzləyin</span>
              <div className="footer-sosial-icons">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF
                    style={{ marginRight: "16px", width: "12px", height: "20px" }}
                  />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <FaTwitter
                    style={{ marginRight: "11px", width: "20px", height: "20px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
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
              <span>Bizimlə əlaqə</span>
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
              &nbsp;&nbsp;&nbsp; Bütün hüquqlar qorunur.
            </span>
          </div>
          <div className="col-md-6 footer-privacy">
            <span>Məxfilik Siyasəti</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
