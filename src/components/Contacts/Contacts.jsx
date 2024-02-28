import React from 'react'
import images from '../../constants/images';

import './Contacts.css';
import { useNavigate } from 'react-router-dom';



const Contacts = () => {
  let navigate = useNavigate();

  return (
    <div className='app__contacts'>
      <div className='contacts__back' onClick={() => navigate(-1)}></div>
      <div className='contacts__form' onClick={(e) => e.stopPropagation()}>
        <div className='contacts__content payment__textSettings'>
          <p className='contacts__content_title '>Контактна інформація</p>
          <div className='contacts__content_buttonName contacts__content_information'>
            <p className='contacts__buttonName-title contacts__information-title'>ім’я</p>
            <p className='contacts__buttonName-content contacts__information-descr'>Ослам Дарина Іванівна</p>
          </div>
          <div className='contacts__content-buttonPhonNumber contacts__content_information'>
            <p className='contacts__buttonPhonNumber-title contacts__information-title'>телефон</p>
            <a className='contacts__buttonPhonNumber-content contacts__information-descr'>+38(095)-116-1669</a>
          </div>
          <img className='contacts__content_gradient' src={images.gradients__headerGrad} alt='img' />
          <img className='contacts__content_cloud' src={images.contacts__backGround} alt='img' />
        </div>
      </div>
    </div>
  );
};

export default Contacts;

