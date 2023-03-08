import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
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
import {slidedata} from '../../slidesData'

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


const Home = () => {
  const [count, setCount] = useState(0);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
    {/* Hero section starts */}
      <section className={styles.banner_section}>
        {/* <Container> */}
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
                    We’re providing the best Chef booking platform. Choose a
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
            <Col md={6}>
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
                <Col md={5}>
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
                <Col md={3}>
                    <div className={styles.visa_img}>
                    <img src={visa} alt="visa" className="img-fluid" />
                    </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <div className={styles.forward_cricle}>
                <MdOutlineKeyboardArrowRight color="#fff" size={40} />
              </div>
            </Col>
          </Row>
        {/* </Container> */}
      </section>
    {/* Hero section ends */}


{/* Second section starts */}

<section className={styles.sectTwo}>
    <Row>
        <Col md={3}>
            <div className={styles.mobileImg_Wrapper}>
                <img src={mobile} alt="mobile" className="img-fluid"/>
            </div>
        </Col>
        <Col md={9}>
            <div className={styles.download_app}>
                <h3>Download our Mobile App</h3>
                <div className={styles.apps_group}>
                     <img src={googleplay}  className="img-fluid"  alt="googleplay" />
                     <img src={appstore}  className="img-fluid"  alt="appstore" />
                </div>
            </div>
        </Col>
    </Row>

</section>
{/* Second section ends */}


{/* Third Section starts */}
<section className={styles.thirdSect}>
    <Row>
        <Col md={3}>
            <div className={styles.popular_sidhes_heading}>
                <h3>Our Most 
                  <span style={{color:"#FF9E2C"}}>
                  Popular Dishes 
                    </span> 
                  This Month
                  </h3>
                    
            </div>

        </Col>
        <Col md={9}>
            <DishSwipper slidedata={slidedata}/>
        </Col>
    </Row>
</section>
{/* Third Section ends */}



{/* Section four starts */}
<section className={styles.ategories}>
<Row>
  <Col md={6} sm={12}>
  </Col>
  <Col md={6} sm={12}></Col>
</Row>
</section>
{/* Section four ends */}

    </>
  );
};

export default Home;
