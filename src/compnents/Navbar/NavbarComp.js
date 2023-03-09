import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assests/images/logo.png'
import styles from './Navbar.module.css'
import { Link,NavLink  } from "react-router-dom";
import {FiUser} from 'react-icons/fi'
const NavbarComp = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand to="/">
           <img src={logo} alt="logo" className='img-fluid' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`me-auto ${styles.navCenter}`}>
            <Link to="/" className={styles.active}>Home</Link>
            <Link to="/works">How it works</Link>
            <Link to="/shefs">Our Chefs</Link>
            <Link to="/book ">Books</Link>
        
          </Nav>
          <Nav className={styles.navLeft}>
            <Link to="/signup">
              <span><FiUser
               style={{marginLeft:'15px'}}
              size={20}
              /></span>
              Sign up</Link>
            <Link eventKey={2} to="/login">
             Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComp