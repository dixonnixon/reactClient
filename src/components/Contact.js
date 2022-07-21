/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {Breadcrumb,  Form as F,  Col,  Row, Button} from 'react-bootstrap';
import  { Link } from 'react-router-dom';
// import { Control, LocalForm, Errors } from 'react-redux-form';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length,
    maxLength = (len) => (val) =>!(val) || (val.length <= len),
    minLength = (len) => (val) => (val) && (val.length >= len),
    isNumber = (val) => !isNaN(Number(val)),
    validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


// function Contact(props) {
class Contact extends React.Component  {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("handleSubmitvalues:", values);
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();
    }

    render() {
    
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/home"}}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
                </Breadcrumb>
                <div className="col-sm-12">
                <h3>Contact us</h3>
                <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="/confusion/#"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className='row row-content'>
                <div className="col-sm-12">
                    <h3>Send Us a feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group mb-3">
                            <F.Label htmlFor="firstname" md={2} column sm="2">First Name</F.Label>
                            <Col md={10}>
                                <Control.text model=".firstname"  placeholder="Enter your name here" id="firstname"
                                    name="firstname"
                                    className='form-control'
                                    validators={{
                                        required, minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors 
                                    className='text-danger'
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: ">= 2 char.-s",
                                        maxLength: '< 15 char.-s'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group mb-3">
                            <F.Label htmlFor="lastname" md={2} column sm="2">Last Name</F.Label>
                            <Col md={10}>
                                <Control.text model=".lastname" placeholder="Enter your last name here" id="lastname"
                                    name="lastname"
                                    className='form-control'
                                    validators={{
                                        required, minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors 
                                    className='text-danger'
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: ">= 2 char.-s",
                                        maxLength: '< 15 char.-s'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group mb-3">
                            <F.Label htmlFor="telnum" md={2} column sm="2">Tel.</F.Label>
                            <Col md={10}>
                                <Control.text model=".telnum" placeholder="Enter your cellphone number here" id="telnum"
                                    name="telnum"
                                    className='form-control'
                                    validators={{
                                        required, minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors 
                                    className='text-danger'
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: ">= 2 char.-s",
                                        maxLength: '< 15 char.-s',
                                        isNumber: 'you should enter number'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group mb-3">
                            <F.Label htmlFor="email" md={2} column sm="2">email</F.Label>
                            <Col md={10}>
                                <Control.text model=".email" placeholder="Enter your email here" id="email"
                                    name="email"
                                    className='form-control'
                                    validators={{
                                        required, 
                                        validEmail
                                    }}
                                />
                                <Errors 
                                    className='text-danger'
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        validEmail: "You should enter a valid email"
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group mb-3">
                            <Col md={{size: 6, offset: 2}}>
                                <div className='form-check'>
                                    <Control.checkbox 
                                        model=".agree" 
                                        className='form-check-input'
                                        id='agree' name='agree'
                                    />
                                    <F.Check.Label><b>May we contact you?</b></F.Check.Label>
                                </div>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                            <Control.select 
                                model=".contactType"
                                name="contactType" 
                                id="contactType" 
                                className='form-control'
                            >
                                <option>Tel.</option>
                                <option>Email</option>
                            </Control.select >
                            </Col>
                        </Row>
                        <Row className="form-group mb-3">
                            <F.Label htmlFor="message" md={2} column sm="2">Your feedback</F.Label>
                            <Col md={10}>
                                <Control.textarea model=".message" 
                                    placeholder="Enter your feedback here" 
                                    id="message"
                                    name="message"
                                    className='form-control'
                                    rows={3}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group mb-3">
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">Share</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
        );
    }
}

export default Contact;