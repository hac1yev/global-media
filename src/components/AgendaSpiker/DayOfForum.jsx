import React, { useState } from 'react';
import './DayOfForum.css';
import active_forum from '../../assets/AgendaSpiker/active-forum-day.png';
import forum_day from '../../assets/AgendaSpiker/forumDay.png';

const DayOfForum = () => {
  const [isActiveForumDay,setIsActiveForumDay] = useState(false);

  const handleActiveForum = () => {
    setIsActiveForumDay(prev => !prev);
  };

  const handlePassivForum = () => {
    return;
  }

  return (
    <div className='forum-day-section'>
      <div className="container-xl">
        <div className="row mt-5">
          <div className="col-lg-4 forum-day-buttons-col">
            <div className='forum-day-buttons'>
              <div onClick={isActiveForumDay ? handleActiveForum : handlePassivForum} className={!isActiveForumDay ? 'active-day-button' : 'forum-day-button'}>
                <img src={!isActiveForumDay ? active_forum : forum_day} className='img-fluid' alt="active-forum-day" />
                <div>
                  <span>First day of the forum</span>
                  <span>July 23, 2023</span>
                </div>
              </div>
              <div onClick={!isActiveForumDay ? handleActiveForum : handlePassivForum} className={isActiveForumDay ? ' active-day-button' : 'forum-day-button'}>
                <img src={isActiveForumDay ? active_forum : forum_day} className='img-fluid' alt="forum-day" />
                <div>
                  <span>Second day of the forum</span>
                  <span>July 23, 2023</span>
                </div>
              </div>
            </div>
          </div>
          {isActiveForumDay ? (
            <div className="col-lg-8">
            <div className='forum-day-tables'>
              <div className='forum-day-row'>
                <div className='forum-day-date'>08:30-09:30</div>
                <span>Qeydiyyat</span>
              </div>
              <div className='forum-day-row'>
                <div className='forum-day-date'>10:00-13:00</div>
                <span>Forum iştirakçıları ilə rəsmi görüş</span>
              </div>
              <div className='forum-day-row'>
                <div className='forum-day-date'>13:30-14:45</div>
                <span>Nahar Fasiləsi</span>
              </div>
              <div className='forum-day-row'>
                <div className='forum-day-date'>15:00-16:00</div>
                <span>Açılış mərasimi: Rəsmi çıxışlar</span>
              </div>
              <div className='forum-day-row'>
                <div className='forum-day-date'>16:00-16:30</div>
                <span>Çay və qəhvə fasiləsi</span>
              </div>
              <div className='forum-day-row'>
                <div className='forum-day-date'>16:45-18:00</div>
                <span>
                  Sessiya 1: Medianın gələcəyi: Rəqəmsal dövrdə jurnalistika və kommunikasiyada yeni alətlər 
                  və medianın rolu.
                </span>
              </div>
              <div className='forum-day-row'>
                <div className='forum-day-date'>19:30-21:00</div>
                <span>Rəsmi ziyafət və bədii hissə</span>
              </div>
            </div>
          </div>) : (
            <div className="col-lg-8">
              <div className='forum-day-tables'>
              <div className='forum-day-row'>
                <div className='forum-day-date'>08:30-09:30</div>
                <span>Qeydiyyat</span>
              </div>
              <div className='forum-day-row'>
                <div className='forum-day-date'>10:00-13:00</div>
                <span>Forum iştirakçıları ilə rəsmi görüş</span>
              </div>
              <div className='forum-day-row'>
                <div className='forum-day-date'>13:30-14:45</div>
                <span>Nahar Fasiləsi</span>
              </div>
              <div className='forum-day-row'>
                <div className='forum-day-date'>15:00-16:00</div>
                <span>Açılış mərasimi: Rəsmi çıxışlar</span>
              </div>
              <div className='forum-day-row'>
                <div className='forum-day-date'>16:00-16:30</div>
                <span>Çay və qəhvə fasiləsi</span>
              </div>
              
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayOfForum;