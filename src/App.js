import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import AgendaSpiker from './pages/AgendaSpiker/AgendaSpiker.jsx';
import ForumLocation from './pages/ForumLocation/ForumLocation.jsx';
import AboutForum from './pages/AboutForum/AboutForum.jsx';
import News from '../src/pages/News/News.jsx';
import Gallery from '../src/pages/Gallery/Gallery.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agenda-spiker' element={<AgendaSpiker />} />
        <Route path='/forum-location' element={<ForumLocation />} />
        <Route path='/about-forum' element={<AboutForum />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/news' element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;