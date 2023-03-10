import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./Home.module.css";
import banner from "../../assests/images/banner.png";
import pic1 from "../../assests/images/pic1.png";
import pic2 from "../../assests/images/pic2.png";
import pic3 from "../../assests/images/pic3.png";
import pic4 from "../../assests/images/pic4.png";
import visa from "../../assests/images/visa.png";
import mobile from "../../assests/images/mobile.png";
import googleplay from "../../assests/images/google-play.png";
import appstore from "../../assests/images/app-store.png";
import cat1 from "../../assests/images/cat1.png";
import cat2 from "../../assests/images/cat2.png";
import cat3 from "../../assests/images/cat3.png";
import cat4 from "../../assests/images/cat4.png";
import cat5 from "../../assests/images/cat5.png";
import {slidedata} from '../../slidesData'
import { customerSlide } from "../../slidesData";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdGroups2,
  MdDateRange,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import DishSwipper from "../../compnents/DishesSwiper/DishSwipper";
import CustomerSwiper from "../../compnents/CustomerSwiper/CustomerSwiper";


const Home = () => {
  const [count, setCount] = useState(0);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const catgImages = [
    {
      id:1,
      image : cat2,
      title:"Master Chiefs"
    },
    {
      id:2,
      image : cat3,
      title:"Desserts"
    },
    {
      id:1,
      image : cat4,
      title:"Events"

    },
    {
      id:1,
      image : cat5,
      title:"Birtdays"
    },
  ]
  return (
    <>
    {/* Hero section starts */}
      <section className={styles.banner_section}>
        
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div className={styles.hero_main}>
                <div className={styles.hero_section_Heading}>
                  <h1 >
                    Book{" "}
                    <span className={styles.yellowHeading}> private chef </span>
                    for your dinner{" "}
                    <span className={styles.yellowHeading}>party</span>
                  </h1>
                </div>
                <div className={styles.hero_section_para}>
                  <p>
                    We???re providing the best Chef booking platform. Choose a
                    menu and book your Chef instantly
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className={styles.hero_img_wrapper}>
                <img src={banner} alt="banner" className="img-fluid" />
              </div>
            </Col>
            <Col lg={8} md={10} sm={12}>
              <div className={styles.input_wrapper}>
                <div className={styles.input_groups}>
                  <label for="start">
                    <FaLocationArrow size={26} />
                    Select Region
                    <MdOutlineKeyboardArrowDown color="FF9E2C" size={26} />
                  </label>
                  <select id="country" name="country">
                    <option value="australia">Al Shamal</option>
                    <option value="canada">Al Shamal</option>
                    <option value="usa">Al Shamal</option>
                  </select>
                </div>

                <div className={styles.input_groups}>
                  <label for="start">
                    <MdDateRange size={26} />
                    Start date
                    <MdOutlineKeyboardArrowDown color="FF9E2C" size={26} />
                  </label>
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value="2018-07-22"
                    min="2018-01-01"
                    max="2018-12-31"
                  ></input>
                </div>
                <div className={styles.input_groups}>
                  <label>
                    <MdGroups2 size={26} />
                    Select persons
                  </label>
                  <div className={styles.selectPersons}>
                    <div className={styles.circle}>
                      <MdOutlineKeyboardArrowDown
                        color="FF9E2C"
                        size={22}
                        onClick={() => setCount(count - 1)}
                      />
                    </div>
                    <span className={styles.num}>{count}</span>
                    <div className={styles.circle}>
                      <MdOutlineKeyboardArrowUp
                        color="FF9E2C"
                        size={22}
                        onClick={() => setCount(count + 1)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Row>
                <Col md={4}>
                  <div className={styles.rating_imgs_wrapper}>
                    <ul>
                      <li>
                        <img src={pic1} alt="pics" />
                      </li>
                      <li>
                        <img src={pic2} alt="pics" />
                      </li>
                      <li>
                        <img src={pic3} alt="pics" />
                      </li>
                      <li>
                        <img src={pic4} alt="pics" />
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={5} sm={12}>
                  <div className={styles.happy_customers}>
                    <p>Our happy customers</p>
                    <div className={styles.starsRating}>
                    <ReactStars
                      count={1}
                      onChange={ratingChanged}
                      size={20}
                      activeColor="#FF9E2C"
                    />
                    <p style={{color:"#000"}}>4.7</p>
                    <p>(8.4K Review)</p>
                    </div>
                    
                  </div>
                </Col>
                <Col md={3} sm={12}>
                    <div className={styles.visa_img}>
                    <img src={visa} alt="visa" className="img-fluid" />
                    </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={2} sm={12}>
              <div className={styles.forward_cricle}>
                <MdOutlineKeyboardArrowRight color="#fff" size={40} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    {/* Hero section ends */}


{/* Second section starts */}

<section className={styles.sectTwo}>
  <Container>
    <Row>
        <Col md={3} sm={12}>
            <div className={styles.mobileImg_Wrapper}>
                <img src={mobile} alt="mobile" className="img-fluid"/>
            </div>
        </Col>
        <Col md={9} sm={12}>
            <div className={styles.download_app}>
                <h3>Download our Mobile App</h3>
                <div className={styles.apps_group}>
                     <img src={googleplay}  className="img-fluid"  alt="googleplay" />
                     <img src={appstore}  className="img-fluid"  alt="appstore" />
                </div>
            </div>
        </Col>
    </Row>
    </Container>
</section>
{/* Second section ends */}


{/* Third Section starts */}
<section className={styles.thirdSect}>
  <Container>

    <Row>
        <Col lg={3} md={4} sm={12}>
            <div className={styles.popular_sidhes_heading}>
                <h3>Our Most 
                  <span style={{color:"#FF9E2C"}}>
                  Popular Dishes 
                    </span> 
                  This Month
                  </h3>
                    <a className={styles.primary_btn}>See all</a>
            </div>

        </Col>
        <Col lg={9} md={8} sm={12}>
            <DishSwipper slidedata={slidedata}/>
        </Col>
    </Row>
  </Container>
</section>
{/* Third Section ends */}



{/* Section four starts */}
<section className={styles.categories_section}>
  <Container >
  <div className={styles.catgHeading}>
  <h3>Browse by <span style={{color:"#FF9E2C"}}>Categories</span></h3>

  </div>
<Row>
  <Col md={6} sm={12}>
    <div className={styles.catg_img_large}>
       <img src={cat1} alt="cat1" className="img-fluid" />
    </div>
  </Col>
  <Col md={6} sm={12}>
    <Row>
      {
        catgImages.map((catImg)=>(
            <Col md={6} sm={12}>
          <div className={styles.catg_imgs}>
            <img src={catImg.image} alt="" className="img-fluid" />
            <h6>{catImg.title}</h6>
      </div>
    </Col>
        ))
      }
         
    </Row>
  </Col>
</Row>
</Container>
</section>
{/* Section four ends */}


{/* Customers sexction starts */}
<section className={styles.customerSection}> 
  <Container>
    <Row>
      <Col>
      <h2>What our
        <span style={{color:"#FF9E2C", marginLeft:'13px', marginRight:'13px'}}>
         Customers 
        </span>
         says</h2>
      </Col>
      <Col>
      <CustomerSwiper 
      customerSlide={customerSlide}
      />
      </Col>
    </Row>
  </Container>
</section>
{/* Customers sexction ends */}


    </>
  );
};

export default Home;
