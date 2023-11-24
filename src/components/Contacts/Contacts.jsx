import React from 'react'
import images from '../../constants/images';

import './Contacts.css';

class Contacts extends React.Component {

  render() {

    return (
      <div className='app__contacts'>
        <div className='contacts__backGround'></div>
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
          <img className='contacts__content_gradient' src={images.contacts__backGround_gradient} alt='img' />
          <img className='contacts__content_cloud' src={images.contacts__backGround} alt='img' />
        </div>
      </div>
    )
  }
}

export default Contacts