/* eslint-disable react/jsx-pascal-case */
import React from "react";
import {  Modal, Button, Form } from 'react-bootstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Col,  Row} from 'react-bootstrap';

const required = (val) => val && val.length,
    maxLength = (len) => (val) =>!(val) || (val.length <= len),
    minLength = (len) => (val) => (val) && (val.length >= len);
export  class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            isModalOpened: false
        };
    }

    handleSubmit( values) {
        // console.log("handleSubmit CommentsForm", this.props.dishId, values);
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.message);
    }

    toggleModal() {
        this.setState({
            isModalOpened: !this.state.isModalOpened
        });
    }
    render() {
        return (
            <div>
                <Modal 
                    show={this.state.isModalOpened} 
                    onShow={() => this.toggleModal}
                    onHide={this.toggleModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Submit Comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group mb-3">
                                <Form.Label htmlFor="rating" md={2} column sm="2">Rating</Form.Label>
                                <Col md={10}>
                                    <Control.select model=".rating"  defaultValue="1" 
                                        id="rating"
                                        name="rating"
                                        className='form-control'
                                        validators={{
                                            required
                                        }}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors 
                                        className='text-danger'
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-3">
                                <Form.Label htmlFor="author" md={2} column sm="2">Your name</Form.Label>
                                <Col md={10}>
                                    <Control.text model=".author" placeholder="Enter your name here" id="author"
                                        name="author"
                                        className='form-control'
                                        validators={{
                                            required, minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors 
                                        className='text-danger'
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: "2 >",
                                            maxLength: "<= 15"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-3">
                                <Form.Label htmlFor="message" md={2} column sm="2">Your feedback</Form.Label>
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
                        </LocalForm>
                    </Modal.Body>
                </Modal>
                <button onClick={this.toggleModal}> <span className='fa fa-pencil fa-lg'></span>&nbsp;Submit Comment</button>
            </div>
        );
    } 
};