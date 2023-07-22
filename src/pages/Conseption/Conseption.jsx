import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { navPdfSliceAction } from '../../store/navPdf';
import './Conseption.css'

const Concept = () => {
  const dispatch = useDispatch();
  const concept = useSelector(state => state.pdfReducer.concept);
  const lang = useSelector(state => state.langReducer.lang);



  var txt3 = concept.slice(0, 4) + "s" + concept.slice(4);



  useEffect(() => {
    fetchData(!lang ? 'az/nav' : 'en/nav').then((data) => (
      dispatch(navPdfSliceAction.getConceptPdf(data))
    ))
  }, [dispatch, lang])

  return (
    <embed title='Concept' src={txt3} className='concept-pdf' frameborder="0"></embed>
  );
};

export default Concept;