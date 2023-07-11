import React, { useEffect } from 'react';
import './AboutForum.css';
import '../../components/AgendaSpiker/SessionOfForum';
// import about_forum_img from "../../assets/Home/aboutForum.jpeg";
import { useDispatch, useSelector } from 'react-redux';
import { formAboutSliceAction } from '../../store/forumAbout';
import { fetchData } from '../../api/fetchData';

const AboutForum = () => {
    const lang = useSelector(state => state.langReducer.lang);

    const formOverAll = useSelector((state) => state.formpurpReducer.overall);
    const formPurp = useSelector((state) => state.formpurpReducer.formPurp);
    const formImg = useSelector((state) => state.formpurpReducer.formImg);
    console.log(formOverAll, formPurp, formImg)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(!lang ? 'az/about' : 'en/about').then((data) => (
            dispatch(formAboutSliceAction.getOverAll(data.Ümumi_Məlumat))
        ));
    }, [dispatch,lang]);

    useEffect(() => {
        fetchData(!lang ? 'az/about' : 'en/about').then((data) => (
            dispatch(formAboutSliceAction.getFormImg(data.Məlumat_Şəkli))
            ));
    }, [dispatch,lang]);

    useEffect(() => {
        fetchData(!lang ? 'az/about' : 'en/about').then((data) => (
            dispatch(formAboutSliceAction.getFormPurp(data.Formun_Məqsədi))
            ));
    }, [dispatch,lang]);

    console.log(formOverAll)
    
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
                            <h1>{formOverAll.Title}</h1>
                        </div>
                        <div className="col-lg-12 px-0 about-forum-9" data-aos="zoom-in" data-aos-duration="700">
                            <div dangerouslySetInnerHTML={{__html: formOverAll.Information}} />
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
                        <h1 className='col-12' data-aos="fade-down" data-aos-duration="700">{formPurp.Title}</h1>
                        <p className='col-12 mt-3' data-aos="zoom-in" data-aos-duration="700" dangerouslySetInnerHTML={{__html: formPurp.Information}} />
                        <br />
                    </div>
                </div>
                <div className='about-forum-right'></div>
            </div>
            <div className='about-forum-img mb-4 px-3' data-aos="zoom-in" data-aos-duration="700">
                <img src={formImg.Image} className='img-fluid' alt={formImg.Title} />
            </div>
        </>
    );
};

export default AboutForum;