import {React} from 'react';
import {Link} from "react-router-dom";
import './Toy.css'



const Products = ({ data }) => {
    return (
            <div className='app__toy'>
                <div className='toy__Text'>
                    <p>Ім'я: {data.name}</p>
                </div>
                <img src={data.photo} alt=''/>
                <Link className='toy__Button' to={`/toytherapy_room/catalog/product/${data.id}`}>Хочу ось такого</Link>
            </div>
    );
};

export default Products;