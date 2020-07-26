import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";
import "./NavBar.css"
import { HashLink as Link } from 'react-router-hash-link';




export default () => (
  <Router>
    
    <MDBNav className="navbar  justify-content-end  p-3 sticky-top">
      
      <h1 className="mr-auto">Alex Poshivailo</h1>
      <MDBNavItem> <Link to="#portfolio" className="white-text p-2">Portfolio</Link></MDBNavItem>
      <MDBNavItem> <Link to="#contact" className="white-text p-2">Contact</Link></MDBNavItem>
    </MDBNav>

  </Router>
);