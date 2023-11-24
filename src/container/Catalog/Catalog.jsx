import React, { useState } from 'react';
import './Catalog.css'
import images from "../../constants/images";
import { Link } from "react-router-dom";
import {Toy} from "../../components";
import dataForToys from "../../data/data for toys";


const Catalog = () => {
    const [showMore, setShowMore] = useState(8);
    return (
        <div className='app__catalog1'>
            <header className='catalog__header'>
                <p className='catalog__header_text'>* всі іграшки безкоштовні</p>
                <Link to={"/toytherapy_room"} className='catalog__textAndButton-button'>повернутися назад</Link>
                <p className='catalog__header_text'>* тому що ми хочемо допомогти</p>
                <img className='catalog__props_cloud1' src={images.catalog__props_cloud1} alt='Хмаринка 1' />
                <img className='catalog__props_cloud2' src={images.catalog__props_cloud2} alt='Хмаринка 2' />
                <img className='catalog__props_cloud3' src={images.catalog__props_cloud1} alt='Хмаринка 3' />
                <img className='catalog__props_cloud4' src={images.catalog__props_cloud2} alt='Хмаринка 4' />
            </header>
            <div className='catalog__toys'>
                {dataForToys.slice(0, showMore).map((prop) => (
                    <Toy key={prop.id} data={prop} />
                ))}
                <p onClick={() => setShowMore((prev) => prev + 8)} className='catalog__toys_moreproducts'>Показати ще</p>
            </div>
        </div>
    );
};

export default Catalog;