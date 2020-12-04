import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {Card} from 'react-bootstrap';
import {FaStar} from 'react-icons/fa';


const MovieCard =(props)=>{
    return(
<Card key={props.key} style={{ width: '18rem' , height:'38rem' }}>
  <Card.Img style={{height:'60%'}} variant="top" src={props.Src} />
  <Card.Body>
    <Card.Title>{props.Name}</Card.Title>
    <Card.Text>{props.Desc} </Card.Text>
    <span>{[...Array(props.Rate)].map(el=><FaStar size={30} color={'yellowgreen'}/>)}
      </span>
  </Card.Body>
</Card>
 );
}
export default MovieCard;