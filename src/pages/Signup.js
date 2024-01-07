import React from 'react';
import { Col, Image, Row, FloatingLabel, Form, Button, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Link , useNavigate } from 'react-router-dom';
import loginBg from '../assests/img/login-title.png';
import tick from '../assests/img/tick.png';
import { postData } from '../apis/api';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobileNumber: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    mobileNumber: Yup.string().required('Mobile Number is required')
  });

  const handlePostData = async (values) => {
    const routeName = '/auth/signUp';
    try {
      const result = await postData(routeName, values);
      console.log("Signup successfully ", result?.message);
      toast.success(result?.message);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="login-page">
      <ToastContainer className="toast-common" />
      <div className="heading-sec">
        <Image src={loginBg} alt="login bg" />
        <h1>Sign Up</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handlePostData}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <Row>
              <Col xs={12} md={6} className="login-left">
                <p><span>*</span>Required Field</p>
                <FloatingLabel controlId="firstName" label="First Name" className="form-input mb-30">
                  <Field type="text" name="firstName" as={Form.Control} placeholder="Enter your firstName" />
                  <ErrorMessage name="firstName" component="div" className="text-danger" />
                </FloatingLabel>

                <FloatingLabel controlId="lastName" label="Last Name" className="form-input mb-30">
                  <Field type="text" name="lastName" as={Form.Control} placeholder="Enter your lastName" />
                  <ErrorMessage name="lastName" component="div" className="text-danger" />
                </FloatingLabel>

                <FloatingLabel controlId="email" label="Email address" className="form-input mb-30">
                  <Field type="email" name="email" as={Form.Control} placeholder="Enter your email-Id" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </FloatingLabel>

                <FloatingLabel controlId="mobileNumber" label="Mobile Number" className="form-input mb-30">
                  <Field type="tel" name="mobileNumber" as={Form.Control} placeholder="Enter your mobile number" />
                  <ErrorMessage name="mobileNumber" component="div" className="text-danger" />
                </FloatingLabel>

                <FloatingLabel controlId="password" label="Password" className="form-input mb-30">
                  <Field type="password" name="password" as={Form.Control} placeholder="Enter your password" />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </FloatingLabel>

                <Button className="btn-login w-100" type="submit" disabled={isSubmitting}>Sign Up</Button>
              </Col>
              <Col xs={12} md={6} className="login-right">
          <h3>Why join Molton Brown?</h3>
          <ListGroup>
            <ListGroup.Item><Image src={tick} />Check order history and status</ListGroup.Item>
            <ListGroup.Item><Image src={tick} />Store and manage your delivery addresses</ListGroup.Item>
            <ListGroup.Item><Image src={tick} />Update your personal preferences</ListGroup.Item>
            <ListGroup.Item><Image src={tick} />Enjoy a speedier checkout!</ListGroup.Item>
          </ListGroup>
          <Link className="btn-login2 w-100" to="/login">Login</Link>
        </Col>
            </Row>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Signup;