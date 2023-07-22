import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchData1 } from '../../api/fetchData';
import { navPdfSliceAction } from '../../store/navPdf';
import './Conseption.css'

const Concept = () => {
    const dispatch = useDispatch();
    const concept = useSelector(state => state.pdfReducer.concept);
    const lang = useSelector(state => state.langReducer.lang);

    useEffect(() => {
        fetchData1(!lang ? 'az/nav' : 'en/nav').then((data) => (
          dispatch(navPdfSliceAction.getConceptPdf(data))
        ))
      },[dispatch,lang])

  return (
    <embed title='Concept' src={concept} className='concept-pdf' frameborder="0"></embed>
  );
};

export default Concept;