import React from 'react';
import images from "../../constants/images";

const Rooms = ({ item, randomNumber }) => {
    return (
        <div  key={item.id} className='app_findroom_map'>
            <div>
                <p>Область</p>
                <p>{item.region}</p>
            </div>
            <img src={randomNumber === 1 ? images.image1 : images.image2}  />
            <div>
                <p>Місто</p>
                <p>{item.city}</p>
            </div>
            <img src={randomNumber === 1 ? images.image1 : images.image2}/>
            <div>
                <p>Імя</p>
                <p>{item.headFirstName}</p>
            </div>
            <img src={randomNumber === 1 ? images.image1 : images.image2}/>
            <div>
                <p>телефон</p>
                <p>{item.phone}</p>
            </div>
        </div>
    );
};

export default Rooms;