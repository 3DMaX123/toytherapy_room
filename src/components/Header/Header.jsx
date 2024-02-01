import React from 'react'
import images from '../../constants/images';

import './Header.css';
import { Link } from "react-router-dom";
import AboutUs from "../../container/AboutUs/AboutUs";

class Header extends React.Component {

    render() {
        return (
            <div className='app__header'>
                <img className='header__clouds_phone' src={images.header_clouds_phone} alt='Хмаринки' />
                <img className='header__clouds' src={images.header__clouds} alt='Хмаринки' />
                <div className='header__mainContent_textAndLogo'>
                    <div className='header__textAndLogo_text'>
                        <div className='header__text_header'>
                            <p className='header__header-header'>Наші кімнати</p>
                            <p className='header__header-note'>*магія всередині</p>

                        </div>
                        <div className='header__text_description'>
                            <p className='header__description-firstText'>- це
                                <div className='header__description_textWithStars'>
                                    <p className='header__textWithStart-secondText'>чарівний</p>
                                    <img className='header__textWithStars-stars img' src={images.header__stars} alt='Зірочки' />
                                </div>
                                <div className='header__description_textWithHeart'>
                                    <p className='header__textWithHeart-thirdText'> простір для дітей і дорослих, </p>
                                    <img className='header__textithHeart-heart img' src={images.header__heart} alt='Сердечко' />
                                </div>
                                <p className='header__description-fourText'>в якому можливо знайти силу для власного<br />відновлення та відчути новий подих</p>
                            </p>
                            <img className='header__button_decorationPhone' src={images.phone__headerButton_decoration} alt='Сердечки'/>
                            <Link to={'/toytherapy_room/about-us'} className='header__header-button'>Дізнатися більше</Link>
                        </div>
                    </div>
                    <img className='header__textAndLogo-logo img' src={images.logotype} alt='Логотип ToyTherapyRoom' />
                </div>
                <div className='header__bottomHeartsAndZigZag'>
                    <img className='header__bottomHeartAndZigZag-hearts img' src={images.header__bottomHearts} alt='Сердечки' />
                    <div className='header__bottomHeartAndZigZag_ScrollAndZigZag'>
                        <img className='header__bottomHeartAndZigZag-zigZagPgone img' src={images.phone__headerZigZagAnd_decoration} alt='Зіг-заг та скролл' />
                        <img className='header__bottomHeartAndZigZag-zigZag img' src={images.header__zigZag} alt='Зіг-заг та скролл' />
                        <img className='header__bottomHeartAndZigZag-scroll img' src={images.header__scroll} alt='Скролл' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header