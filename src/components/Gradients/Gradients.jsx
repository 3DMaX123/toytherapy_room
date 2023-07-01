import React from 'react';
import images from '../../constants/images';
import './Gradients.css';

const Gradients = () => {
    return (
        <div className='app__gradients'>
            <img className='gradients__headerGrad' src={images.gradients__headerGrad} alt='Градієнт' />
            <img className='gradients__magickSpaceGrad' src={images.gradients__magickSpaceGrad} alt='Градієнт' />
            <img className='gradients__ThreeDRoomGrad' src={images.gradients__threeDRoomGrad} alt='Градієнт' />
            <img className='gradients__CatalogGrad' src={images.gradients__catalogGrad} alt='Градієнт' />
            <img className='gradients__PonyMaxW992' src={images.gradients__threeDRoomGrad} alt='Градієнт' />
            <img className='gradients__FeedbackGrad' src={images.gradients__feedbackGrad} alt='Градієнт' />
            <img className='gradients__partnersGrad' src={images.gradients__magickSpaceGrad} alt='Градієнт' />
        </div>
    )
}

export default Gradients