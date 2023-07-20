import React, { useEffect } from "react";
import "./FAQ.css";
import { useDispatch, useSelector } from "react-redux";
import union from "../../assets/Home/union.png";
import { Link } from "react-router-dom";
import { fetchData } from "../../api/fetchData";
import { homeSliceAction } from "../../store/homeSlice";

const FAQ = () => {
  const agenda_info = useSelector(state => state.homeReducer.agenda_info);
  const agendas = useSelector((state) => state.homeReducer.agendas);
  const lang = useSelector(state => state.langReducer.lang);
  const dispatch = useDispatch();
  let agenda_day1 = [];
  let agenda_day2 = [];

  useEffect(() => {
    fetchData(!lang ? `az/home` : `en/home`).then((data) => (
      dispatch(homeSliceAction.getAgendaInfo(data.Agenda_Məlumat))
    ))
  }, [dispatch,lang]);

  useEffect(() => {
    fetchData(!lang ? `az/home` : `en/home`).then((data) => (
      dispatch(homeSliceAction.getAgendas(data.Agendas))
    ))
  }, [dispatch,lang]);

  const handleClose = () => {
    window.scrollTo(0, 0);
  };
  

  for(let i=0;i<agendas.length;i++){
    if(agendas[i]?.DayId === 1){
      agenda_day1.push({...agendas[i]});
    }else{
      agenda_day2.push({...agendas[i]});
    }
  }
  console.log(agenda_day1)

  return (
    <div className="faq-container row" >
      <div className="accord col-lg-6 d-flex flex-column justify-content-between">
        <div data-aos="zoom-in" data-aos-duration="700">
          <h1>{!lang ? 'Proqram' : 'Agenda'}</h1>
          <p dangerouslySetInnerHTML={{ __html: agenda_info.Information }}>
           
          </p>
          <div className="session-div">
            <span className="anime-drop">→</span>{" "}
            <Link
              className="session-link"
              onClick={handleClose}
              to={"/agenda-spiker"}
            >
              {!lang ? 'Sessiyalar və spikerlər' : "Sessions and speakers"}
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
              {!lang ? 'Gün 1' : 'Day 1'}<p>22.07.2023</p>
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
              {!lang ? 'Gün 2' : 'Day 2'}<br />
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
              {agenda_day1.map(item => (
                <div>
                  <p>{item.Start} - {item.Finish}</p>
                  <p>{item.Name}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="tab-data1">
              {agenda_day2.map((item) => (
                <div>
                  <p>{item.Start} - {item.Finish}</p>
                  <p>{item.Name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
