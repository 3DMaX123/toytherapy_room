import React, { useState } from 'react';
import './Catalog.css'
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { Toy } from "../../components";
import dataForToys from "../../data/data for toys";


const Catalog = () => {
    const [showMore, setShowMore] = useState(8);
    return (
        <div className='app__catalog'>
            <img className="catalog__headerGrad" src={images.gradients__headerGrad} alt='Градієнт' />
            <img className="catalog__footerGrad" src={images.gradients__headerGrad} alt='Градієнт' />
            <header className='catalog__header'>
                <img className='catalog__clouds' src={images.catalog__pageClouds} alt='Хмаринки' />
                <p className='catalog__header_text'>* всі іграшки безкоштовні</p>
                <Link to={"/toytherapy_room"} className='catalog__textAndButton-button'>повернутися назад</Link>
                <p className='catalog__header_text'>* тому що ми хочемо допомогти</p>
            </header>
            <div className='catalog__toys'>
                {dataForToys.slice(0, showMore).map((prop) => (
                    <Toy key={prop.id} data={prop} />
                ))}
            </div>
            {showMore < dataForToys.length &&
                <p onClick={() => setShowMore((prev) => prev + 8)} className='catalog__toys_moreproducts'>Показати ще</p>
            }
        </div>
    );
};

export default Catalog;