import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/Home/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { langSliceAction } from "../../store/langSlice";
import { AiFillCaretRight } from 'react-icons/ai';
import right from '../../assets/Home/right.png'
import down from '../../assets/Home/down.png'

const Header = () => {
  const [isForumHover, setIsForumHover] = useState(false);
  const [isMediaHover, setIsMediaHover] = useState(false);
  const [isMaterialHover, setIsMaterialHover] = useState(false);
  const [closeMenu, setCloseMenu] = useState(true);
  const [isDropOpen,setIsDropOpen] = useState(false);
  const lang = useSelector((state) => state.langReducer.lang);
  const dispatch = useDispatch();

  const handleHoverForum = () => {
    setIsForumHover(true);
  };

  const handleLeaveForum = () => {
    setIsForumHover(false);
  };

  const handleHoverForum2 = () => {
    setIsMediaHover(true);
  };

  const handleLeaveForum2 = () => {
    setIsMediaHover(false);
  };

  const handleHoverForum3 = () => {
    setIsMaterialHover(true);
  };

  const handleLeaveForum3 = () => {
    setIsMaterialHover(false);
  };

  const handleClick = () => {
    if (window.innerWidth < 675) {
      if (!isForumHover) {
        setIsForumHover(true);
        return;
      }else{
        setIsForumHover(false);
      }
    }
    window.scrollTo(0, 0);
    
  };

  const handleClick2 = () => {
    if (window.innerWidth < 675) {
      if (!isMediaHover) {
        setIsMediaHover(true);
        return;
      }else{
        setIsMediaHover(false);
      }
    }
    window.scrollTo(0, 0);
  };

  const handleClick3 = () => {
    if (window.innerWidth < 675) {
      if (!isMaterialHover) {
        setIsMaterialHover(true);
        return;
      }else{
        setIsMaterialHover(false);
      }
    }
    window.scrollTo(0, 0);
  };

  const handleCloseMenu = () => {
    window.scrollTo(0, 0);
    setCloseMenu(true);
  };

  const handleMenuToggle = () => {
    setCloseMenu((prev) => !prev);
  };

  // LANG TEMASI
  const getChangeLang = (e) => {
    dispatch(langSliceAction.replaceLang());
    window.localStorage.setItem("lang", lang ? false : true);
    window.location.reload();
  };

  const handleLangEnter = () => {
    setIsDropOpen(true);
  };

  const handleLangLeave = () => {
    setIsDropOpen(false);
  };

  return (
    <div className="header-wrapper">
      <header className="container">
        <div
          className={
            closeMenu
              ? "header-container header-container-close"
              : "header-container"
          }
        >
          <input type="checkbox" name="" id="toggle" />
          <Link className="navbar-brand" to="/" onClick={handleCloseMenu}>
            <img src={logo} alt="" />
          </Link>

          <li className="nav-item lang-item2">
                <div className="lang-option" onMouseEnter={handleLangEnter} onMouseLeave={handleLangLeave}>
                  {!lang && <span className={!lang ? 'active-sp' : ''}>AZE</span>}
                  {lang && <span className={lang ? 'active-sp' : ''}>ENG</span>}
                  {isDropOpen && <div className="lang-dropdown">
                    {lang && <span onClick={getChangeLang}>AZE</span>}
                    {!lang && <span onClick={getChangeLang}>ENG</span>}
                  </div>}
                </div>
            </li>

          <label
            for="toggle"
            className="navbar-toggler"
            onClick={handleMenuToggle}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>

          <ul className="nav-list">
            <li
              className="nav-item forum-nav"
              onClick={handleClick}
              onMouseEnter={handleHoverForum}
              onMouseLeave={handleLeaveForum}
            >
             <div>
              <span>{!lang ? 'Forum haqqında' : 'About Forum'}</span>
                {isForumHover && (
                  <div className="nav-forum-dropdown">
                    <Link to="/about-forum" onClick={handleCloseMenu}>
                      <AiFillCaretRight className="arrow-right" />
                      {!lang ? 'Ümumi məlumat' : 'Overall Info' }
                    </Link>
                    <Link to="/forum-location" onClick={handleCloseMenu}>
                      <AiFillCaretRight className="arrow-right" />
                      {!lang ? 'Forum məkanı' : 'Forum Location'}
                    </Link>
                  </div>
                )}
             </div>
              <img className="dropdown-arrow" src={isForumHover ? down : right} alt="" />
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={handleCloseMenu}
                to="/agenda-spiker"
              >
                {!lang ? 'Sessiya və Spikerlər' : 'Session and Speakers'}
              </Link>
            </li>
            <li
              className="nav-item forum-nav"
              onClick={handleClick3}
              onMouseEnter={handleHoverForum3}
              onMouseLeave={handleLeaveForum3}
            >
             <div>
              <span> {!lang ? 'Forumun materialları' : 'Forum materials'} </span>
                {isMaterialHover && (
                  <div className="nav-forum-dropdown">
                    <Link to="/" onClick={handleCloseMenu}>
                      <AiFillCaretRight className="arrow-right" />
                      Proqram
                    </Link>
                    <Link to="/" onClick={handleCloseMenu}>
                      <AiFillCaretRight className="arrow-right" />
                      Konsepsiya sənədi
                    </Link>
                  </div>
                )}
             </div>
             <img className="dropdown-arrow" src={isMaterialHover ? down : right} alt="" />
            </li>
            <li
              className="nav-item forum-nav"
              onClick={handleClick2}
              onMouseEnter={handleHoverForum2}
              onMouseLeave={handleLeaveForum2}
            >
              <div>
              <span>Media</span>
              {isMediaHover && (
                <div className="nav-forum-dropdown2">
                  <Link to="/news" onClick={handleCloseMenu}>
                    <AiFillCaretRight className="arrow-right" />
                    Xəbərlər
                  </Link>
                  <Link to="/gallery" onClick={handleCloseMenu}>
                    <AiFillCaretRight className="arrow-right" />
                    Qalereya
                  </Link>
                </div>
              )}
              </div>
              
             <img className="dropdown-arrow" src={isMediaHover ? down : right} alt="" />

            </li>
            <li className="nav-item lang-item">
                <div className="lang-option" onMouseEnter={handleLangEnter} onMouseLeave={handleLangLeave}>
                  {!lang && <span className={!lang ? 'active-sp' : ''}>AZE</span>}
                  {lang && <span className={lang ? 'active-sp' : ''}>ENG</span>}
                  {isDropOpen && <div className="lang-dropdown">
                    {lang && <span onClick={getChangeLang}>AZE</span>}
                    {!lang && <span onClick={getChangeLang}>ENG</span>}
                  </div>}
                </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
