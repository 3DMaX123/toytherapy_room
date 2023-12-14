import React from 'react'
import images from '../../constants/images';

import './Catalog.css';
import {Link} from "react-router-dom";

class Catalog extends React.Component {
    render() {
        return (
            <div className='app__catalog'>
                <img className='catalog__props' src={images.catalog__props} alt='Різні пропси' />
                <img className='catalog__props_phone' src={images.catalog__props_phone} alt='Різні пропси телефон' />
                <div className='catalog__textAndButton'>
                    <div className='catalog__textAndButton_headerDescription'>
                        <p className='catalog__headerDescription-header'>Каталог іграшок</p>
                        <p className='catalog__headerDescription-description'>Вони різні, але кожна має свою особливу силу... Серед них є та єдина,<br />що чекала саме тебе, адже її сила здатна допомогти тобі</p>
                    </div>
                    <Link to={"/toytherapy_room/catalog"} className='catalog__textAndButton-button'>Обрати іграшку</Link>
                </div>
            </div>
        )
    }
}

export default Catalog