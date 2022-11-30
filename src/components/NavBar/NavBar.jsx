import React from 'react'

import './NavBar.css';
import images from '../../constants/images';

class NavBar extends React.Component {

    render(){
        return (
            <div className='app__navbar'>
                <div className='navbar__buttons_helpToy'>
                    <img className='navbar__buttons_helptoy-icon navbar__helpToyIcon' src={images.navbar__helpToy} alt='Bear with toy'/>
                    <p className='navbar__buttons_helptoy-text'>допомогти іграшкою</p>
                </div>
                <div className='navbar__buttons_charity'>
                    <p className='navbar__buttons_helptoy-text'>підтримати проєкт</p>
                    <img className="navbar__buttons_helptoy-icon navbar__charityIcon" src={images.navbar__charity} alt="Charity heart"/>
                </div>
            </div>
          )
    } 
}

export default NavBar