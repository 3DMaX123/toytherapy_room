import React from 'react'
import images from '../../constants/images'
import './PonysPlates.css';

const PonysPlates = ({ text, pony, ChangeWindow }) => {

  const handleWhichPony = () => {
    if (pony === '1') {
      return images.pony__ponyPlatesOne;
    } else if (pony === '2') {
      return images.pony__ponyPlatesTwo
    } else if (pony === '3') {
      return images.pony__ponyPlatesThree
    } else if (pony === '4') {
      return images.pony__ponyPlatesFour
    } else {
      return console.log('Container --> Pony --! PonyPlates = wrong "Pony" props value in PonysPlates call: Pony props = ' + pony)
    }
  }

  const handleStyle = () => {
    if (pony === '1') {
      return { left: '29px' };
    } else if (pony === '2') {
      return { left: '0' }
    } else if (pony === '3') {
      return { right: '0' }
    } else if (pony === '4') {
      return { right: '0' }
    }
  }

  const handleClassNameWhichPony = () => {
    if (pony === '1') {
      return 'One';
    } else if (pony === '2') {
      return 'Two';
    } else if (pony === '3') {
      return 'Three';
    } else if (pony === '4') {
      return 'Four';
    }
  }

  return (
    <div className='pony__ponyPlates' onClick={() => ChangeWindow(pony)}>
      <p className='ponyPlates-text'>{text}</p>
      <img className={'ponyPlates__-pony' + handleClassNameWhichPony()} src={handleWhichPony()} style={handleStyle()} alt="Поні" />
    </div>
  )
}

export default PonysPlates