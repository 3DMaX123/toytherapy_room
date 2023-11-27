import React from 'react'
import images from '../../constants/images';

import './Contacts.css';
import { useNavigate } from 'react-router-dom';



const Contacts = () => {
  let navigate = useNavigate();

  return (
      <div className='app__contacts' onClick={() => navigate(-1)}>
        <div className='contacts__content payment__textSettings'>
          <p className='contacts__content_title '>Контактна інформація</p>
          <div className='contacts__content_buttonName'>
            <p className='contacts__buttonName-title '>ім’я</p>
            <p className='contacts__buttonName-content '>Вальковська Марія Олексіївна</p>
          </div>
          <div className='contacts__content-buttonPhonNumber'>
            <p className='contacts__buttonPhonNumber-title '>телефон</p>
            <a className='contacts__buttonPhonNumber-content '>+38(067)-670-7702</a>
          </div>
          <img className='contacts__content_gradient' src={images.gradients__headerGrad} alt='img' />
          <img className='contacts__content_cloud' src={images.contacts__backGround} alt='img' />
        </div>
      </div>
  );
};

export default Contacts;

