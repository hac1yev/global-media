import React, { useState,useEffect } from 'react';
import './SessionOfForum.css';
// import session1_card1 from '../../assets/AgendaSpiker/sesson1-card1.png';
// import session1_card2 from '../../assets/AgendaSpiker/sesson1-card2.jpeg';
// import session1_card3 from '../../assets/AgendaSpiker/sesson1-card3.jpg';
// import session1_card4 from '../../assets/AgendaSpiker/sesson1-card4.png';
// import session1_card5 from '../../assets/AgendaSpiker/sesson1-card5.png';
// import session1_card6 from '../../assets/AgendaSpiker/sesson1-card6.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../api/fetchData.js';
import { sessionSliceAction } from '../../store/sessionSlice.js';

// const dummy_session = [
//   {
//     id: 's1',
//     img: session1_card1,
//     title: 'Aleksandru Giboi',
//     description: 'Secretary General, Alliance of European News Agencies',
//   },
//   {
//     id: 's2',
//     img: session1_card2,
//     title: 'Damjan Krnjevic Miskovic',
//     description: 'Director for Policy Research, Analysis, and Publications, ADA University',
//   },
//   {
//     id: 's3',
//     img: session1_card3,
//     title: 'Evgenia Doitcheva Droumeva',
//     description: 'Deputy Director General, “BTA” New Agency',
//   },
//   {
//     id: 's4',
//     img: session1_card4,
//     title: 'Matz Muhy Abdulhamid Obada',
//     description: 'Centre for Strategic Studies of Republic of Iraq',
//   },
//   {
//     id: 's5',
//     img: session1_card5,
//     title: 'Mohammad Talal Abdulkarim',
//     description: ' Manager of Training Department, Aljazeera Media Institute',
//   },
//   {
//     id: 's6',
//     img: session1_card6,
//     title: 'Yusuf Özhan',
//     description: 'Deputy Director General, Editor-in-Chief, Anadolu Agency',
//   },
// ];

