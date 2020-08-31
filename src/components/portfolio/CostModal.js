import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';


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
        The My Cost Tracker keeps track of all your daily costs and keeps a total. Utilizes NodeJS, Express, Handlebars, SQL, passport.js -- for authentication, and bcrypt -- to hide the user password.
        
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