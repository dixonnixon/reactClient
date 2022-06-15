import React from 'react';
import { Card } from 'react-bootstrap';
import { Loading } from './Loading';
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from 'react-animation-components';

// function RenderCard({item}) {
function RenderCard({item, isLoading, errmsg}) {
  console.log("Card", item);
  if(isLoading) {
    return (
      <Loading />
    );
  }
  else if(errmsg) {
    return (
      <h4>{errmsg}</h4>
    );
  }
  else
    return (
      <FadeTransform in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}
      >

      <Card>
        <Card.Img src={baseUrl + item.image} alt={item.name} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          {item.designation ? <Card.Subtitle>{item.designation}</Card.Subtitle> : null}
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
      </FadeTransform>
    );
}

function Home(props) {
    console.log("Home", props);
    return(
      <div className="container">
        {/* <h4>Home</h4> */}
        <div className='row align-items-start'>
        <div className='col-12 col-md m1'>
          <RenderCard item={props.dish} 
            isLoading={props.dishesLoading}
            errmsg={props.dishesErrMsg}  
          />
        </div>
        <div className='col-12 col-md m1'>
          <RenderCard item={props.promotion} 
            isLoading={props.promosLoading}
            errmsg={props.promosErrMsg}  />
        </div>
        <div className='col-12 col-md m1'>
          <RenderCard item={props.leader} 
            isLoading={props.leaderLoading}
            errmsg={props.leaderErrMsg}/>
        </div>

        </div>
      </div>
    );
}

export default Home;   