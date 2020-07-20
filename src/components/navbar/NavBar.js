import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink } from "mdbreact";
import "./NavBar.css"

export default () => (
  <BrowserRouter>

    <MDBNav className="navbar justify-content-end p-3">
      <MDBNavLink className="white-text" active to="#!">Home</MDBNavLink>
      <MDBNavLink className="white-text" to="#!">Portfolio</MDBNavLink>
      <MDBNavLink className="white-text" to="#!">Contact</MDBNavLink>
      
    </MDBNav>

  </BrowserRouter>
);