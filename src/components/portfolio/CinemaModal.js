import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';


class CinemaModal extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn size="10px" color="dark" onClick={this.toggle}>CINEMA SPIRITS</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <img src="./Assets/cinaspirits.png" className="img-fluid" alt="Cinema Spirits" />
        <MDBModalBody>
        Make it a theme night! Choose a liquor that you have around the house and receive drink options and a movie based on the liquor of your choice. 
        Utilizes TheCocktailDB and OMDb APIs, and uses Jquery and AOS library for effects.
        
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn href="https://github.com/olegaposh/Cinema_Spirits" color="dark">GITHUB</MDBBtn>
          <MDBBtn href="https://olegaposh.github.io/Cinema_Spirits/" color="dark">WEBSITE</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default CinemaModal;