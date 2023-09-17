import { useState } from "react";
import { Button, Col, Container, Image, ListGroup, Nav, NavLink, Row } from "react-bootstrap";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seller from '../../assests/img/seller.png';
import seller2 from '../../assests/img/seller2.png';
import seller3 from '../../assests/img/seller3.png';
import collection from '../../assests/img/collection.png';
import collection1 from '../../assests/img/collection1.png';


const Bestsellers = () => {

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          <Container className="best-slider">
            <div className="header-title">
                <h1>Bestsellers</h1>
            </div>
            <Slider {...settings2}>
              <div className="slider-item">
                <div className="slider-item-pic">
                  <Image src={seller} alt="Seller icon" />
                </div>
                <Nav.Link className="seller-title text-truncate">Tobacco Absolute Bath & Shower Gel 10fl oz</Nav.Link>
                <div className="slider-item-wrap">
                  <h5>$35</h5>
                  <Nav.Link>Add +</Nav.Link>
                </div>
              </div>
              <div className="slider-item">
                <div className="slider-item-pic">
                  <Image src={seller2} alt="Seller icon" />
                </div>
                <Nav.Link className="seller-title text-truncate">Tobacco Absolute Bath & Shower Gel 10fl oz</Nav.Link>
                <div className="slider-item-wrap">
                  <h5>$35</h5>
                  <Nav.Link>Add +</Nav.Link>
                </div>
              </div>
              <div className="slider-item">
                <div className="slider-item-pic">
                  <Image src={seller3} alt="Seller icon" />
                </div>
                <Nav.Link className="seller-title text-truncate">Tobacco Absolute Bath & Shower Gel 10fl oz</Nav.Link>
                <div className="slider-item-wrap">
                  <h5>$35</h5>
                  <Nav.Link>Add +</Nav.Link>
                </div>
              </div>
              <div className="slider-item">
                <div className="slider-item-pic">
                  <Image src={seller} alt="Seller icon" />
                </div>
                <Nav.Link className="seller-title text-truncate">Tobacco Absolute Bath & Shower Gel 10fl oz</Nav.Link>
                <div className="slider-item-wrap">
                  <h5>$35</h5>
                  <Nav.Link>Add +</Nav.Link>
                </div>
              </div>
            </Slider>

            <div className="collection">
                <Row className="collection-row">
                  <Col xs={12} md={6} className="collection-left">
                    <Image className="w-100" src={collection} alt="Collection Icon" />
                    <div className="collection-wrap">
                      <h2>The Peppers Collection</h2>
                      <p>Meet our iconic fragrant power couple - an energising pair of bold, woody-spicy notes</p>
                      <Button className="btn-secondary">Shop Now</Button>
                    </div>
                  </Col>
                  <Col xs={12} md={6} className="collection-left">
                    <Image className="w-100" src={collection1} alt="Collection1 Icon" />
                    <div className="collection-wrap">
                      <h2>The Peppers Collection</h2>
                      <p>Meet our iconic fragrant power couple - an energising pair of bold, woody-spicy notes</p>
                      <Button className="btn-secondary">Shop Now</Button>
                    </div>
                  </Col>
                  <Col xs={12} md={6} className="collection-left">
                    <Image className="w-100" src={collection1} alt="Collection1 Icon" />
                    <div className="collection-wrap">
                      <h2>The Peppers Collection</h2>
                      <p>Meet our iconic fragrant power couple - an energising pair of bold, woody-spicy notes</p>
                      <Button className="btn-secondary">Shop Now</Button>
                    </div>
                  </Col>
                  <Col xs={12} md={6} className="collection-left">
                    <Image className="w-100" src={collection} alt="Collection Icon" />
                    <div className="collection-wrap">
                      <h2>The Peppers Collection</h2>
                      <p>Meet our iconic fragrant power couple - an energising pair of bold, woody-spicy notes</p>
                      <Button className="btn-secondary">Shop Now</Button>
                    </div>
                  </Col>
                </Row>
            </div>
          </Container>
        </>
    )
}

export default Bestsellers;