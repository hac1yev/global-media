import React, { useEffect } from "react";
import "./FAQ.css";
import { useDispatch, useSelector } from "react-redux";
import union from "../../assets/Home/union.png";
import { Link } from "react-router-dom";
import { fetchData } from "../../api/fetchData";
import { homeSliceAction } from "../../store/homeSlice";

const FAQ = () => {
  const agenda_info = useSelector(state => state.homeReducer.agenda_info);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData('home').then((data) => (
      dispatch(homeSliceAction.getAgendaInfo(data.Agenda_Məlumat))
    ))
  }, [dispatch]);

  const handleClose = () => {
    window.scrollTo(0, 0);
  };

  console.log(agenda_info)
  return (
    <div className="faq-container row">
      <div className="accord col-lg-6">
        <div data-aos="zoom-in" data-aos-duration="700">
          <h1>{agenda_info.Title}</h1>
          <p dangerouslySetInnerHTML={{ __html: agenda_info.Information }}>
           
          </p>
          <div className="session-div">
            <span className="anime-drop">→</span>{" "}
            <Link
              className="session-link"
              onClick={handleClose}
              to={"/agenda-spiker"}
            >
              Sessiyalar və spikerlər
            </Link>
          </div>
        </div>
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          src={union}
          alt=""
        />
      </div>
      <div className="photo col-lg-6">
        <ul
          class="nav nav-tabs"
          id="myTab"
          role="tablist"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Gün 1<p>22.07.2023</p>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Gün 2 <br />
              <p>23.07.2023</p>
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div
              className="tab-data1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div>
                <p>08:30-09:30</p>
                <p>Qeydiyyat</p>
              </div>
              <div>
                <p>10:00-13:00</p>
                <p>Forum iştirakçıları ilə rəsmi görüş</p>
              </div>
              <div>
                <p>13:30-14:45</p>
                <p>Nahar Fasiləsi</p>
              </div>
              <div>
                <p>15:00-16:00</p>
                <p>Açılış mərasimi: Rəsmi çıxışlar</p>
              </div>
              <div>
                <p>16:00-16:30</p>
                <p>Çay və qəhvə fasiləsi</p>
              </div>
              <div>
                <p>16:45-18:00</p>
                <p>
                  <p>Panel müzakirə: </p>
                  <span>
                    Medianın gələcəyi: Ənənəvi media üçün növbəti addımlar;
                    Rəqəmsal transformasiya diqqət mərkəzində
                  </span>
                </p>
              </div>
              <div>
                <p>19:30-21:00</p>
                <p>Rəsmi ziyafət və bədii hissə</p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="tab-data1">
              <div>
                <p>10:00-11:15</p>
                <p>
                  <p>Panel müzakirə: </p>
                  <span>
                    {" "}
                    Müasir informasiya mühitində media menecmenti və dayanıqlı
                    media biznes modellərinin yaradılması
                  </span>
                </p>
              </div>
              <div>
                <p>10:00-10:30</p>
                <p>
                  <p>Paralel tədbir</p>
                  <span>AZƏRTAC imzalanma mərasimi</span>
                </p>
              </div>

              <div>
                <p>11:15-11:45</p>
                <p>Çay və qəhvə fasiləsi</p>
              </div>

              <div>
                <p>11:45-13:00</p>
                <p>
                  <p>Panel müzakirə: </p>
                  <span>
                    Yeni mediada istehlak tendensiyaları və media savadlılığı
                    (dezinformasiya və feyk nyusla mübarizə üsulları)
                  </span>
                </p>
              </div>
              <div>
                <p>12:00-13:00</p>
                <p>
                  <p>Paralel tədbir</p>
                  <span>
                    Türk Dövlətləri Təşkilatı: Türkdilli dövlətlərin media
                    platforması
                  </span>
                </p>
              </div>
              <div>
                <p>13:15-14:30</p>
                <p>Nahar Fasiləsi</p>
              </div>
              <div>
                <p>14:45-16:00</p>
                <p>
                  <p>Panel müzakirə: </p>
                  <span>Jurnalistlərin təhlükəsizliyi</span>
                </p>
              </div>

              <div>
                <p> 15:00-16:00 </p>
                <p>
                  <p>Paralel tədbir</p>
                  <span>
                    Trend İnformasiya Agentliyi: Central Europe Report və DHA
                    Press layihələrinin təqdimatı
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
