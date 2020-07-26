import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";
import "./NavBar.css"
import { HashLink as Link } from 'react-router-hash-link';



export default () => (
  <Router>

    <MDBNav className="navbar justify-content-end p-3">
      <MDBNavLink className="white-text" active to="#!">Home</MDBNavLink>
      <MDBNavItem> <Link to="#portfolio" className="white-text">Portfolio</Link></MDBNavItem>
      <MDBNavLink className="white-text" to="#!">Contact</MDBNavLink>
      
    </MDBNav>

  </Router>
);