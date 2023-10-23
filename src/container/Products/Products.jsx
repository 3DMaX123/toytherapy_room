import {React, useState} from 'react';
import {Link} from "react-router-dom";
import './Products.css'



const Products = ({ data }) => {
    return (
            <div className='app__toy'>
                <div className='toy__Text'>
                    <p>{data.name}</p>
                    <p>оглянути</p>
                </div>
                <img src={data.photo} alt=''/>
                <Link className='toy__Button' to={`/toytherapy_room/catalog/product/${data.id}`}>Хочу ось такого</Link>
            </div>
    );
};

export default Products;