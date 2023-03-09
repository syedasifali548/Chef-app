import React from 'react'
import { Col, Row ,Container} from 'react-bootstrap'
import styles from'./Footer.module.css'
import footerLogo from '../../assests/images/footer-logo.png'
import { Link } from 'react-router-dom';
import {MdLocationPin,MdEmail, MdPhone,MdFacebook} from 'react-icons/md'
import { BsFillSendFill, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
   <footer className={styles.footer}>
    <Container>

    <Row className={styles.footerRow}>
        <Col lg={3} md={6} sm={12}>
            <div className={styles.footer_logo}>
                  <img src={footerLogo} alt="footerLogo" className='img-fluid'/>
            </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
            <div className={styles.footer_link}>
                <h5>Address</h5>
                <ul>
            <li><span><MdLocationPin size={20}/></span>  Park Avenue South, New York, 74812, United States</li>
            <li> <span><MdEmail size={20}/></span>  <a href="mailto:contact@chefprive.com">contact@chefprive.com</a></li>
            <li> <span><MdPhone size={20}/></span>  <a href="tel:000-123-456">000-123-456</a></li>

            
        </ul>
            </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <div className={styles.footer_link}>
        <h5>Links</h5>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Our Chefs</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">What's new</a></li>
        </ul>
        </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <div className={styles.footer_link}>
        <h5>Subcribe to Newsletter</h5>
         <div className={styles.newsLetter_email}>
            <input type="email" placeholder='Email Address'/>
            <button><BsFillSendFill size={25}  fill='white'/></button>
         </div>
         <div className={styles.ourSocials}>
            <h5>Our Social</h5>
         <ul>

            <li><a href="#"><MdFacebook size={25} 
            className={styles.iconsSOcial}/></a></li>
            <li><a href="#"><BsTwitter size={25} 
            className={styles.iconsSOcial}/></a></li>
            <li><a href="#"><BsInstagram size={25} 
            className={styles.iconsSOcial}/></a></li>
        </ul>
         </div>
        </div>

        </Col>
    </Row>
    <div className={styles.copyRight}>
        <p className={styles.small}>Copyrights 2022 Chef Prive - All Rights Reserved</p>
    </div>
    </Container>
   </footer>
    </>
  )
}

export default Footer