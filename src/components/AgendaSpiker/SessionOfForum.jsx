import React, { useState, useEffect } from 'react';
import './SessionOfForum.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../api/fetchData.js';
import { sessionSliceAction } from '../../store/sessionSlice.js';



const SessionOfForum = () => {
  const dispatch = useDispatch();
  const session1 = useSelector(state => state.sessionReducer.session1);
  const session2 = useSelector(state => state.sessionReducer.session2);
  const session3 = useSelector(state => state.sessionReducer.session3);
  const lang = useSelector(state => state.langReducer.lang);
  const [isEtrafli, setIsEtrafli] = useState(false);
  const [session, setSession] = useState(!lang ? 'Sessiya 1' : 'Session 1')

  const handleEtrafli = () => {
    setIsEtrafli(true);
  };

  const handleButton = (e) => {
    setSession(e.target.innerText)
  }

  useEffect(() => {
    fetchData(!lang ? 'az/session' : 'en/session').then((data) => {
      dispatch(sessionSliceAction.getAllSessions(data))
    })
  }, [lang, dispatch]);

  return (
    <div className='container session-container mb-4'>
      <div className="session-content" id="pills-tabContent">
        <ul class="nav nav-pills session-nav-pills mb-3 col-3" data-aos="fade-down" data-aos-duration="700">
          <li class="nav-item">
            <button onClick={handleButton} class={(session === 'Sessiya 1' || session === 'Session 1') ? 'nav-link active' : 'nav-link'} type="button">
              {!lang ? 'Sessiya 1' : 'Session 1'}
            </button>
          </li>
          <li class="nav-item">
            <button onClick={handleButton} class={(session === 'Sessiya 2' || session === 'Session 2') ? 'nav-link active' : 'nav-link'} type="button">
              {!lang ? 'Sessiya 2' : 'Session 2'}
            </button>
          </li>
          <li class="nav-item">
            <button onClick={handleButton} class={(session === 'Sessiya 3' || session === 'Session 3') ? 'nav-link active' : 'nav-link'} type="button">
              {!lang ? 'Sessiya 3' : 'Session 3'}
            </button>
          </li>
        </ul>
        {
          (session === 'Sessiya 1' || session === 'Session 1') && <div className="tab-panes  row justify-content-end session1-tab">
            <div className='session-ətraflı-content col-md-9'>
              <h2 className='text-start col-md-10' data-aos="fade-down" data-aos-duration="700" dangerouslySetInnerHTML={{ __html: session1?.Sessiya?.Title }}>
              </h2>
              <p
                className={isEtrafli ? 'session-overflow-p session-etrafli-p' : 'session-overflow-p'}
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
        }

        {
          (session === 'Sessiya 2' || session === 'Session 2') && <div className="tab-panes  row justify-content-end session2-tab" >
            <div className='session-ətraflı-content col-md-9'>
              <h2 className='text-start col-md-10' data-aos="fade-down" data-aos-duration="700" dangerouslySetInnerHTML={{ __html: session2?.Sessiya?.Title }}>
              </h2>
              <p
                className={isEtrafli ? 'session-overflow-p session-etrafli-p' : 'session-overflow-p'}
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
        }


        {
          (session === 'Sessiya 3' || session === 'Session 3') && <div className="tab-panes  row justify-content-end session3-tab" >
            <div className='session-ətraflı-content col-md-9'>
              <h2 className='text-start col-md-10' data-aos="fade-down" data-aos-duration="700" dangerouslySetInnerHTML={{ __html: session3?.Sessiya?.Title }}>
              </h2>
              <p
                className={isEtrafli ? 'session-overflow-p session-etrafli-p' : 'session-overflow-p'}
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
        }
      </div>
    </div>
  );
};

export default SessionOfForum;