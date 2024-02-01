import React from 'react'
import images from '../../constants/images';

import './Partners.css';

class Partners extends React.Component {
    render() {
        return (
            <div className='app__partners'>
                <img className='partners__-img' src={images.partners__img} alt='Партнери' />
                <div className='partners__geofond'>
                    <img className='partners__geofond-initiator' src={images.partners__initiator} alt='Ініціатор проєкту' />
                    <a href='https://genofund.org.ua/' target='_blank'>
                        <img className='partners__geofond-logo' src={images.partners__geofondNation} alt='Логотип ГО "Геофонд нації"' />
                    </a>
                    <img className='partners__geofond-clickMe' src={images.partners__clickToKnowMore} alt='Натисни на логотип' />
                </div>
                <img className='partners__img_phone' src={images.partners__img_phone} alt='Партнери телефон' />
            </div>
        )
    }
}

export default Partners