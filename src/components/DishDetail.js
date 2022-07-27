import React from "react";
import Card from 'react-bootstrap/Card';
import { ListGroup, Breadcrumb, Button } from 'react-bootstrap';
import Comment from './Comment'
import { CommentForm } from './CommentForm'
import { Loading } from "./Loading";

import { Link } from 'react-router-dom';
import { baseUrl } from "../shared/baseUrl";

import { FadeTransform, Fade, Stagger } from 'react-animation-components';



// import child from './Child';


// @GetExtraData
// export default class DishDetail extends React.Component {
    
    // componentDidMount() {
    //     // console.log("componentDidMount() invoked Dish");
    // }

    // componentDidUpdate() { //didUpdate method invoked after render
    //     // console.log("componentDidUpdate() invoked Dish");
    // }
function RenderCommnets({comments, postComment, dishId}) {
    const commentsView = comments.map((comment) => {
        // console.log("RenderCommnets", comment, comment._id);
        return (    
                <Fade in key={comment._id.toString()}>
                    <ListGroup.Item >
                        <div className="row">
                            <Comment comment={comment} />
                        </div>
                    </ListGroup.Item>
                </Fade>
        );
    });

    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments ({comments.length})</h4>
            <ListGroup >
                <Stagger in>
                    {commentsView}
                </Stagger>
            </ListGroup>
            <CommentForm dishId={dishId} postComment={postComment}/>
        </div>
    );
}

function RenderDish({dish, favorite, postFavorite}) {
    // console.log("RenderDish", dish, favorite, postFavorite)
    return (
        <div  className="col-12 col-md-5 m-1">
            <FadeTransform in transformProps={{
                exitTransform: 'scale(1) translateY(+50%)'
                }}
            >
            <Card >
            <Card.Img width="100%" variant="right" src={baseUrl + dish.image} 
                alt={dish.name}
            />
            <Card.ImgOverlay>
                <Button color="primary" onClick={() => favorite ?  console.log('Already favorite') : postFavorite(dish._id)}>
                    {favorite ?
                        <span className="fa fa-heart"></span>
                        : 
                        <span className="fa fa-heart-o"></span>
                    }
                </Button>
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
            </Card.Body>
            </Card>
            </FadeTransform>
        </div> 
    );
}


const DishDetail = (props) => {
    // const [text, setText] = useState('');

    // // console.log(text);


    if(props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errmsg) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errmsg}</h4>
                </div>
            </div>
        );
    }

    else if(props.dish !== undefined) {
        // console.log("Detail", props, props.dish);
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
                    <RenderDish dish={props.dish} favorite={props.favorite} postFavorite={props.postFavorite}/>
                    
                    <RenderCommnets comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.dish._id}
                    />
                        
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