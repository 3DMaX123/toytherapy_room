import React from 'react';
import './Rooms.css'
import images from '../../constants/images';

const Rooms = ({ item, random }) => {
    let heartOrStar = [images.findRoom__littleStar, images.findRoom__littleHeart]

    return (
        <div className='app_room'>
            <div className='room__parts'>
                <p className='room__parts-title'>Область</p>
                <p className='room__parts-header'>{item.region}</p>
            </div>
            <img src={heartOrStar[random]}  className='room_randomImage'/>
            <div className='room__parts'>
                <p className='room__parts-title'>Місто</p>
                <p className='room__parts-header'>{item.city}</p>
            </div>
            <img src={heartOrStar[random]} className='room_randomImage'/>
            <div className='room__parts'>
                <p className='room__parts-title'>ім’я менеджера</p>
                <p className='room__parts-header'>{item.headFirstName}</p>
            </div>
            <img src={heartOrStar[random]} className='room_randomImage'/>
            <div className='room__parts'>
                <p className='room__parts-title'>телефон</p>
                <p className='room__parts-header'>{item.phone}</p>
            </div>
        </div>
    );
};

export default Rooms;