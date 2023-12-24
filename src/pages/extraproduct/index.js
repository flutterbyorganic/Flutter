import { useEffect, useState } from "react";
import { Button, Col, Container, Image, ListGroup, Nav, NavLink, Row } from "react-bootstrap";
import collection from '../../assests/img/collection.png';
import collection1 from '../../assests/img/collection1.png';


const ExtraProduct = () => {


  return (
    <>

      <Container className="best-slider">
        <div className="header-title">
          <h1>Similar Product</h1>
        </div>

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

export default ExtraProduct;