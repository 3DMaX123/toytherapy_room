import React from 'react';
import './Rooms.css'
import images from '../../constants/images';

const Rooms = ({ item, random }) => {
    let heartOrStar = [images.findRoom__littleStar, images.findRoom__littleHeart]

    return (
        <div className='app_room'>
            <div className='room_region'>
                <p className='room_region_text'>Область</p>
                <p className='room_region_props'>{item.region}</p>
            </div>
            <img src={heartOrStar[random]}  className='room_randomImage'/>
            <div className='room_city'>
                <p className='room_city_text'>Місто</p>
                <p className='room_city_props'>{item.city}</p>
            </div>
            <img src={heartOrStar[random]} className='room_randomImage'/>
            <div className='room_name'>
                <p className='room_name_text'>ім’я менеджера</p>
                <p className='room_name_props'>{item.headFirstName}</p>
            </div>
            <img src={heartOrStar[random]} className='room_randomImage'/>
            <div className='room_phone'>
                <p className='room_phone_text'>телефон</p>
                <p className='room_phone_props'>{item.phone}</p>
            </div>
        </div>
    );
};

export default Rooms;