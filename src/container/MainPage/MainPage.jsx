import React from 'react';
import { Catalog, Header, MagickSpace, Partners, Pony, ThreeDRoom, Feedback, Gradients } from '../../components';
import './MainPage.css';

const MainPage = () => {
  return (
    <>
      {window.scrollTo(0, 0)}
      <div className='app_mainPage'>
        <Header />
        <MagickSpace />
        <ThreeDRoom />
        <Catalog />
        <Pony />
        <Feedback />
        <Partners />
      </div>
      <Gradients />
    </>
  )
}

export default MainPage