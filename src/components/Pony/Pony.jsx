import React, { useState } from 'react'
import { PonysPlates } from '../../components';

import './Pony.css';
import {FindRoom} from '../../components';
import Payment from '../Payment/Payment'
import Contacts from "../Contacts/Contacts";
import { useNavigate } from 'react-router-dom';

const Pony = () => {
    const [whichWindow, setWhichWindows] = useState();
    let nagivate = useNavigate();

    const ChangeWindow = (whichOne) => {
        setWhichWindows(whichOne);
    }

    return (
        <div className='app__pony'>
            <PonysPlates text='Допомогти іграшкою' pony='1' ChangeWindow={() => nagivate()} />
            <PonysPlates text='Долучитися до роботи однієї з фізичних кімнати' pony='2' ChangeWindow={() => nagivate("#find-room")} />
            <PonysPlates text='Стати керівником кімнати у своєму місті ' pony='3' ChangeWindow={() => nagivate("#become-owner")} />
            <PonysPlates text='Підтримати проєкт' pony='4' ChangeWindow={() => nagivate("#support")} />
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