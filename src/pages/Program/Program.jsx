import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../api/fetchData';
import { navPdfSliceAction } from '../../store/navPdf';
import './Program.css';

const Program = () => {
  const dispatch = useDispatch();
  const program = useSelector(state => state.pdfReducer.program);
  const lang = useSelector(state => state.langReducer.lang);

  // console.log(program)

  var txt2 = program.slice(0, 4) + "s" + program.slice(4);


  useEffect(() => {
    fetchData(!lang ? 'az/nav' : 'en/nav').then((data) => (
      dispatch(navPdfSliceAction.getProgramPdf(data))
    ))
  }, [dispatch, lang])

  return (
    <embed title='Program' src={txt2} className='program-pdf' frameborder="0"></embed>
  );
};

export default Program;