import React from 'react';
import './AboutForum.css';
import '../../components/AgendaSpiker/SessionOfForum';
import about_forum_img from "../../assets/Home/aboutForum.jpeg";

const AboutForum = () => {

  return (
    <>
        <div className='about-forum'>
            <div className='about-forum-left'>
                <div className='about-forum-left-1' data-aos="zoom-in" data-aos-duration="700"></div>
                <div className='about-forum-left-2' data-aos="zoom-in" data-aos-duration="700"></div>
                <span data-aos="zoom-in" data-aos-duration="700"></span>
            </div>
            <div className="container about-forum-container">
                <div className="row about-forum-row">
                    <div className="col-12">
                        <h1>Ümumi məlumat</h1>
                    </div>
                    <div className="col-lg-12 px-0 about-forum-9" data-aos="zoom-in" data-aos-duration="700">
                        <p>
                            Qlobal informasiya mühitinin modernləşməsi, qabaqcıl texnologiyaların media sahəsində geniş tətbiqi, ümumilikdə rəqəmsallaşma prosesləri dünya üzrə yeni və dinamik media mühitinin formalaşmasına gətirib çıxarmışdır. Bu proses mövcud sənaye tendensiyalarını sürətləndirir, yerli və beynəlxalq media subyektlərini öz biznes modellərini yenidən nəzərdən keçirməyə vadar edir.
                        </p>
                        <br />
                        <p>
                            Müasir zamanda media dövlət quruculuğu, iqtisadiyyat, sosial, mədəni və digər müxtəlif səhələrin inkişafının təşviq edilməsində əhəmiyyətli rola malikdir. Bu səbəbdən yeni mediada məzmunun yaradılması, istehlakçı davranışı, media və biznes sektorları arasında əlaqələr, mediada innovasiyalar və bu istiqamətlərdə çoxtərəfli konstruktiv dialoqların qurulması həm media, həm də digər sahələrin inkişafında olduqca əhəmiyyətlidir.
                        </p>
                        <br />
                        <p>
                            Yeni media mühitində müşahidə edilən tendensiyaların geniş spektrdan təhlili, media sahəsində beynəlxalq əməkdaşlığın genişləndirilməsi və təkmilləşdirilməsi, bu sahədə aparıcı trendlərin izlənilməsi, innovativ təkamülün yaradıcı sənayelər üçün yaratdığı imkanların tətbiq mexanizmlərinin araşdırılması məqsədilə 2023-cü il 21-23 iyun tarixlərində Azərbaycan Respublikasında, Şuşa şəhərində “4-cü Sənaye İnqilabı Dövründə Yeni Media” mövzusunda Qlobal Media Forum keçiriləcəkdir.
                        </p>
                    </div>
                </div>
                <div className='bottom-line'>
                    <div></div>
                </div>
            </div>
            <div className='about-forum-right'></div>
        </div>
        <div className='about-forum-mid '>
            <div className='about-forum-left'>
                <div className='about-forum-mid-1' data-aos="zoom-in" data-aos-duration="700"></div>
                <div className='about-forum-mid-2' data-aos="zoom-in" data-aos-duration="700"></div>
                <span data-aos="zoom-in" data-aos-duration="700"></span>
            </div>
            <div className="container about-forum-container">

            </div>
            <div className='about-forum-right'></div>
        </div>
        <div className='about-forum-purpose'>
            <div className='about-forum-left'>
                <div className='about-forum-left-3' data-aos="zoom-in" data-aos-duration="700"></div>
                <div className='about-forum-left-4' data-aos="zoom-in" data-aos-duration="700"></div>
                <span data-aos="zoom-in" data-aos-duration="700"></span>
            </div>
            <div className="container">
                <div className='row forum-purpose'>
                    <h1 className='col-12' data-aos="fade-down" data-aos-duration="700">Forumun məqsədi və istiqamətləri</h1>
                    <p className='col-12 mt-3' data-aos="zoom-in" data-aos-duration="700">
                        Forum dünyanın müxtəlif ölkələrindən olan rəsmilər, media və vətəndaş cəmiyyəti, dövlət və biznes 
                        nümayəndələri, media azadlığı üzrə müdafiəçilər, beynəlxalq təşkilatların təmsilçiləri, həmçinin 
                        müasir dövrün qlobal problemləri üzrə alim və ekspertlər, dünyaca məşhur media simaları tərəfindən 
                        bu sahədə bir çox aktual mövzuların müzakirəsi üçün platforma rolunu oynayacaqdır.
                        <br /> <br />
                        Forum aşağıda qeyd edilən sessiyalar üzrə qlobal tendensiyaları təhlil etmək və aktual suallara 
                        cavab tapmaq məqsədilə müxtəlif mövzularda panel sessiyaları əhatə edəcək:
                    </p>
                    <br /><br />
                    <div className='about-forum-sessions' data-aos="zoom-in" data-aos-duration="700">
                        <p className='forum-purpose-session'>Sessiyalar</p>
                        <span>⦁	Medianın gələcəyi: Rəqəmsal dövrdə jurnalistika və kommunikasiyada yeni alətlər və medianın rolu</span>
                        <span>⦁	Mediada investisiya və istehlak tendensiyaları</span>
                        <span>⦁	Təhlükəsizlik məsələləri</span>
                    </div>
                </div>
            </div>
            <div className='about-forum-right'></div>
        </div>
        <div className='about-forum-img mb-4 px-3' data-aos="zoom-in" data-aos-duration="700">
            <img src={about_forum_img} className='img-fluid' alt="info-img" />
        </div>
    </>
  );
};

export default AboutForum;