import React from 'react'
import {PonysPlates} from '../../components';

import './Pony.css';

class Pony extends React.Component {

    render(){
        return (
            <div className='app__pony'>
                <PonysPlates Text='Допомогти іграшкою' Pony='1'/>
                <PonysPlates Text='Долучитися до роботи однієї з фізичних кімнати' Pony='2'/>
                <PonysPlates Text='Стати керівником кімнати у своєму місті ' Pony='3'/>
                <PonysPlates Text='Підтримати проєкт' Pony='4'/>
            </div>
        )
    }
}

export default Pony