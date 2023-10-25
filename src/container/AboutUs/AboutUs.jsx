import React from 'react';
import './AboutUs.css'
import images from "../../constants/images";
import {Link} from "react-router-dom";

const AboutUs = () => {
    return (
        <div className='app__aboutUs'>
            <div className='aboutUs__headerDiv'>
            <p className='aboutUs__headerText'>Про нас</p>
            </div>
            <div className='aboutUs__TextAndImage__First'>
                <div >
                    <p className='aboutUs__textDescription'>
                        Кімната терапії іграшкою – це простір,<br/> перебування, який дозволяє дитині
                        виявити <br/>та вилити назовні свої переживання, та
                        створює атмосферу безпеки і свободи від втручання.
                    </p>
                </div>
                <div >
                    <img src={images.aboutus__props_image1} className='aboutUs__image'/>
                </div>
            </div>
            <div className='aboutUs__TextAndImage__Second'>
                <div>
                    <img src={images.aboutus__props_image2} className='aboutUs__image2'/>
                </div>
                <div className='aboutUs__TextAndImageSecond__Text'>
                    <p className='aboutUs__textDescription'>
                        Мета проєкту - забезпечення психологічної підтримки громадян України та впровадження системної психологічної допомоги в
                        нових умовах життя країни за допомогою терапевтичного ігрового простору.<br/>
                        Цільва аудиторія проєкту - діти та дорослі, які постраждали від воєнної агресії, а також ВПО та біженці
                        у інші країни Європи.
                    </p>
                </div>
            </div>
            <div className='aboutUs__TextAndImage__Third'>
                <div className='aboutUs__TextAndImageSecond__Third'>
                    <p className='aboutUs__textDescription'>
                        Кімната, слугує предметом<br/> спілкування
                        з дітьми через<br/> іграшки.
                        <br/><br/>
                        Діти не мають слів, щоб<br/> передавати їх думки та<br/> переживання,
                        тому кімната терапії<br/> іграшкою допомагає в цьому.
                    </p>
                </div>
                <div >
                    <img src={images.aboutus__props_image3} className='aboutUs__image3'/>
                </div>
            </div>
            <div className='aboutUs__ExpectedResults'>
                <div>
                    <p className='aboutUs__ExpectedResults_HeaderText'>Очікувані результати</p>
                    <p className='aboutUs__textDescription'>
                        · відкриття кімнати терапії іграшкою в кожному арттерапевтичному просторі України, та волонтерських центрах Європи по роботі з біженцями;<br/>
                        · можливість постійного арттерапевтичного супроводу дітей України;<br/>
                        · мінімізація травм війни у дітей та дорослих;<br/>
                        · створення сприятливого соціально-психологічного клімату в арттерапевтичних центрах;<br/>
                        · залучення до надання психологічної допомоги висококваліфікованих фахівців, практичних психологів, арттерапевтів.
                    </p>
                </div>
                <div>
                    <img src={images.aboutus__props_image4} className='aboutUs__image4'/>
                </div>
            </div>
            <div className='aboutUs__AlreadyDone'>
                <p className='aboutUs__AlreadyDone_HeaderText'>Що вже зроблено станом на сьогодні</p>
                <div className='aboutUs__AlreadyDone_TextAndImage'>
                    <div >
                    <img src={images.aboutus__props_image5} className='aboutUs__image5'/>
                    </div>
                    <div className='AlreadyDone_TextAndImage_Text'>
                        <p className='aboutUs__textDescription'>
                            Вже функціонує 71 кімнати по території України та 2 за кордоном.<br/>
                            Офіційний старт проєкту з 1 вересня 2022 року.
                            За цей час кімнати відвідало 746 дітей.
                        </p>
                    </div>

                </div>


            </div>
            <div className='aboutUs__TextAndImage__Fourth'>
                <div className='TextAndImage__Fourth_Text'>
                    <p className='aboutUs__textDescription'>
                        На даний момент у проєкті задіяно 140 психологів-волонтерів,
                        більшість з них арттерапевти, які мають психологічну або педагогічну вищу освіту.
                    </p>
                </div>
                <div>
                    <img src={images.aboutus__props_image6} className='aboutUs__image6'/>
                </div>
            </div>
            <div className='aboutUs__ContactInformarion'>
                <div>
                    <p className='aboutUs__ContactInformarion_Phone'>Телефони:</p>
                    <p className='aboutUs__ContactInformarion_Number'>+38(096)6086684</p>
                </div>
                <div>
                    <p className='aboutUs__ContactInformarion_Phone'>Телефони:</p>
                    <p className='aboutUs__ContactInformarion_Number'>+38(096)6086684</p>
                </div>

            </div>
            <div className='aboutUs__ContactInformarion_Email'>
            <p className='ContactInformarion_Email'>Email:</p>
            <p className='ContactInformarion_email'>therapyroomukraine7@gmail.com</p>
            </div>
            <div className='aboutUs__FooterButton'>
                <Link to={'/toytherapy_room'} className='aboutUs__FooterButton_Button'><img src={images.aboutus_props_buttonImage}/>повернутися</Link>
            </div>
            <div className='Props_Images'>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage1'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage2'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage3'/>
                <img src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart1'/>
                <img src={images.aboutus_props_Heart} className='aboutUs__Heart1'/>
                <img src={images.aboutus_props_Line} className='aboutUs__Line1'/>
                <img src={images.aboutus_props_Line} className='aboutUs__Line2'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage4'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage5'/>
                <img src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart2'/>
                <img src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart3'/>
                <img src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart4'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage6'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage7'/>
                <img src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart5'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage8'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage9'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage10'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage11'/>
                <img src={images.catalog__props_cloud1} className='aboutUs__cloudImage12'/>
                <img src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart6'/>
                <img src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart7'/>
                <img src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart8'/>
                <img src={images.aboutus_props_littleHeart} className='aboutUs__littleHeart9'/>
                <img src={images.aboutus_props_Heart} className='aboutUs__Heart2'/>
                <img src={images.aboutus_props_Heart} className='aboutUs__Heart3'/>
                <img src={images.aboutus_props_Heart} className='aboutUs__Heart4'/>
        </div>
        </div>
    );
};

export default AboutUs;
