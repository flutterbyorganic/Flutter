import React, { useState } from 'react';
import { Col, Image, Row, FloatingLabel, Form, Button, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import loginBg from '../assests/img/login-title.png';
import tick from '../assests/img/tick.png';
import { Link } from 'react-router-dom';

const Signup = () => {

  return (
    <div className="login-page">
      <ToastContainer className="toast-common" />
      <div className="heading-sec">
        <Image src={loginBg} alt="login bg" />
        <h1>Log In</h1>
      </div>
      <Row>
        <Col xs={12} md={6} className="login-left">
          <p><span>*</span>Required Field</p>
          <FloatingLabel controlId="floatingInput" label="Email address" className="form-input mb-30">
            <Form.Control type="text" name="firstName" placeholder="Enter your firstName" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email address" className="form-input mb-30">
            <Form.Control type="text" name="lastName" placeholder="Enter your lastName" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email address" className="form-input mb-30">
            <Form.Control type="email" name="email" placeholder="Enter your email-Id" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email address" className="form-input mb-30">
            <Form.Control type="tel" name="mobileNumber" placeholder="Enter your mobile number" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className="form-input mb-30">
            <Form.Control type="password" name="password" placeholder="Enter your password" />
          </FloatingLabel>
          <Button className="btn-login w-100" >Log in</Button>
        </Col>
        <Col xs={12} md={6} className="login-right">
          <h3>Why join Molton Brown?</h3>
          <ListGroup>
            <ListGroup.Item><Image src={tick} />Check order history and status</ListGroup.Item>
            <ListGroup.Item><Image src={tick} />Store and manage your delivery addresses</ListGroup.Item>
            <ListGroup.Item><Image src={tick} />Update your personal preferences</ListGroup.Item>
            <ListGroup.Item><Image src={tick} />Enjoy a speedier checkout!</ListGroup.Item>
          </ListGroup>
          <Link className="btn-login2 w-100" to="/login">Sign In</Link>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
