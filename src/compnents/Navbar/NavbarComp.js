import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assests/images/logo.png'
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
import {FiUser} from 'react-icons/fi'
const NavbarComp = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand to="/">
           <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`me-auto ${styles.navCenter}`}>
            {/* {} */}
            <Nav.Link to="/" className={styles.active}>Home</Nav.Link>
            <Nav.Link to="/works">How it works</Nav.Link>
            <Nav.Link to="/our-chefs">Our Chefs</Nav.Link>
            <Nav.Link to="/books">Books</Nav.Link>
        
          </Nav>
          <Nav>
            <Nav.Link href="#signup">
              <span><FiUser
               style={{marginLeft:'15px'}}
              size={20}
              /></span>
              Sign up</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
             Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComp