import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';


class BookModal extends Component {
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
      <MDBBtn size="10px" color="dark" onClick={this.toggle}>BOOK SEARCH</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <img src="./Assets/book-search.png" className="img-fluid" alt="Google Book Search" />
        <MDBModalBody>
        
        Utilizies the Google Books API to fetch for searched books. Utilizes MongoDB to allow the user
        to save their favorite books. MERN stack(MongoDB, Express.js, React, and Node)
        
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn href="https://github.com/olegaposh/book_search" color="dark">GITHUB</MDBBtn>
          <MDBBtn href="https://book-search-react-2020.herokuapp.com" color="dark">WEBSITE</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default BookModal;