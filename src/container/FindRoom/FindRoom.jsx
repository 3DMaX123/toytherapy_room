import React, {useEffect, useState} from 'react';
import data from '../../data/data for room.json'
import './FindRoom.css'
import images from "../../constants/images";
import Rooms from "../Rooms/Rooms";


function FindRoom() {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearchChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
        const filteredItems = data.filter(item => item.city.toLowerCase().includes(text.toLowerCase()) || item.region.toLowerCase().includes(text.toLowerCase()));
        setFilteredData(filteredItems);
    }

    const [randomNumber, setRandomNumber] = useState(1);

    useEffect(() => {
        // Генерируем случайное число 1 или 2
        const random = Math.floor(Math.random() * 2) + 1;
        setRandomNumber(random);
    }, []);


    return (
        <div className='app_findroom'>
            <div className='app_findroom_input'>
                <label htmlFor="search">Знайти кімнату у своєму місті </label>
                <input type="text" id="search" value={searchText} onChange={handleSearchChange} placeholder='Пошук'/>
            </div>
            <div className='Rooms'>
                {filteredData.map(item => (
                <Rooms key={item.id} item={item} randomNumber={randomNumber}/>
            ))}
            </div>
        </div>
    );
}

export default FindRoom;
