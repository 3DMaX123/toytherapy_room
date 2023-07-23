import React from 'react'
import images from '../../constants/images';

import './Catalog.css';

class Catalog extends React.Component {
    render() {
        return (
            <div className='app__catalog'>
                <img className='catalog__props' src={images.catalog__props} alt='Різні пропси' />
                <img className='catalog__aboveProps_phone' src={images.catalog__aboveProps_phone} alt='Різні пропси телефон' />
                <div className='catalog__textAndButton'>
                    <div className='catalog__textAndButton_headerDescription'>
                        <p className='catalog__headerDescription-header'>Каталог іграшок</p>
                        <p className='catalog__headerDescription-description'>Вони різні, але кожна має свою особливу силу... Серед них є та єдина,<br />що чекала саме тебе, адже її сила здатна допомогти тобі</p>
                    </div>
                    <a className='catalog__textAndButton-button'>Обрати іграшку</a>
                </div>
                <img className='catalog__hearts_phone' src={images.catalog__hearts_phone} alt='Сердце каталог телефон' />
                <img className='catalog__rabbit_phone' src={images.catalog__rabbit_phone} alt='заєць каталог телефон' />
            </div>
        )
    }
}

export default Catalog