import React, { useState } from 'react'
import { PonysPlates } from '../../components';

import './Pony.css';
import {FindRoom} from '../../components';
import Payment from '../Payment/Payment'
import Contacts from "../Contacts/Contacts";

const Pony = () => {
    const [whichWindow, setWhichWindows] = useState();

    const ChangeWindow = (whichOne) => {
        setWhichWindows(whichOne);
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
            {whichWindow === '4' &&
                <Payment ChangeWindow={ChangeWindow} />
            }
            {whichWindow === '3' &&
                <Contacts ChangeWindow={ChangeWindow} />
            }
        </div>
    )
}

export default Pony