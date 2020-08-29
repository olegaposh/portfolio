import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';


class EstateModal extends Component {
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
      <MDBBtn color="dark" onClick={this.toggle}>WASHBURN</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        {/* <MDBModalHeader toggle={this.toggle}>Washburn Real Estate</MDBModalHeader> */}
        <img src="./Assets/map.png" className="img-fluid" alt="map and home listings" />
        <MDBModalBody>
        
        This website was created with focus on the MERN technology stack, and Auth0 authentication.
          (MongoDB, Express, React, and Node.js)
        
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn href="https://github.com/azu20/real-estate" color="dark">GITHUB</MDBBtn>
          <MDBBtn href="https://codydevloop-washburn-realestat.herokuapp.com" color="dark">WEBSITE</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default EstateModal;