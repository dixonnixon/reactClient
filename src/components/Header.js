import React from 'react';
import { Navbar, Nav,  Modal, Button, Form  } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";

// function Example() {
//     const [show, setShow] = useState(false);

// }



export default class Header extends React.Component {
    constructor(props) {
        super(props);



        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            isModalOpened: false,
            isNavOpen: false
        };


    }

    toggleModal() {
        this.setState({
            isModalOpened: !this.state.isModalOpened
        });
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    handleLogin(e) {
        this.toggleModal();
        console.log(this.username.value, this.password.value, this.remember.checked);
        e.preventDefault();
    }

    render() {
        const name = "Con Fusion";

        return (
            <React.Fragment>
                <Navbar bg="dark" className="navbar-dark" expand="md"> 
                <div className="container">
                    <Navbar.Toggle onClick={this.toggleNav}/>
                    <Navbar.Brand href="/" bg="light"
                        className="mr-auto"
                    >
                        Retoran 
                        <img src='/assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                    </Navbar.Brand>

                    <Navbar.Collapse in={this.state.isNavOpen} >
                            <Nav >
                                <Nav.Item>
                                    <Link className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</Link>
                                </Nav.Item>
                            </Nav>
                            <Nav className='ml-auto'>
                                <Nav.Item>
                                    <Button outline="true" onClick={this.toggleModal}>
                                        <span className='fa fa-sign-in fa-lg'>Login</span></Button>
                                </Nav.Item>
                            </Nav>
                            {/* <Outlet /> */}
                    </Navbar.Collapse>
                </div>
                </Navbar>
               
             <div className='jumbotron'>
                <div className="container  rounded-lg ">
                    <div className='row row-header'>
                    <div className='col-sm-6 col-12'>

                    <h1 className="display-4">Restoran {name}</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" ></hr>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="/#" role="button">Learn more</a>
                    </div>
                    </div>
                </div>
                </div>
                <Modal show={this.state.isModalOpened} onShow={() => this.toggleModal}
                    onHide={this.toggleModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleLogin}>
                            <Form.Group>
                                <Form.Label htmlFor="username">Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username"
                                    id="username" name="username" 
                                    ref={(input) => this.username = input}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter username"
                                    id="password" name="password"
                                    ref={(input) => this.password = input} //uncontrolled

                                />
                            </Form.Group>
                            <Form.Group>
                                
                                <Form.Check 
                                    type="checkbox"
                                    id="remember"
                                    label="remember me"
                                    ref={(input) => this.remember = input}

                                /> 
                            </Form.Group>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
};