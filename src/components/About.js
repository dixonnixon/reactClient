import React from 'react';
import { Breadcrumb, Card, ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { baseUrl } from "../shared/baseUrl";

import { FadeTransform, Fade, Stagger } from 'react-animation-components';

import AutoFocusTextInput from './AutoFocusTextInput';

const styles={
    cardStyle:{
       'flexDirection': 'row',
       'alignItems': 'center'
    },
    cardImgStyle: {
        width: '64px',
        height: '64px',
    },
    cardHeaderStyle: {
        'textAlign': 'center'
    }
}
function RenderLeader({leader}) {
    // console.log(leader);

    let sign = "";
    if(leader.id % 2 === 0) {
        sign = "+";
    } else sign = "-";

    return (
        <FadeTransform in transformProps={{
            exitTransform: 'scale(1) translateY(' + sign +'50%)'
            }}
        >
        <Card style={styles.cardStyle}>
            <Card.Header style={styles.cardHeaderStyle}  className="bg-primary text-white">
                <Card.Img 
                    className="ms-2"
                    variant="left" 
                    src={baseUrl + leader.image} 
                />
                {leader.name}
            </Card.Header>
            
            <Card.Body >
            
                <Card.Subtitle className="mb-2 text-muted">{leader.designation}</Card.Subtitle>
                <Card.Text variant="right">
                    {leader.description}
                </Card.Text>
            </Card.Body>
        </Card>
         </FadeTransform>
    );
}

function About(props) {
    const leaders = props.leaders.map((leader, index) => {
        // console.log(leader, index);
        return (
            <Fade in key={index}>
            <ListGroup.Item key={index}>
                
            <p>Leader {leader.name}</p>
            <RenderLeader leader={leader}/>
                
            </ListGroup.Item>
             </Fade>
        );
    });
    return (
        <div className='container'>
            <AutoFocusTextInput />
            <div className="row">
                <Breadcrumb>
                {/* <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item> */}
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/home"}}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About us</Breadcrumb.Item>
                </Breadcrumb>
                <div className="col-sm-12">
                <h3>About us</h3>
                <hr />
                </div>
            </div>
            <div className='row row-content'>
                <div className='col-12 col-md-6'>
                    <h2>Our History</h2>
                        <p>Started in 2010, Restoran con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                    
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <Card.Header className="bg-primary text-white">Facts At a Glance</Card.Header>
                        <Card.Body>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <Card.Body className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-5">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <ListGroup >
                    <Stagger in>
                            {leaders}
                    </Stagger>
                    </ListGroup>
                    {/* <Media list>
                        {leaders}
                    </Media> */}
                </div>
            </div>
        </div>
    );
};

export default About;