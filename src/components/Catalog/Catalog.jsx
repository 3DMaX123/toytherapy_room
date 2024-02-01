import React from 'react'
import images from '../../constants/images';

import './Catalog.css';
import {Link} from "react-router-dom";

class Catalog extends React.Component {
    render() {
        return (
            <div className='app__compCatalog'>
                <img className='compCatalog__props' src={images.catalog__props} alt='Різні пропси' />
                <img className='compCatalog__props_phone' src={images.phone__catalog_decorations} alt="Тваринки та сердечки" />
                <div className='compCatalog__textAndButton'>
                    <div className='compCatalog__textAndButton_headerDescription'>
                        <p className='compCatalog__headerDescription-header'>Каталог іграшок</p>
                        <p className='compCatalog__headerDescription-description'>Вони різні, але кожна має свою особливу силу... Серед них є та єдина,<br className='compCatalog__HeaderDescription-br' />що чекала саме тебе, адже її сила здатна допомогти тобі</p>
                    </div>
                    <Link to={"/toytherapy_room/catalog"} className='compCatalog__textAndButton-button'>Обрати іграшку</Link>
                </div>
            </div>
        )
    }
}

export default Catalog