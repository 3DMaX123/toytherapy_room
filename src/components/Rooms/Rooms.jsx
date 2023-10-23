import React from 'react';
import images from '../../constants/images';

const Rooms = ({ item, random }) => {
    let heartOrStar = [images.findRoom__littleStar, images.findRoom__littleHeart]

    return (
        <div className='app_findroom_map'>
            <div>
                <p>Область</p>
                <p>{item.region}</p>
            </div>
            <img src={heartOrStar[random]}  />
            <div>
                <p>Місто</p>
                <p>{item.city}</p>
            </div>
            <img src={heartOrStar[random]}/>
            <div>
                <p>Імя</p>
                <p>{item.headFirstName}</p>
            </div>
            <img src={heartOrStar[random]}/>
            <div>
                <p>телефон</p>
                <p>{item.phone}</p>
            </div>
        </div>
    );
};

export default Rooms;