import React from 'react'
import images from '../../constants/images';

import './Feedback.css';

class Feedback extends React.Component {
    render(){
        return (
          <div className='app__feedback'>
          <img className='feedback__-props' src={images.feedback__props} alt='Декорації'/>
            <div className='feedback__textAndButton'>
                <p className='feedback__textAndButton-text'>Ми будемо раді<br />зворотньому зв'язку від Вас</p>
                <a className='feedback__textAndButton-button'>Написати відгук</a>
            </div>
          </div>
        )
    }
}

export default Feedback