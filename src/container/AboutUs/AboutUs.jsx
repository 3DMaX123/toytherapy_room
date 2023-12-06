import React from 'react';
import './AboutUs.css'
import images from "../../constants/images";
import { Link } from "react-router-dom";

const AboutUs = () => {

    return (
        <div className='app__aboutUs'>
            {window.scrollTo(0, 0)}
            <h1 className='aboutUs__header'>Про нас</h1>
            <div className='aboutUs__description'>
                <div className='aboutUs__description_content'>
                    <p className='aboutUs__content-aboutUSText'>Кімната терапії іграшкою – це простір, перебування, який дозволяє дитині виявити та вилити назовні свої переживання, та створює атмосферу безпеки і свободи від втручання.</p>
                    <img className='aboutUs__content_unicorn' src={images.aboutUs__singleUnicorn} alt='Toy unicorn' />
                </div>
                <div className='aboutUs__description_zigZag'>
                    <img alt="props" src={images.aboutus_props_Line} className='aboutUs__Line1' />
                    <img alt="props" src={images.aboutus_props_Line} className='aboutUs__Line2' />
                </div>
            </div>
            




            <div className='aboutUs__FooterButton'>
                <Link to={'/toytherapy_room'} className='aboutUs__FooterButton_Button'><img src={images.aboutus_props_buttonImage} />повернутися</Link>
            </div>
            <div className='Props__Images'>
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage1' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage2' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage3' />
                <img alt="props" src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart1' />
                <img alt="props" src={images.aboutus_props_Heart} className='aboutUs__Heart1' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage4' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage5' />
                <img alt="props" src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart2' />
                <img alt="props" src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart3' />
                <img alt="props" src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart4' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage6' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage7' />
                <img alt="props" src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart5' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage8' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage9' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage10' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage11' />
                <img alt="props" src={images.catalog__props_cloud1} className='aboutUs__cloudImage12' />
                <img alt="props" src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart6' />
                <img alt="props" src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart7' />
                <img alt="props" src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart8' />
                <img alt="props" src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart9' />
                <img alt="props" src={images.aboutus_props_Heart} className='aboutUs__Heart2' />
                <img alt="props" src={images.aboutus_props_Heart} className='aboutUs__Heart3' />
                <img alt="props" src={images.aboutus_props_Heart} className='aboutUs__Heart4' />
            </div>
        </div>
    );
};

export default AboutUs;
