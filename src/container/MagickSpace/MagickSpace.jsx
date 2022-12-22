import React from 'react'
import images from '../../constants/images';

import './MagickSpace.css';

class MagickSpace extends React.Component {
  render(){

    return(
        <div className='app__magickSpace'>
          <div className='magickSpace__clouds'>
            <img className='magickSpace__clouds-cloudLeft' src={images.magickSpace__cloudLeft} alt='Хмаринки'/>
            <img className='magickSpace__clouds-cloudRight' src={images.magickSpace__cloudRight} alt='Хмаринки'/>
          </div>
          <div className='magickSpace__text'>
            <div className='magickSpace__text_textAndStars'>
              <p className='magickSpace__textAndStars-text'>Це</p>
              <div className='magickSpace__textAndStars_starAndText'>
                <p className='magickSpace__starAndText-text'>магічний</p>
                <img className='magickSpace__starAndText-stars' src={images.magickSpace__stars} alt='Зірочки'/>
                <p className='magickSpace__starAndText-textAnother'>простір, де ти можеш</p>
              </div>
            </div>
            <p className='magickSpace__text-text'>поблукати та просто бути у ньому</p>
            <p className='magickSpace__text-note'>*наші кімнати</p>
          </div>
        </div>
    )
  }
}

export default MagickSpace