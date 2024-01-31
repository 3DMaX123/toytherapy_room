import { React } from 'react';
import { Link } from "react-router-dom";
import './Toy.css'



const Products = ({ data }) => {
    return (
        <div className='app__toy'>
            <p className='toy__Text'>Ім'я: {data.name}</p>
            <img src={data.photo} alt='Іграшки' />
            <Link className='toy__Button'>Хочу ось такого</Link>
        </div>
    );
};

export default Products;