import React, { useState } from 'react';
import { Col, Image, Row, FloatingLabel, Form, Button, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import loginBg from '../assests/img/login-title.png';
import tick from '../assests/img/tick.png';
import { Link, useNavigate } from 'react-router-dom';
import { postData } from '../apis/api';


const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobileNumber: ''
  });
  const navigate = useNavigate();

  const handlePostData = (e) => {
    e.preventDefault();
    signUp();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(pre => ({ ...pre, [name]: value }));
  };


  const signUp = async () => {
    const routeName = '/auth/signUp';
    try {
      const result = await postData(routeName, formData);
      console.log("Login successfully ", result?.message);
      toast.success(result?.message);
      navigate('/login')
    } catch (err) {
      throw toast.error(err?.message);
    }
  }

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
          <FloatingLabel controlId="floatingInput" label="First Name" className="form-input mb-30">
            <Form.Control type="text" name="firstName" placeholder="Enter your firstName" value={formData.firstName} onChange={handleInputChange}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Last Name" className="form-input mb-30">
            <Form.Control type="text" name="lastName" placeholder="Enter your lastName" value={formData.lastName} onChange={handleInputChange}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email address" className="form-input mb-30">
            <Form.Control type="email" name="email" placeholder="Enter your email-Id" value={formData.email} onChange={handleInputChange}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Mobile Number" className="form-input mb-30">
            <Form.Control type="tel" name="mobileNumber" placeholder="Enter your mobile number" value={formData.mobileNumber} onChange={handleInputChange}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className="form-input mb-30">
            <Form.Control type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange}/>
          </FloatingLabel>
          <Button className="btn-login w-100" onClick={handlePostData}>Sign Up</Button>
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
