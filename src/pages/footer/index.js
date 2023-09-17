import { useState } from "react";
import { Button, Col, Image, ListGroup, Nav, NavLink, Row } from "react-bootstrap";
import fbIcon from '../../assests/img/facebook.svg';
import instagramIcon from '../../assests/img/Instagram.svg';
import twitterIcon from '../../assests/img/twitter.svg';
import youtubeIcon from '../../assests/img/youtube.svg';
import footerLogoIcon from '../../assests/img/footer-logo.svg';


const Footer = () => {
    

    return (
        <>
          <div className="footer">
            <Row>
              <Col xs={12} md={3} className="footer1">
                <h3>Customer Service</h3>
                <ListGroup>
                  <ListGroup.Item><NavLink>Change Country</NavLink></ListGroup.Item>
                  <ListGroup.Item><NavLink>Shipping & Returns</NavLink></ListGroup.Item>
                  <ListGroup.Item><NavLink>FAQs</NavLink></ListGroup.Item>
                  <ListGroup.Item><NavLink>Terms & Policies</NavLink></ListGroup.Item>
                  <ListGroup.Item><NavLink>Contact Us</NavLink></ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={12} md={3} className="footer1">
                <h3>Hotel & Corporate</h3>
                <ListGroup>
                  <ListGroup.Item><NavLink>Hotel Amenities</NavLink></ListGroup.Item>
                  <ListGroup.Item><NavLink>Corporate Gifts</NavLink></ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={12} md={3} className="footer1">
                <h3>About Molton Brown</h3>
                <ListGroup>
                  <ListGroup.Item><NavLink>About Us</NavLink></ListGroup.Item>
                  <ListGroup.Item><NavLink>Careers</NavLink></ListGroup.Item>
                  <ListGroup.Item><NavLink>Site Map</NavLink></ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={12} md={3} className="footer1">
                <h3>Join Our Guest List</h3>
                <p>Be the first to hear about our product launches, limited edition collections, private sales, exclusive events and more.</p>
                <Button className="btn-primary">Join Our Guest List</Button>
              </Col>
            </Row>
            <div className="footer2">
              <Row>
                <Col xs={12} md={4} className="footer-wrap">
                  <NavLink>
                    <Image src={fbIcon} alt="Facebook icon" />
                  </NavLink>
                  <NavLink>
                    <Image src={instagramIcon} alt="Instagram icon" />
                  </NavLink>
                  <NavLink>
                    <Image src={twitterIcon} alt="Twitter icon" />
                  </NavLink>
                  <NavLink>
                    <Image src={youtubeIcon} alt="Youtube icon" />
                  </NavLink>
                </Col>
                <Col xs={12} md={4} className="footer-wrap">
                  <NavLink>
                    <Image src={footerLogoIcon} alt="Footer logo icon" />
                  </NavLink>
                </Col>
                <Col xs={12} md={4} className="footer-wrap-last">
                  <p>© Molton Brown Limited 2022</p>
                  <p>All Rights Reserved</p>
                </Col>
              </Row>
            </div>
          </div>
        </>
    )
}

export default Footer;