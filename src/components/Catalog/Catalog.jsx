import React from 'react'
import images from '../../constants/images';

import './Catalog.css';

class Catalog extends React.Component {
    render(){
        return (
            <div className='app__catalog'>
                <img className='catalog__-props' src={images.catalog__props} alt='Різні пропси'/>
                <div className='catalog__textAndButton'>
                    <div className='catalog__textAndButton_headerDescription'>
                        <p className='catalog__headerDescription-header'>Каталог іграшок</p>
                        <p className='catalog__headerDescription-description'>Вони різні, але кожна має свою особливу силу... Серед них є та єдина,<br />що чекала саме тебе, адже її сила здатна допомогти тобі</p>
                    </div>
                    <a className='catalog__textAndButton-button'>Обрати іграшку</a>
                </div>
            </div>
        )
    }
}

export default Catalog