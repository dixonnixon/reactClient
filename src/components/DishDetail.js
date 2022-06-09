import React from "react";
import Card from 'react-bootstrap/Card';
import { ListGroup, Breadcrumb } from 'react-bootstrap';
import Comment from './Comment'
import { CommentForm } from './CommentForm'
import { Link } from 'react-router-dom';
// import child from './Child';


// @GetExtraData
// export default class DishDetail extends React.Component {
    
    // componentDidMount() {
    //     console.log("componentDidMount() invoked Dish");
    // }

    // componentDidUpdate() { //didUpdate method invoked after render
    //     console.log("componentDidUpdate() invoked Dish");
    // }
function RenderCommnets({comments}) {
    const commentsView = comments.map((comment) => {
        console.log(comment.id);
        return (
                <ListGroup.Item key={comment.id}>
                    <div className="row">
                        <Comment comment={comment} />
                    </div>
                </ListGroup.Item>
        );
    });

    return (
        <div  className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ListGroup >
                {commentsView}
            </ListGroup>
            <CommentForm />
        </div>
    );
}

function RenderDish({dish}) {
    return (
        <div  className="col-12 col-md-5 m-1">
            <Card >
            <Card.Img width="100%" variant="right" src={dish.image} 
                alt={dish.name}
            />
            <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
            </Card.Body>
            </Card>
        </div> 
    );
}


const DishDetail = (props) => {
    if(props.dish !== undefined) {
        return (
            
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/menu"}}>Menu</Breadcrumb.Item>
                    <Breadcrumb.Item active>{props.dish.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-sm-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row"> 
                    <RenderDish dish={props.dish} />
                    
                    <RenderCommnets comments={props.comments}/>
                        
                </div>
            </div>
        );
      } 
      else 
      {
        return (<div className="row"></div>);
      }
   
};

export default DishDetail;