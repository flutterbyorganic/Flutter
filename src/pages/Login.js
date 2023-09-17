import React, { useState } from 'react';
import { Col, Image, Row, FloatingLabel, Form, NavLink, Button, ListGroup } from 'react-bootstrap';
import loginBg from '../assests/img/login-title.png';
import tick from '../assests/img/tick.png';

const Login = () => {
    return (
      <div className="login-page">
        <div className="heading-sec">
          <Image src={loginBg} alt="login bg" />
          <h1>Log In</h1>
        </div>
        <Row>
            <Col xs={12} md={6} className="login-left">
                <p><span>*</span>Required Field</p>
                <FloatingLabel  controlId="floatingInput" label="Email address" className="form-input mb-30">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="form-input mb-30">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <a className="forgotten">Forgotten password?</a>
                <Button className="btn-login w-100">Log in</Button>
            </Col>
            <Col xs={12} md={6} className="login-right">
                <h3>Why join Molton Brown?</h3>
                <ListGroup>
                    <ListGroup.Item><Image src={tick} />Check order history and status</ListGroup.Item>
                    <ListGroup.Item><Image src={tick} />Store and manage your delivery addresses</ListGroup.Item>
                    <ListGroup.Item><Image src={tick} />Update your personal preferences</ListGroup.Item>
                    <ListGroup.Item><Image src={tick} />Enjoy a speedier checkout!</ListGroup.Item>
                </ListGroup>
                <Button className="btn-login2 w-100">Join Now</Button>
            </Col>
        </Row>
      </div>
    );
  }

  export default Login;
