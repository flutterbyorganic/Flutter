import { useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Image, Form, InputGroup } from "react-bootstrap";
import searchIcon from '../../assests/img/search-icon.svg';
import logoIcon from '../../assests/img/logo.jpeg';
import storeIcon from '../../assests/img/store.png';
import loginIcon from '../../assests/img/login.png';
import bagIcon from '../../assests/img/bag.png';
import { Link } from "react-router-dom";

const TopHeader = () => {
    const [show, setShow] = useState(false);

    const searchClose = () => setShow(false);
    const searchShow = () => setShow(true);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
        <>
          <div className="top-slider">
            <Slider {...settings}>
              <div className="text-center slider-item">
                <h6> Share the love to enjoy 10% off </h6>
              </div>
              <div className="text-center slider-item">
                <h6> FREE US Standard Shipping </h6>
              </div>
              <div className="text-center slider-item">
                <h6> Cruelty Free & 100% Vegetarian </h6>
              </div>
            </Slider>
          </div>
          <div className="main-header">
            <Container className='main-container'>
              <div className="middle-header">
                <Image src={logoIcon} alt="Logo icon" />
              </div>
              <div className="left-header">
                <div className="header-search">
                  <InputGroup className="">
                    <InputGroup.Text id="basic-addon1">
                      <Image src={searchIcon} alt="Search" />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Search..."
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="right-header">
                <div className="login">
                  <Image src={loginIcon} alt="Login icon" />
                  <Link to="/login">Log in / Join</Link>
                </div>
                <div className="bag">
                  <Image src={bagIcon} alt="Bag icon" />
                  <p>View Bag</p>
                </div>
              </div>
            </Container>
          </div>
        </>
    )
}

export default TopHeader;