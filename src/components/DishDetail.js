import React from "react";
import Card from 'react-bootstrap/Card';
import { ListGroup, Breadcrumb } from 'react-bootstrap';
import Comment from './Comment'
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
    }) ;

    return (
        <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ListGroup >
                        {commentsView}
                    </ListGroup>
                </div>
    );
}

function RenderDish({dish}) {
    return (<div  className="col-12 col-md-5 m-1">
    {/* <Card onClick={() => this.props.onClick(this.props.dish)}> */}
    <Card >
    <Card.Img width="100%" variant="right" src={dish.image} 
        alt={dish.name}
    />
    <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Text>{dish.description}</Card.Text>
    </Card.Body>
    </Card>
    </div> );
}

        
   


const DishDetail = (props) => {
    if(props.dish !== undefined) {
        
        // console.log(this.props.dish);
        // if(this.props.overlay === "true")
        // {
        //     view = 
        //     <div className="row"> 
        //         <div  className="col-12 col-md-12 m-1">
        //             <Card onClick={() => this.props.onClick(this.props.dish)}>
        //             <Card.Img width="100%" variant="right" src=dish.image} alt={this.props.dish.name} />
        //             <Card.ImgOverlay>
        //                 <Card.Title>{this.props.dish.name}</Card.Title>
        //             </Card.ImgOverlay>
        //             </Card>
        //         </div>
        //   </div>;
        // } else {
            // console.log(this.props.dish);
            

            
        

        return (
            
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    {/* <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item> */}
                    {/* <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/home"}}>Home</Breadcrumb.Item> */}
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
                {/* <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ListGroup > */}
                <RenderCommnets comments={props.comments}/>
                    {/* </ListGroup>
                </div> */}
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