import React from 'react'
import images from '../../constants/images';

import './ThreeDRoom.css';

class ThreeDRoom extends React.Component {
  render(){
    return (
      <div className='app__threeDRoom'>
        <div className='threeDRoom_textAndButton'>
          <p className='threeDRoom_textAndButton-text'>Спробуйте поринути в дивовижний<br />3D простір для нашої кімнати</p>
          <p className='threeDRoom_TextAndButton-button'>Поринути</p>
        </div>
        <img className='threeDRoom-stars' src={images.threeDRoom} alt='Зірочки'/>
      </div>
    )
  }
}

export default ThreeDRoom