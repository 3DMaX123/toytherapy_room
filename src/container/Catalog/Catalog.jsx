import React from 'react';
import './Catalog.css'
import images from "../../constants/images";
import {Link} from "react-router-dom";
import Products from "../Products/Products";

const Catalog = () => {
    return (
        <div className='app__catalog1'>
            <header className='catalog__Header'>
            <p >* всі іграшки безкоштовні</p>
                <Link to={"/toytherapy_room"} className='catalog__textAndButton-button'>повернутися назад</Link>
            <p>* тому що ми хочемо допомогти</p>
                <img className='catalog__props_cloud1' src={images.catalog__props_cloud1} alt='Хмаринка 1'/>
                <img className='catalog__props_cloud2' src={images.catalog__props_cloud2} alt='Хмаринка 2'/>
                <img className='catalog__props_cloud3' src={images.catalog__props_cloud1} alt='Хмаринка 3'/>
                <img className='catalog__props_cloud4' src={images.catalog__props_cloud2} alt='Хмаринка 4'/>
            </header>
            {/*{props.map((prop) => (*/}
            {/*    <div key={prop.id} className='catalog__products'>*/}
            {/*        <p>{prop.name}</p>*/}
            {/*        <p>оглянути</p>*/}
            {/*    <img src={prop.img} alt=''/>*/}
            {/*        <Link to={`/toytherapy_room/catalog/product/${props.product.id}`}>Хочу ось такого</Link>*/}
            {/*    </div>*/}
            {/*))}*/}
            <Products />
        </div>
    );
};

export default Catalog;