const SessionOfForum = () => {
  const dispatch = useDispatch();
  const session1 = useSelector(state => state.sessionReducer.session1);
  const session2 = useSelector(state => state.sessionReducer.session2);
  const session3 = useSelector(state => state.sessionReducer.session3);
  const lang = useSelector(state => state.langReducer.lang);
  const [isEtrafli,setIsEtrafli] = useState(false);

  const handleEtrafli = () => {
    setIsEtrafli(true);
  };

  useEffect(() => {
    fetchData(!lang ? 'az/session' : 'en/session').then((data) => {
      dispatch(sessionSliceAction.getAllSessions(data))
    })
  }, [lang,dispatch]);

  return (
    <div className='container session-container mb-4'>
      <div className="tab-content session-content" id="pills-tabContent">
        <ul class="nav nav-pills session-nav-pills mb-3 col-3" id="pills-tab" role="tablist" data-aos="fade-down" data-aos-duration="700">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              {!lang ? 'Sessiya 1' : 'Session 1'}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
              {!lang ? 'Sessiya 2' : 'Session 2'}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
              {!lang ? 'Sessiya 3' : 'Session 3'}
            </button>
          </li>
        </ul>
        <div className="tab-pane fade row justify-content-end show active session1-tab" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className='session-ətraflı-content col-md-9'>
            <h2 className='text-start col-md-10' data-aos="fade-down" data-aos-duration="700" dangerouslySetInnerHTML={{ __html: session1?.Sessiya?.Title }}>
            </h2>
            <p 
              className={ isEtrafli ? 'session-overflow-p session-etrafli-p' : 'session-overflow-p' }
              dangerouslySetInnerHTML={{ __html: session1?.Sessiya?.Information }}
            >
            </p>
            <div className='session-button'>
              {!isEtrafli && <button onClick={handleEtrafli}>{!lang ? 'Ətraflı' : 'More'}</button>}
            </div>
          </div>
          <div className='session-cards-wrapper row'>
            <h3 className='col-12 text-start speakers-header mt-5' dangerouslySetInnerHTML={{ __html: session1?.Sessiya?.Speaker_Title }}></h3>
            <div className='col-lg-4 col-md-6 d-flex justify-content-center ps-0'>
              <h2 className='session-cards-title'>
                {!lang ? 'Spikerlər' : 'Speakers'}
              </h2>
            </div>
            <div className='col-lg-'>
            </div>
            <div className='col-lg-'>
            </div>
            {session1?.Spikerlər?.map((item) => (
              <div className="col-lg-4 col-md-6 mt-3 ps-0" data-aos="zoom-in" data-aos-duration="700" key={item.Id}>
                <div className='session-card card'>
                    <img className='card-img-top' src={item.Image} alt={item.Fullname} />
                    <div class="card-body">
                      <h3 class="card-title">{item.Fullname}</h3>
                      <p class="card-text" dangerouslySetInnerHTML={{ __html: item.Information }}></p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tab-pane fade row justify-content-end session2-tab" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <div className='session-ətraflı-content col-md-9'>
            <h2 className='text-start col-md-10' data-aos="fade-down" data-aos-duration="700" dangerouslySetInnerHTML={{ __html: session2?.Sessiya?.Title }}>
            </h2>
            <p 
              className={ isEtrafli ? 'session-overflow-p session-etrafli-p' : 'session-overflow-p' }
              dangerouslySetInnerHTML={{ __html: session2?.Sessiya?.Information }}
            >
            </p>
            <div className='session-button'>
              {!isEtrafli && <button onClick={handleEtrafli}>{!lang ? 'Ətraflı' : 'More'}</button>}
            </div>
          </div>
          <div className='session-cards-wrapper row'>
            <h3 className='col-12 text-start speakers-header mt-5' dangerouslySetInnerHTML={{ __html: session2?.Sessiya?.Speaker_Title }}></h3>
            <div className='col-lg-4 col-md-6 d-flex justify-content-center'>
              <h2 className='session-cards-title'>
                {!lang ? 'Spikerlər' : 'Speakers'}
              </h2>
            </div>
            <div className='col-lg-'>
            </div>
            <div className='col-lg-'>
            </div>
            {session2?.Spikerlər?.map((item) => (
              <div className="col-lg-4 col-md-6 mt-3" data-aos="zoom-in" data-aos-duration="700">
                <div className='session-card card'>
                    <img className='card-img-top' src={item.Image} alt={item.Fullname} />
                    <div class="card-body">
                      <h3 class="card-title">{item.Fullname}</h3>
                      <p class="card-text" dangerouslySetInnerHTML={{ __html: item.Information }}></p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tab-pane fade row justify-content-end session3-tab" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
          <div className='session-ətraflı-content col-md-9'>
              <h2 className='text-start col-md-10' data-aos="fade-down" data-aos-duration="700" dangerouslySetInnerHTML={{ __html: session3?.Sessiya?.Title }}>
              </h2>
            <p 
              className={ isEtrafli ? 'session-overflow-p session-etrafli-p' : 'session-overflow-p' }
              dangerouslySetInnerHTML={{ __html: session3?.Sessiya?.Information }}
            >
            </p>
            <div className='session-button'>
              {!isEtrafli && <button onClick={handleEtrafli}>{!lang ? 'Ətraflı' : 'More'}</button>}
            </div>
          </div>
          <div className='session-cards-wrapper row'>
            <h3 className='col-12 text-start speakers-header mt-5' dangerouslySetInnerHTML={{ __html: session3?.Sessiya?.Speaker_Title }}></h3>
            <div className='col-lg-4 col-md-6 d-flex justify-content-center'>
              <h2 className='session-cards-title'>
                {!lang ? 'Spikerlər' : 'Speakers'}
              </h2>
            </div>
            <div className='col-lg-'>
            </div>
            <div className='col-lg-'>
            </div>
            {session3?.Spikerlər?.map((item) => (
              <div className="col-lg-4 col-md-6 mt-3" data-aos="zoom-in" data-aos-duration="700">
                <div className='session-card card'>
                    <img className='card-img-top' src={item.Image} alt={item.Fullname} />
                    <div class="card-body">
                      <h3 class="card-title">{item.FullName}</h3>
                      <p class="card-text" dangerouslySetInnerHTML={{ __html: item.Information }}></p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionOfForum;