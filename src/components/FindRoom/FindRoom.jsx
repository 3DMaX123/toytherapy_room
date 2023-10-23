import React, { useEffect, useState } from 'react';
import data from '../../data/data for room.json'
import './FindRoom.css'
import Rooms from "../Rooms/Rooms";
import images from '../../constants/images';


function FindRoom({ChangeWindow}) {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearchChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
        const filteredItems = data.filter(item => item.city.toLowerCase().includes(text.toLowerCase()) || item.region.toLowerCase().includes(text.toLowerCase()));
        setFilteredData(filteredItems);
    }

    const chooseRandomImage = () => {
        return Math.floor(Math.random() * 2);
    }

    return (
        <>
            <div className='app__findRoom_background' onClick={() => ChangeWindow(0)}>
                <div className='app_findroom' onClick={(e) => e.stopPropagation()}>
                    <div className='app_findroom_input'>
                        <label htmlFor="search">Знайти кімнату у своєму місті </label>
                        <input type="text" id="search" value={searchText} onChange={handleSearchChange} placeholder='Пошук' />
                    </div>
                    <div className='Rooms'>
                        {filteredData.map(item => (
                            <Rooms key={item.id} item={item} random={chooseRandomImage()}/>
                        ))}
                    </div>
                    <img className='findRoom-gradient' src={images.gradients__headerGrad} />
                </div>
            </div>
        </>
    );
}

export default FindRoom;
