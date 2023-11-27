import React from 'react'
import images from '../../constants/images';

import './Payment.css';


const Payment = ({ChangeWindow}) => {
  return (
      <div className='app__payment'>
        <div className='payment__backGround' onClick={() => ChangeWindow(0)}></div>
        <div className='payment__content payment__text'>
          <div className='payment__content_title'>
            <p className='payment__title-title'>Підтримати проєкт</p>
            <p className='payment__title-description'>Використовуючи ці реквізити Ви можете допогти команді проєкту розвиватися <br/>
              надалі і відкривати кімнати з іграшками в інших містах
            </p>
          </div>
          <div className='payment__content_button payment__text-content'>
            <div className='payment__button_name payment__button'>
              <p className='payment__name-title payment__text-title'>Найменування отримувача</p>
              <a className='payment__name-content'>5556 7453 9822 6453</a>
            </div>
            <div className='payment__button_code payment__button'>
              <p className='payment__code-title payment__text-title'>Код отримувача</p>
              <a className='payment__code-content'>2717819678</a>
            </div>
            <div className='payment__button_account payment__button'>
              <p className='payment__account-title payment__text-title'>Рахунок отримувача</p>
              <a className='payment__account-content'><a>UA</a>633052990000926002006817905</a>
            </div>
            <div className='payment__content_bankName payment__button'>
              <p className='payment__bankName-title payment__text-title'>Назва банку</p>
              <a className='payment__bankName-content'> АТ КБ "ПРИВАТБАНК"</a>
            </div>
          </div>
          <img />
          <img className='payment__content-gradient' src={images.gradients__headerGrad} alt='img' />
          <img className='payment__content-backGround' src={images.payment__backGround_cloud} alt='img'/>
        </div>
      </div>
  )

}

export default Payment

