import React from 'react';
import './Products.css'
import {Link} from "react-router-dom";
import images from '../../constants/images'

const Products = () => {
    return (
        <div className='app__products'>
            {/*{props.map((prop) => (*/}
            {/*    <div key={prop.id} className='catalog__products'>*/}
            {/*        <p>{prop.name}</p>*/}
            {/*        <p>оглянути</p>*/}
            {/*    <img src={prop.img} alt=''/>*/}
            {/*        <Link to={`/toytherapy_room/catalog/product/${props.product.id}`}>Хочу ось такого</Link>*/}
            {/*    </div>*/}
            {/*))}*/}
            <div  className='catalog__toys'>
            <div className='catalog__toysText'>
                <p>Ім'я: Калушик</p>
                <p>оглянути</p>
                </div>
                <img src={images.bunny1} alt='bunny1'/>
                <Link className='catalog__toysButton' to={`/toytherapy_room/catalog/product/` }>Хочу ось такого</Link>
            </div>
            <div  className='catalog__toys'>
                <div className='catalog__toysText'>
                    <p>Ім'я: Калушик</p>
                    <p>оглянути</p>
                </div>
                <img src={images.bunny1} alt='bunny1'/>
                <Link className='catalog__toysButton' to={`/toytherapy_room/catalog/product/` }>Хочу ось такого</Link>
            </div>
            <div  className='catalog__toys'>
                <div className='catalog__toysText'>
                    <p>Ім'я: Калушик</p>
                    <p>оглянути</p>
                </div>
                <img src={images.bunny1} alt='bunny1'/>
                <Link className='catalog__toysButton' to={`/toytherapy_room/catalog/product/` }>Хочу ось такого</Link>
            </div>
            <div  className='catalog__toys'>
                <div className='catalog__toysText'>
                    <p>Ім'я: Калушик</p>
                    <p>оглянути</p>
                </div>
                <img src={images.bunny1} alt='bunny1'/>
                <Link className='catalog__toysButton' to={`/toytherapy_room/catalog/product/` }>Хочу ось такого</Link>
            </div>
            <div  className='catalog__toys'>
                <div className='catalog__toysText'>
                    <p>Ім'я: Калушик</p>
                    <p>оглянути</p>
                </div>
                <img src={images.bunny1} alt='bunny1'/>
                <Link className='catalog__toysButton' to={`/toytherapy_room/catalog/product/` }>Хочу ось такого</Link>
            </div>
            <div  className='catalog__toys'>
                <div className='catalog__toysText'>
                    <p>Ім'я: Калушик</p>
                    <p>оглянути</p>
                </div>
                <img src={images.bunny1} alt='bunny1'/>
                <Link className='catalog__toysButton' to={`/toytherapy_room/catalog/product/` }>Хочу ось такого</Link>
            </div>
            <div  className='catalog__toys'>
                <div className='catalog__toysText'>
                    <p>Ім'я: Калушик</p>
                    <p>оглянути</p>
                </div>
                <img src={images.bunny1} alt='bunny1'/>
                <Link className='catalog__toysButton' to={`/toytherapy_room/catalog/product/` }>Хочу ось такого</Link>
            </div>
            <div  className='catalog__toys'>
                <div className='catalog__toysText'>
                    <p>Ім'я: Калушик</p>
                    <p>оглянути</p>
                </div>
                <img src={images.bunny1} alt='bunny1'/>
                <Link className='catalog__toysButton' to={`/toytherapy_room/catalog/product/` }>Хочу ось такого</Link>
            </div>
        </div>
    );
};

export default Products;