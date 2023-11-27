import React, { useEffect, useState } from 'react';
import data from '../../data/data for room.json'
import './FindRoom.css'
import Rooms from "../Rooms/Rooms";
import images from '../../constants/images';
import { useNavigate } from 'react-router-dom';


function FindRoom() {
    let navigate = useNavigate();
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
            <div className='app__findRoom_background' onClick={() => navigate(-1)}>
                <div className='app_findroom' onClick={(e) => e.stopPropagation()}>
                    <div className='findroom_search'>
                        <label htmlFor="search" className='findroom_search_label'>Знайти кімнату у своєму місті </label>
                        <input type="text" className='findroom_search_input' value={searchText} onChange={handleSearchChange} placeholder='Пошук' />
                    </div>
                    <div className='findroom_rooms'>
                        {filteredData.map(item => (
                            <Rooms key={item.id} item={item} random={chooseRandomImage()}/>
                        ))}
                    </div>
                    <img className='findRoom-gradient' src={images.gradients__headerGrad} />
                </div>
            </div>
    );
}

export default FindRoom;
