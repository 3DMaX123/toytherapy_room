import React from 'react'
import images from '../../constants/images';

import './Payment.css';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
  let navigate = useNavigate();

  return (
      <div className='app__payment' onClick={() => navigate(-1)}>
        <div className='payment__content payment__text' onClick={(e) => e.stopPropagation()}>
          <div className='payment__content_title'>
            <p className='payment__title-title'>Підтримати проєкт</p>
            <p className='payment__title-description'>Використовуючи ці реквізити Ви можете допогти команді проєкту розвиватися <br className='payment__descriptionBr' />
              надалі і відкривати кімнати з іграшками в інших містах
            </p>
          </div>
          <div className='payment__content_button payment__text-content'>
            <div className='payment__button_name payment__button'>
              <p className='payment__name-title payment__text-title'>Найменування отримувача</p>
              <p className='payment__name-content payment__text-content'>5556 7453 9822 6453</p>
            </div>
            <div className='payment__button_code payment__button'>
              <p className='payment__code-title payment__text-title'>Код отримувача</p>
              <p className='payment__code-content payment__text-content'>2717819678</p>
            </div>
            <div className='payment__button_account payment__button'>
              <p className='payment__account-title payment__text-title'>Рахунок отримувача</p>
              <p className='payment__account-content payment__text-content'>UA633052990000926002006817905</p>
            </div>
            <div className='payment__content_bankName payment__button'>
              <p className='payment__bankName-title payment__text-title'>Назва банку</p>
              <p className='payment__bankName-content payment__text-content'> АТ КБ "ПРИВАТБАНК"</p>
            </div>
          </div>
          <img />
          <img className='payment__content-gradient' src={images.gradients__headerGrad} alt='img' />
          <img className='payment__content-backGround' src={images.payment__clouds} alt='img'/>
        </div>
      </div>
  )

}

export default Payment

