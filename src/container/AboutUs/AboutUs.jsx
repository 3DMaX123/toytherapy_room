import React from 'react';
import './AboutUs.css'
import images from "../../constants/images";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigation = useNavigate()

    return (
        <div className='app__aboutUs'>
            {window.scrollTo(0, 0)}
            <p className='aboutUs__header'>Про нас</p>
            <div className='aboutUs__textBlock'>
                <p className='aboutUs__-paragraph'>Кімната терапії іграшкою – це простір, перебування, який дозволяє дитині виявити та вилити назовні свої переживання, та створює атмосферу безпеки і свободи від втручання</p>
                <img className="aboutUs__-img aboutUs__thirtyProcentresizedImage" src={images.aboutus__unicorn} alt='"Єдиноріг' />
                <img className="aboutUs__decorations_header aboutUs__decorations" src={images.aboutUs__decorations_header} alt='"Хмаринки та сердечки' />
            </div>
            <img className="aboutUs__zigZags" src={images.header__zigZag} alt='"Декорації' />
            <div className='aboutUs__textBlock'>
                <img className="aboutUs__-img aboutUs__thirtyProcentresizedImage" src={images.aboutus__bigWardrobeWithToys} alt='Шафа з іграшками' />
                <p className='aboutUs__-paragraph'>Мета проєкту - забезпечення психологічної підтримки громадян України та впровадження системної психологічної допомоги в нових умовах життя країни за допомогою терапевтичного ігрового простору. Цільва аудиторія проєкту - діти та дорослі, які постраждали від воєнної агресії, а також ВПО та біженці у інші країни Європи</p>
                <img className="aboutUs__decorations_goal aboutUs__decorations" src={images.aboutUs__decorations_goal} alt='"Хмаринки та сердечки' />
            </div>
            <div className='aboutUs__textBlock'>
                <p className='aboutUs__-paragraph'>Кімната, слугує предметом спілкування з дітьми через іграшки. Діти не мають слів, щоб передавати їх думки та переживання, тому кімната терапії іграшкою допомагає в цьому</p>
                <img className="aboutUs__-img aboutUs__smallWardrobeWithToys" src={images.aboutus__smallWardrobeWithToys} alt='Шафа з іграшками' />
            </div>
            <div className='aboutUs__textBlock aboutUs__textBlockResults'>
                <p className='aboutUs__-subHeader'>Очікувані результати</p>
                <ul className='aboutUs__-paragraphList'>
                    <li>відкриття кімнати терапії іграшкою в кожному арттерапевтичному просторі України, та волонтерських центрах Європи по роботі з біженцями;</li>
                    <li>можливість постійного арттерапевтичного супроводу дітей України;</li>
                    <li>мінімізація травм війни у дітей та дорослих;</li>
                    <li>створення сприятливого соціально-психологічного клімату в арттерапевтичних центрах;</li>
                    <li> залучення до надання психологічної допомоги висококваліфікованих фахівців, практичних психологів, арттерапевтів;</li>
                </ul>
                <img className="aboutUs__-img aboutUs__toyDrying" src={images.aboutus__toysDrying} alt='Попрасовані іграшки' />
                <img className="aboutUs__decorations_drying aboutUs__decorations" src={images.aboutUs__decorations_drying} alt='Хмаринки та сердечки' />
            </div>
            <p className='aboutUs__-subHeader'>Що вже зроблено станом на сьогодні</p>
            <div className='aboutUs__textBlock'>
                <img className="aboutUs__-img aboutUs__thirtyProcentresizedImage" src={images.aboutus__toys} alt='Іграшки' />
                <img className="aboutUs__decorations_results aboutUs__decorations" src={images.aboutUs__decorations_results} alt='Хмаринки та сердечки' />
                <p className='aboutUs__-paragraph'>Вже функціонує 71 кімнати по території України та 2 за кордоном. Офіційний старт проєкту з 1 вересня 2022 року. За цей час кімнати відвідало 746 дітей</p>
            </div>
            <div className='aboutUs__textBlock'>
                <p className='aboutUs__-paragraph'>На даний момент у проєкті задіяно 140 психологів-волонтерів, більшість з них арттерапевти, які мають психологічну або педагогічну вищу освіту</p>
                <img className="aboutUs__-img aboutUs__roomWithToys" src={images.aboutus__roomWithToys} alt='Кімната з іграшками' />
            </div>
            <div className='aboutUs__contacts'>
                <div className='aboutUs__contacts_block'>
                    <p className='aboutUs__contacts-title'>Телефон</p>
                    <a className='aboutUs__contacts-text' href='tel:380966086684'>+38(096)-608-6684</a>
                </div>
                <div className='aboutUs__contacts_block'>
                    <p className='aboutUs__contacts-title'>Email</p>
                    <a className='aboutUs__contacts-text' href='mailto:therapyroomukraine7@gmail.com'>therapyroomukraine7@gmail.com</a>
                </div>
                <img className="aboutUs__decorations_contacts aboutUs__decorations" src={images.aboutUs__decorations_contacts} alt='Хмаринки та сердечки' />
            </div>
            <button className='aboutUs__-returnButton' onClick={() => navigation(-1)}>
                <img className='aboutUs__returnButton-returnIcon' src={images.aboutus__returnArrow} alt='Стілочка назад' />
                повернутися
            </button>
            <div className='aboutUs__gradients'>
                <img className="aboutUs__gradients-header" src={images.aboutUs__gradients_header} alt='Градієнт' />
                <img className="aboutUs__gradients-goal" src={images.aboutUs__gradients_goal} alt='Градієнт' />
                <img className="aboutUs__gradients-results" src={images.aboutUs__gradients_results} alt='Градієнт' />
                <img className="aboutUs__gradients-alreadyDone" src={images.aboutUs__gradients_alreadyDone} alt='Градієнт' />
                <img className="aboutUs__gradients-bottomGrad" src={images.gradients__magickSpaceGrad} alt='Градієнт' />
            </div>
        </div>
    );
};

export default AboutUs;
