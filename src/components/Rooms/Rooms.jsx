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
            <div className='room__starsAndHeartsPhone'>
                <img src={heartOrStar[random]} className='room_randomImage' alt='Зірочки або сердечки' />
                <div className="room__starsAndHeartsPhone-line" style={{ backgroundColor: heartOrStar[random] === images.findRoom__littleStar ? "#FCE38A" : "#F96566" }}></div>
                <img src={heartOrStar[random]} className='room_randomImagePhone' alt='Зірочки або сердечки' />
            </div>
            <div className='room__parts'>
                <p className='room__parts-title'>Місто</p>
                <p className='room__parts-header'>{item.city}</p>
            </div>
            <div className='room__starsAndHeartsPhone'>
                <img src={heartOrStar[random]} className='room_randomImage' alt='Зірочки або сердечки' />
                <div className="room__starsAndHeartsPhone-line" style={{ backgroundColor: heartOrStar[random] === images.findRoom__littleStar ? "#FCE38A" : "#F96566" }}></div>
                <img src={heartOrStar[random]} className='room_randomImagePhone' alt='Зірочки або сердечки' />
            </div>
            <div className='room__parts'>
                <p className='room__parts-title'>ім’я менеджера</p>
                <p className='room__parts-header'>{item.headFirstName}</p>
            </div>
            <div className='room__starsAndHeartsPhone'>
                <img src={heartOrStar[random]} className='room_randomImage' alt='Зірочки або сердечки' />
                <div className="room__starsAndHeartsPhone-line" style={{ backgroundColor: heartOrStar[random] === images.findRoom__littleStar ? "#FCE38A" : "#F96566" }}></div>
                <img src={heartOrStar[random]} className='room_randomImagePhone' alt='Зірочки або сердечки' />
            </div>
            <div className='room__parts'>
                <p className='room__parts-title'>телефон</p>
                <p className='room__parts-header'>{item.phone}</p>
            </div>
        </div>
    );
};

export default Rooms;