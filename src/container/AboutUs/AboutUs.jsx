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
            <div className='aboutUs__description_content aboutUs__goal'>
                <img className='aboutUs__goal-image' src={images.aboutus__goal} alt='Shelf with toys' />
                <p className='aboutUs__goal-text'>
                    Мета проєкту - забезпечення психологічної підтримки громадян України та впровадження системної психологічної допомоги в нових умовах життя країни за допомогою терапевтичного ігрового простору.
                    Цільва аудиторія проєкту - діти та дорослі, які постраждали від воєнної агресії, а також ВПО та біженці у інші країни Європи.
                </p>
            </div>
            <div className='aboutUs__description_content aboutUs__shelf_with_toys'>
                <p className='aboutUs__shelf_with_toys-text'>Кімната, слугує предметом спілкування з дітьми через іграшки.
                    <br/><br/>
                    Діти не мають слів, щоб передавати їх думки та переживання, тому кімната терапії іграшкою допомагає в цьому.
                </p>
                <img src={images.aboutus__shelf_with_toys} className='aboutUs__shelf_with_toys-image' alt='Shelf with big toys' />
            </div>
            <div className='aboutUs__description_content aboutUs__expectedResults'>
                <h2>Очікувані результати</h2>
                <p>
                    · відкриття кімнати терапії іграшкою в кожному арттерапевтичному просторі України, та волонтерських центрах Європи по роботі з біженцями;<br/>
                    · можливість постійного арттерапевтичного супроводу дітей України;<br/>
                    · мінімізація травм війни у дітей та дорослих;<br/>
                    · створення сприятливого соціально-психологічного клімату в арттерапевтичних центрах;<br/>
                    · залучення до надання психологічної допомоги висококваліфікованих фахівців, практичних психологів, арттерапевтів.
                </p>
                <img className='aboutUs__expectedResults-image' src={images.aboutus__bears_on_rope} alt='Bears on rope'/>
            </div>
            <div className='aboutUs__description_content aboutUs__alreadyDone'>
            <h2>Що вже зроблено станом на сьогодні</h2>
                <div className='aboutUs__alreadyDone_first'>
                    <img className='aboutUs__alreadyDone_first-image' src={images.aboutus__props_bunnys} alt='Bunnys'/>
                    <p className='aboutUs__alreadyDone_first-text'>Вже функціонує 71 кімнати по території України та 2 за кордоном. фіційний старт проєкту з 1 вересня 2022 року. За цей час кімнати відвідало 746 дітей.</p>
                </div>
                <div className='aboutUs__alreadyDone_second'>
                    <p className='aboutUs__alreadyDone_second-text'>На даний момент у проєкті задіяно 140 психологів-волонтерів, більшість з них арттерапевти, які мають психологічну або педагогічну вищу освіту.</p>
                    <img className='aboutUs__alreadyDone_second-image' src={images.aboutus__props_room_with_toys} alt='Room wirh toys'/>
                </div>
            </div>
            <div className='aboutUs_contactInfo'>
                <div>
                    <p className='aboutUs_contactInfo-phone'>Телефони:</p>
                    <p className='aboutUs_contactInfo-number'>+38(096)6086684</p>
                </div>
                <div>
                    <p className='aboutUs_contactInfo-phone'>Телефони:</p>
                    <p className='aboutUs_contactInfo-number'>+38(096)6086684</p>
                </div>
            </div>
            <div className='aboutUs_contactInfoEmail'>
                    <p className='aboutUs_contactInfo-Email'>Email:</p>
                    <p className='aboutUs_contactInfo-fullEmail'>therapyroomukraine7@gmail.com</p>
            </div>




            <div className='aboutUs__FooterButton'>
                <Link to={'/toytherapy_room'} className='aboutUs__FooterButton_Button'><img src={images.aboutus_props_buttonImage}/>повернутися</Link>
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
