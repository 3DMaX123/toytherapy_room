import React from 'react'
import images from '../../constants/images';

import './Header.css';

class Header extends React.Component {

    render(){
        return (
            <div className='app__header'>
                <div className='flex flex_center'>
                    <img className='header__clouds' src={images.header__clouds} alt='Хмаринки'/>
                </div>
                <div className='header__mainContent_textAndLogo'>
                    <div className='header__textAndLogo'>
                        <div className='header__textAndLogo_header'>
                            <p className='header__header-header'>Наші кімнати</p>
                            <p className='header__header-note'>*магія всередині</p>
                        </div>
                        <div className='header__textAndLogo_description'>
                            <div className='flex'>
                                <p className='header__description-firstText'>- це</p>
                                <div className='header__description_textWithStars'>
                                    <p className='header__textWithStart-secondText'>чарівний</p>
                                    <img className='header__textWithStars-stars img' src={images.header__stars} alt='Зірочки' />
                                </div>
                                <div className='header__description_textWithHeart'>
                                    <p className='header__textWithHeart-thirdText'> простір для дітей і дорослих, </p>
                                    <img className='header__textithHeart-heart img' src={images.header__heart} alt='Сердечко' />
                                </div>
                            </div>
                            <p className='header__description-fourText'>в якому можливо знайти силу для власного<br />відновлення та відчути новий подих</p>
                        </div>
                    </div>
                    <img className='header__textAndLogo-logo img' src={images.logotype} alt='Логотип ToyTherapyRoom'/>
                </div>
                <div className='header__bottomHeartsAndZigZag'>
                    <img className='header__bottomHeartAndZigZag-hearts img' src={images.header__bottomHearts} alt='Сердечки'/>
                    <div className='header__bottomHeartAndZigZag_ScrollAndZigZag'>
                        <img className='header__bottomHeartAndZigZag-zigZag img' src={images.header__zigZag} alt='Зіг-заг та скролл'/>
                        <img className='header__bottomHeartAndZigZag-scroll img' src={images.header__scroll} alt='Скролл'/>
                    </div>
                </div>
            </div>
          )
    }
}

export default Header