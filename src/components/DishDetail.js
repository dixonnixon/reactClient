import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Comment from './Comment'
import child from './Child';


// @GetExtraData
export default class DishDetail extends React.Component {
    
    render() {
        console.log("DD", this.props.dish);
        if(this.props.dish == undefined) {
            
        }

        if(this.props.dish !== undefined) {
            let view = null;
            // console.log(this.props.dish);
            if(this.props.overlay === "true")
            {
                view = 
                <div className="row"> 
                    <div  className="col-12 col-md-12 m-1">
                        <Card onClick={() => this.props.onClick(this.props.dish)}>
                        <Card.Img width="100%" variant="right" src={this.props.dish.image} alt={this.props.dish.name} />
                        <Card.ImgOverlay>
                            <Card.Title>{this.props.dish.name}</Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </div>
              </div>;
            } else {
                console.log(this.props.dish);
                const comments = this.props.dish.comments.map((comment) => {
                    console.log(comment.id);
                    return (
                        <ListGroup.Item key={comment.id}>
                    <div className="row">
                        <Comment comment={comment}
                        />
                    </div>
                    </ListGroup.Item>
                    );
                }) ;

                view = 
                <div className="row"> 
                    <div  className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(this.props.dish)}>
                    <Card.Img width="100%" variant="right" src={this.props.dish.image} 
                        alt={this.props.dish.name}
                    />
                    <Card.Body>
                        <Card.Title>{this.props.dish.name}</Card.Title>
                        <Card.Text>{this.props.dish.description}</Card.Text>
                    </Card.Body>
                    </Card>
                    </div> 
                    <div  className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ListGroup >
                            {comments}
                        </ListGroup>
                    </div>
                </div>;
            }
            

            return (
                
                <div className="container">
                    {view}

                </div>
            );
          } 
          else 
          {
            return (<div className="row">Emty Item</div>);
          }
        
    }
}