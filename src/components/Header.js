import React from 'react';
import { Navbar, Nav,  Modal, Row, Button, Form as F  } from 'react-bootstrap';
import { Link, Outlet, Navigate  } from "react-router-dom";
import { Control, Form, Errors } from "react-redux-form";


const required = (val) => val && val.length,
    maxLength = (len) => (val) =>!(val) || (val.length <= len),
    minLength = (len) => (val) => (val) && (val.length >= len),
    isNumber = (val) => !isNaN(Number(val)),
    validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


// function Example() {
//     const [show, setShow] = useState(false);

// }



export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            isModalOpened: false,
            isNavOpen: false,
            message: ''
        };
        

    }

    showMessage({type, message} ) {
        let obj = {
            "LOGIN_FAILURE" : () => 
                this.setState({
                    message: message
                }),
            "CLEAR": () => {
                this.setState({
                    message: ""
                });
                this.toggleModal();
            }
        };
        obj[type]();

        
    };
    

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

    handleLogout() {
        this.props.logoutUser();
    }

    handleSubmit(values) {
        // this.toggleModal();
        // console.log(values);
        this.props.loginUser({
            username: values.username,
            password: values.password 
        }).then((msg) => {
            console.log("Original msg", msg);
            if(msg) {
                this.showMessage({
                    type: msg.type || "",
                    message: msg.message || ""
                 });
                 return;
            }
            this.showMessage({ type: "CLEAR", message: ""});

        });
        // e.preventDefault();
    }

    render() {
        let message = this.state.message || "";
        const name = "Con Fusion";
        console.log("Header render", this.state.message, this.props.auth);
        console.log("this.props.auth.isAthenticated",  this.props.auth, this.props.auth.isAuthenticated);
        let navigate = (this.props.auth.isAuthenticated === true) ? <Navigate to="/favorites" /> :  ""  ;
        
        return (
            <React.Fragment>
                <Navbar bg="dark" className="navbar-dark" expand="md"> 
                <div className="container">
                    <Navbar.Toggle onClick={this.toggleNav}/>
                    <Navbar.Brand href="/" bg="light"
                        className="mr-auto"
                    >
                        Restoran 
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
                                { this.props.auth.isAuthenticated ?
                                    <Link className="nav-link" to="/favorites">
                                        <span className="fa fa-heart fa-lg"></span> My Favorites
                                    </Link>
                                    :
                                    ""
                                }
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</Link>
                                </Nav.Item>
                            </Nav>
                            <Nav className='ml-auto' navbar>
                                <Nav.Item>
                                    { this.props.auth.isAuthenticated === false ?
                                        <Button onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                        </Button>
                                    :
                                    <div>
                                        <div className='navbar-text mr-3'>
                                            {this.props.auth.user.username}
                                            <Button  onClick={this.handleLogout}>
                                                <span className="fa fa-sign-out fa-lg"></span> Logout
                                                {this.props.auth.isFetching ?
                                                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                    : null
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                    }
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
                        <Form model="login" onSubmit={(values) => this.handleSubmit(values)}>
                            {/* <Row className="form-group mb-3">
 */}
                            <Row className="form-group mb-3">
                            
                                {/* <F.Label htmlFor="username">Username</F.Label> */}
                                {/* <F.Control type="text" placeholder="Enter username"
                                    id="username" name="username" 
                                    ref={(input) => this.username = input}
                                /> */}
                                <F.Label htmlFor="username" md={2} column sm="2">Username</F.Label>

                                 <Control.text model=".username"  placeholder="Enter your username here" 
                                    id="username"
                                    name="username"
                                    className='F-control'
                                    validators={{
                                        required, minLength: minLength(3),
                                        maxLength: maxLength(30)
                                    }}
                                />
                                <Errors 
                                    className='text-danger'
                                    model=".username"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: ">= 2 char.-s",
                                        maxLength: '< 15 char.-s'
                                    }}
                                />
                          
                            </Row>
                            <Row className="form-group mb-3">
                                <F.Label htmlFor="password">Password</F.Label>
                                <Control.text model=".password" type="password" placeholder="Enter pwd"
                                    id="password" name="password"
                                    className='F-control'
                                    validators={{
                                        required, minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                 <Errors 
                                    className='text-danger'
                                    model=".username"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: ">= 2 char.-s",
                                        maxLength: '< 15 char.-s'
                                    }}
                                />
                            </Row>
                            <Row className="form-group mb-3">

                                
                                <F.Check 
                                    type="checkbox"
                                    id="remember"
                                    label="remember me"
                                    ref={(input) => this.remember = input}

                                /> 
                            </Row>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                        {message}
                        {navigate}
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
};