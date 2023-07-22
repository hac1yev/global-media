import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { navPdfSliceAction } from '../../store/navPdf';
import { Document, Page,pdfjs } from 'react-pdf';
import './Conseption.css'

const Concept = () => {
    const dispatch = useDispatch();
    const concept = useSelector(state => state.pdfReducer.concept);
    const lang = useSelector(state => state.langReducer.lang);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    useEffect(() => {
        fetchData(!lang ? 'az/nav' : 'en/nav').then((data) => (
          dispatch(navPdfSliceAction.getConceptPdf(data))
        ))
      },[dispatch,lang])


  return (
    // <embed title='Concept' src={concept} className='concept-pdf' frameborder="0"></embed>
    <Document file={concept}></Document>
  );
};

export default Concept;