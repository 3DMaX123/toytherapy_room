import React, { useState } from 'react'
import { PonysPlates } from '../../components';

import './Pony.css';
import {FindRoom} from '../../components';

const Pony = () => {
    const [whichWindow, setWhichWindows] = useState();

    const ChangeWindow = (whichOne) => {
        setWhichWindows(whichOne);
        console.log(whichOne);
    }

    return (
        <div className='app__pony'>
            <PonysPlates text='Допомогти іграшкою' pony='1' ChangeWindow={ChangeWindow} />
            <PonysPlates text='Долучитися до роботи однієї з фізичних кімнати' pony='2' ChangeWindow={ChangeWindow} />
            <PonysPlates text='Стати керівником кімнати у своєму місті ' pony='3' ChangeWindow={ChangeWindow} />
            <PonysPlates text='Підтримати проєкт' pony='4' ChangeWindow={ChangeWindow} />
            {whichWindow === '2' &&
                <FindRoom ChangeWindow={ChangeWindow} />
            }
        </div>
    )
}

export default Pony