import React from 'react'
import images from '../../constants/images'
import {useState} from "react";
import './PonysPlates.css';
import FindRoom from "../../container/FindRoom/FindRoom";

class PonysPlates extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: this.props.Text,
      pony: this.props.Pony,
      isModalOpen: false,
    }
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };


  handleWhichPony(){
    if(this.state.pony === '1'){
      return images.pony__ponyPlatesOne;
    }else if(this.state.pony === '2'){
      return images.pony__ponyPlatesTwo
    }else if(this.state.pony === '3'){
      return images.pony__ponyPlatesThree
    }else if(this.state.pony === '4'){
      return images.pony__ponyPlatesFour
    }else{
      return console.log('Container --> Pony --! PonyPlates = wrong "Pony" props value in PonysPlates call: Pony props = ' + this.state.pony)
    }
  }

  handleStyle(){
    if(this.state.pony === '1'){
      return {left: '29px'};
    }else if(this.state.pony === '2'){
      return {left: '0'}
    }else if(this.state.pony === '3'){
      return {right: '0'}
    }else if(this.state.pony === '4'){
      return {right: '0'}
    }
  }

  handleClassNameWhichPony(){
    if(this.state.pony === '1'){
      return 'One';
    }else if(this.state.pony === '2'){
      return 'Two';
    }else if(this.state.pony === '3'){
      return 'Three';
    }else if(this.state.pony === '4'){
      return 'Four';
    }
  }

    render(){
      return (
        <div className='pony__ponyPlates' onClick={this.openModal}>
          <p className='ponyPlates-text'>{this.state.text}</p>
          <img className={'ponyPlates__-pony' + this.handleClassNameWhichPony()} src={this.handleWhichPony()} style={this.handleStyle()} alt="Поні" />
          {this.state.isModalOpen && (
              <FindRoom onClose={this.closeModal} />
          )}
        </div>
      )
    }
}

export default PonysPlates