import { Container, Image, Row, Nav, Button, Col, ListGroup, NavLink } from 'react-bootstrap';
import React, { useState } from 'react';
// import './assests/scss/main.scss';
import searchIcon from '../assests/img/search-icon.svg';
import banner from '../assests/img/pic1.webp';
import bagIcon from '../assests/img/bag.png';
import find1Icon from '../assests/img/find1.png';
import find3Icon from '../assests/img/find3.png';
import find4Icon from '../assests/img/find4.png';
import find5Icon from '../assests/img/find5.png';
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'
import { Link } from 'react-router-dom';
import TopHeader from './topHeader';
import Header from './header';
import Footer from './footer';
import Bestsellers from './bestSeller';

  const Home = () => {

  const [show, setShow] = useState(false);

  const searchClose = () => setShow(false);
  const searchShow = () => setShow(true);

  return (
    <>
      <div>
        <TopHeader />
      </div>
      <Header />
      {/* main section  */}
      <div className="main-section">
        <div className="main-pc">
          <Image src={banner} alt="Banner icon" className="banner-sec w-100" />
          <div className="on-banner">
            <h1>Fragrances To Love</h1>
            <Button className="btn-primary active">Shop Now</Button>
          </div>
        </div>
      </div>

      {/* best seller  */}
      <Bestsellers />

      {/* find out more  */}
      <div className="find-out-more">
        <div className="find-out-more-wrap">
          <div className="find-out-more-list">
            <Image src={find1Icon} alt="Icon" />
            <p>Cruelty Free</p>
          </div>
          <div className="find-out-more-list">
            <Image src={find3Icon} alt="Icon" />
            <p>100% Vegetarian</p>
          </div>
          <div className="find-out-more-list">
            <Image src={find4Icon} alt="Icon" />
            <p>Free From Parabens</p>
          </div>
          <div className="find-out-more-list">
            <Image src={find5Icon} alt="Icon" />
            <p>Made In India</p>
          </div>
          <div className="find-out-more-list">
            <Image src={find1Icon} alt="Icon" />
            <p>Refillable Packaging</p>
          </div>
        </div>
        <div className="find-out-btn">
          <Button className="btn-secondary">Find Out More</Button>
        </div>
      </div>

      {/* footer  */}
      <Footer />
    </>
  );
}

export default Home;
