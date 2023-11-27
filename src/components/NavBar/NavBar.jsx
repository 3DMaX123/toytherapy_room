import React, {useState} from 'react'

import './NavBar.css';
import images from '../../constants/images';
import Payment from "../Payment/Payment";




const NavBar = () => {

    const [whichWindow, setWhichWindows] = useState();

    const ChangeWindow = (whichOne) => {
        setWhichWindows(whichOne);
    }
    return (
        <div className='app__navbar'>
            <div className='navbar__buttons_helpToy'>
                <img className='navbar__buttons_helptoy-icon navbar__helpToyIcon' src={images.navbar__helpToy} alt='Bear with toy'/>
                <p className='navbar__buttons_helptoy-text'>допомогти іграшкою</p>
            </div>
            <div className='navbar__buttons_charity' onClick={() => ChangeWindow('4')}>
                <p className='navbar__buttons_helptoy-text' >підтримати проєкт</p>
                <img className="navbar__buttons_helptoy-icon navbar__charityIcon" src={images.navbar__charity} alt="Charity heart"/>
            </div>
            {whichWindow === '4' &&
                <Payment ChangeWindow={ChangeWindow} />
            }
        </div>
    );
};

export default NavBar;
