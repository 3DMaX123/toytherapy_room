import React from 'react'
import images from '../../constants/images';

import './Partners.css';

class Partners extends React.Component {
    render(){
        return (
            <div className='app__partners'>
                <img className='partners__-img' src={images.partners__img} alt='Партнери'/>
                <img className='partners__img_phone' src={images.partners__img_phone} alt='Партнери телефон'/>
            </div>
        )
    }
}

export default Partners