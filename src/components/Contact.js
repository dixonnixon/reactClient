/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {Breadcrumb, Form, Col,  Row, Button} from 'react-bootstrap';
import  { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
// function Contact(props) {
class Contact extends React.Component  {
    constructor(props) {
        super(props);
        // this.state = { //delegated to react-redux-form
        //     // firstname: '',
        //     // lastname: '',
        //     // email: '',
        //     // telnum: '',
        //     // agree: false,
        //     // contactType: 'Tel.',
        //     // message: '',   
        //     feedback: {
        //         firstname: '',
        //         lastname: '',
        //         email: '',
        //         telnum: '',
        //         agree: false,
        //         contactType: 'Tel.',
        //         message: '',    
        //     },
        //     touched: {
        //         firstname: false,
        //         lastname: false,
        //         email: false,
        //         telnum: false,
        //     }
        // };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }

    //for each form control here has been defined value and name variables
    //to set state property as it defined in an id property  in targeted DOM element

    //defining value is depends on target type where choosing between boolean and string
    // handleInputChange(event) { //delegated to react-redux-form
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         touched: { ...this.state.touched, [name] : true},//here I use touched state to immediately check validation
    //         feedback: Object.assign(this.state.feedback, {
    //             [name]: value
    //         }),
    //         active: name
    //     });

    // }

    // handleSubmit(event) {
    handleSubmit(values) {
        console.log(values);
        // event.preventDefault();
    }

    // handleBlur = (field) =>  (evt) => {//delegated to react-redux-form
    //     this.setState({
    //         touched: { ...this.state.touched, [field] : true}
    //     });
    // }
    
    // validators(name, error) {//delegated to react-redux-form
    //     const  validators = {
    //         firstname: (prop) => {
    //             if(this.state.touched.firstname && prop.length < 3) {
    //                 error.firstname = 'First name should be longer!';
    //             } else if(this.state.touched.firstname && prop.length > 10)
    //             {
    //                 error.firstname = "First NAme is   too long";
    //             }
    //             // console.log("validatorsErrorsfirstname", this.state.touched, prop, errors);
    //             return error;
    //         },
    //         lastname: (prop)=>{
    //             if(this.state.touched.lastname && prop.length < 3) {
    //                 error.lastname = 'lastname should be longer!';
    //             } else if(this.state.touched.lastname && prop.length > 10)
    //             {
    //                 error.lastname = "lastname is   too long";
    //             }
    //             return error;
    //         },
    //         email: (prop)=>{
    //             if(this.state.touched.email && prop.split('').filter(x => x === '@').length !== 1) { //))))0_0
    //                 error.email = "Insert correct email";
    //             }
    //             return error;
    //         },
    //         telnum: (prop)=>{
    //             const expr = /^\d+$/;
    //             if(this.state.touched.telnum && !expr.test(prop)) {
    //                 error.telnum = "Only nubers telnum!";
    //             }
    //             return error;
    //         }
    //     };
    //     return validators[name];
    // }

    // validateBy(prop, value) {//delegated to react-redux-form
    //     const error = {
    //         [prop]: null
    //     };
    //     const validator = this.validators(prop, error);

    //     if(typeof validator === 'function') {
    //         return validator(value);
    //     }

    //     return error;
    // }

    // validate() {//delegated to react-redux-form
    //     let errors = {};

    //     const feedbackMap = new Map(Object.entries(this.state.feedback));
    //     const feedbackMapIterator = feedbackMap[Symbol.iterator]();
    //     for(const [prop,value] of feedbackMapIterator) {
    //         errors = Object.assign(this.validateBy(prop, value), errors);
            
    //     }

    //     return errors;
    // }

    

    render() {

    // const errors = this.validate();//delegated to react-redux-form

    // console.log('----------------------------------afterValidate', errors, this.state);

    
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                {/* <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item> */}
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
                    {/* <Form onSubmit={this.handleSubmit}> */}
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        {/* <Form.Group as={Row} className="mb-3" > */}
                        <Row className="form-group mb-3">
                            <Form.Label htmlFor="firstname" md={2} column sm="2">First Name</Form.Label>
                            <Col md={10}>
                                {/* <Form.Control  type="text" placeholder="Enter your name here" id="firstname" */}
                                <Control.text model=".firstname"  placeholder="Enter your name here" id="firstname"
                                    name="firstname"
                                    className='form-control'
                                    // value={this.state.feedback.firstname} onChange={this.handleInputChange}
                                    // // isValid={errors.firstname === null && this.state.touched.firstname }
                                    // isValid={errors.firstname === null && this.state.touched.firstname && this.state.feedback.firstname !== ''}
                                    // isInvalid={errors.firstname !== null && this.state.feedback.firstname !== ''}
                                    // onBlur={this.handleBlur('firstname')}
                                />
                                {/* <Form.Control.Feedback type="invalid">{errors.firstname}</Form.Control.Feedback> */}
                            </Col>
                        </Row>
                        {/* <Form.Group as={Row} className='mb-3'> */}
                        <Row className="form-group mb-3">
                            <Form.Label htmlFor="lastname" md={2} column sm="2">Last Name</Form.Label>
                            <Col md={10}>
                                <Control.text model=".lastname" placeholder="Enter your last name here" id="lastname"
                                    name="lastname"
                                    className='form-control'
                                    // value={this.state.feedback.lastname} onChange={this.handleInputChange}
                                    // isValid={errors.lastname === null && this.state.touched.lastname}
                                    // isInvalid={errors.lastname !== null && this.state.feedback.lastname !== ''}
                                    // onBlur={this.handleBlur('lastname')}
                                />
                                {/* <Form.Control.Feedback type="invalid">{errors.lastname}</Form.Control.Feedback> */}
                            </Col>
                        </Row>
                        {/* <Form.Group as={Row} className='mb-3'> */}
                        <Row className="form-group mb-3">
                            <Form.Label htmlFor="telnum" md={2} column sm="2">Tel.</Form.Label>
                            <Col md={10}>
                                <Control.text model=".telnum" placeholder="Enter your cellphone number here" id="telnum"
                                    name="telnum"
                                    className='form-control'
                                    // value={this.state.telnum} onChange={this.handleInputChange}
                                    // isValid={errors.telnum === null && this.state.touched.telnum && this.state.feedback.telnum !== ''}
                                    // isInvalid={errors.telnum !== null && this.state.feedback.telnum !== ''}
                                    // onBlur={this.handleBlur('telnum')}
                                />
                                {/* <Form.Control.Feedback type="invalid">{errors.telnum}</Form.Control.Feedback> */}
                            </Col>
                        </Row>
                        {/* <Form.Group as={Row} className='mb-3'> */}
                        <Row className="form-group mb-3">
                            <Form.Label htmlFor="email" md={2} column sm="2">email</Form.Label>
                            <Col md={10}>
                                <Control.text model=".email" placeholder="Enter your email here" id="email"
                                    name="email"
                                    className='form-control'
                                    // value={this.state.email} onChange={this.handleInputChange}
                                    // isValid={errors.email === null && this.state.touched.email}
                                    // isInvalid={errors.email !== null && this.state.feedback.email !== ''}
                                    // onBlur={this.handleBlur('email')}
                                />
                                {/* <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback> */}

                            </Col>
                        </Row>
                        {/* <Form.Group as={Row} className='mb-3'> */}
                        <Row className="form-group mb-3">
                            <Col md={{size: 6, offset: 2}}>
                                {/* <Form.Check type='checkbox' > */}
                                <div className='form-check'>
                                    {/* <Form.Check.Input type="checkbox" isValid checked={this.state.agree}  */}
                                    <Control.checkbox 
                                        model=".agree" 
                                        className='form-check-input'
                                        // isValid checked={this.state.agree} 
                                        // onChange={this.handleInputChange}
                                        id='agree' name='agree'
                                    />
                                    <Form.Check.Label><b>May we contact you?</b></Form.Check.Label>
                                {/* </Form.Check> */}
                                </div>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                            {/* <Form.Select name="contactType" id="contactType" value={this.state.contactType} */}
                            <Control.select 
                                model=".contactType"
                                name="contactType" 
                                id="contactType" 
                                // value={this.state.contactType}
                                // onChange={this.handleInputChange}
                                className='form-control'
                            >
                                <option>Tel.</option>
                                <option>Email</option>
                            </Control.select >
                            </Col>
                        </Row>
                        {/* <Form.Group as={Row} className='mb-3'> */}
                        <Row className="form-group mb-3">
                            <Form.Label htmlFor="message" md={2} column sm="2">Your feedback</Form.Label>
                            <Col md={10}>
                                <Control.textarea model=".message" 
                                    placeholder="Enter your feedback here" 
                                    id="message"
                                    name="message"
                                    className='form-control'
                                    rows={3}
                                    // value={this.state.message}  onChange={this.handleInputChange}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group mb-3">
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">Share</Button>
                            </Col>
                        </Row>
                    {/* </Form> */}
                    </LocalForm>
                </div>
            </div>
        </div>
        );
    }
}

export default Contact;