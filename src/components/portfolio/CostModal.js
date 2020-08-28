import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


class CostModal extends Component {
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
      <MDBBtn color="dark" onClick={this.toggle}>COST TRACKER</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        {/* <MDBModalHeader toggle={this.toggle}>My Cost Tracker</MDBModalHeader> */}
        <img src="./Assets/cost-image.png" className="img-fluid" alt="My Cost Tracker" />
        <MDBModalBody>
        
        This website uses NodeJS, Express, Handlebars, SQL, passport.js -- for the login to set up a unique user experience, and bcrypt -- to hash the password for user protection.
        
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn href="https://github.com/olegaposh/my_cost_tracker" color="dark">GITHUB</MDBBtn>
          <MDBBtn href="https://my-cost-tracker.herokuapp.com" color="dark">WEBSITE</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default CostModal;