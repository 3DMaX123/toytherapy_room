import React from 'react'
import images from '../../constants/images';

import './ThreeDRoom.css';
import {Link} from "react-router-dom";

class ThreeDRoom extends React.Component {
  render(){
    return (
      <div className='app__threeDRoom'>
        <img className='threeDRoom-stars' src={images.threeDRoom__stars} alt='Зірочки'/>
        <img className='threeDRoom-starsPhone' src={images.phone__threeDRoomStars_decorations} alt='Зірочки'/>
        <div className='threeDRoom_textAndButton'>
          <p className='threeDRoom_textAndButton-text'>Спробуйте поринути в дивовижний<br />3D простір для нашої кімнати</p>
            <Link to={'/toytherapy_room/3droom'} className='threeDRoom_TextAndButton-button'>Поринути</Link>
        </div>
      </div>
    )
  }
}

export default ThreeDRoom