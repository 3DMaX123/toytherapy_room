import React, {useState} from 'react'

import './NavBar.css';
import images from '../../constants/images';
import Payment from "../Payment/Payment";
import { useLocation } from 'react-router-dom';
import FindRoom from '../FindRoom/FindRoom';
import Contacts from '../Contacts/Contacts';




const NavBar = () => {
    let location = useLocation();
    const [whichWindow, setWhichWindows] = useState();

    const ChangeWindow = (whichOne) => {
        setWhichWindows(whichOne);
    }
    return (
        <>
        {location.hash === '#find-room' &&
            <FindRoom />
        }
        {location.hash === '#become-owner' &&
            <Contacts />
        }
        {location.hash === '#support' &&
            <Payment />
        }
            <div className='app__navbar'>
                <div className='navbar__buttons_helpToy'>
                    <img className='navbar__buttons_helptoy-icon navbar__helpToyIcon' src={images.navbar__helpToy} alt='Bear with toy'/>
                    <p className='navbar__buttons_helptoy-text'>допомогти іграшкою</p>
                </div>
                <a href='#support' className='navbar__buttons_charity'>
                    <p className='navbar__buttons_helptoy-text' >підтримати проєкт</p>
                    <img className="navbar__buttons_helptoy-icon navbar__charityIcon" src={images.navbar__charity} alt="Charity heart"/>
                </a>
            </div>
        </>
    );
};

export default NavBar;
