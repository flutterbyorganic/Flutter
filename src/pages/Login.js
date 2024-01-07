import React, { useState } from 'react';
import { Col, Image, Row, FloatingLabel, Form, Button, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { postData } from '../apis/api';
import 'react-toastify/dist/ReactToastify.css';
import loginBg from '../assests/img/login-title.png';
import tick from '../assests/img/tick.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const resetFormData = () => {
    setFormData({
      email: '',
      password: '',
    });
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const notify = () => toast(msg);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ [name]: value }, '[name]: value[name]: value');
    setFormData(pre => ({ ...pre, [name]: value }));
  };

  const handlePostData = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    console.log("Login call ", formData);
    const routeName = '/auth/login';
    try {
      const result = await postData(routeName, formData);
      console.log("Login successfully ", result?.message);
      setMsg(result?.message);
      sessionStorage.setItem("token", result?.user?.token);
      sessionStorage.setItem("result", JSON.stringify(result?.user));
      toast.success(result?.message);
      setTimeout(() => {
        navigate('/category');
      }, 1000);
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
          <FloatingLabel controlId="floatingInput" label="Email address" className="form-input mb-30">
            <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email-Id" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className="form-input mb-30">
            <Form.Control type="text" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter password" />
          </FloatingLabel>
          <a className="forgotten">Forgotten password?</a>
          <Button className="btn-login w-100" onClick={handlePostData}>Log in</Button>
        </Col>
        <Col xs={12} md={6} className="login-right">
          <h3>Why join Molton Brown?</h3>
          <ListGroup>
            <ListGroup.Item><Image src={tick} />Check order history and status</ListGroup.Item>
            <ListGroup.Item><Image src={tick} />Store and manage your delivery addresses</ListGroup.Item>
            <ListGroup.Item><Image src={tick} />Update your personal preferences</ListGroup.Item>
            <ListGroup.Item><Image src={tick} />Enjoy a speedier checkout!</ListGroup.Item>
          </ListGroup>
          <Link className="btn-login2 w-100" to="/signup">Sign Up</Link>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
