import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { navPdfSliceAction } from '../../store/navPdf';
import './Program.css';

const Program = () => {
    const dispatch = useDispatch();
    const program = useSelector(state => state.pdfReducer.program);
    const lang = useSelector(state => state.langReducer.lang);

    useEffect(() => {
        fetchData(!lang ? 'az/nav' : 'en/nav').then((data) => (
          dispatch(navPdfSliceAction.getProgramPdf(data))
        ))
      },[dispatch,lang])

  return (
    <iframe title='Program' src={program} className='program-pdf' frameborder="0"></iframe>
  );
};

export default Program;