import React, {useState} from 'react';
import {MoviesData} from '..//components/data.js';
import MovieCard from './card.js';
import AddMovie from './addMovie';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Col, Container,Row} from 'react-bootstrap';
import CardFilter from './filter.js';


const ListCard=()=>{
    const [cards,setCards] = useState(MoviesData);     

//filter by name
    const handelFilter=(text)=>{
        setCards(cards.filter(el=>el.name===text));
        
    }
// filter by rate
    const handelFilterRate=(number)=>{
        setCards(cards.filter(el=>el.rate===parseFloat(number)));
        
    }       
// add movie
const handleAdd = (name, src, desc, rate)=>{
    const newMovie={id:cards.length,
                    name:name,
                    src:src,
                    desc:desc,
                    rate:parseFloat(rate)};
    setCards([...cards,newMovie]);

    }    
    
     return(
         
        <Container style={{padding:'20px'}}>
            <Row style={{padding:'10px'}}>
              <Col>
               <CardFilter handelFilter={handelFilter} handelFilterRate={handelFilterRate}/>
              </Col>  
            </Row>
            <AddMovie handleAdd={handleAdd}/>
            <Row style={{padding:'10px'}} >
                {cards.map(el=><Col style={{padding:'10px'}}><MovieCard key={el.id} Name={el.name} Src={el.src} Desc={el.desc} Rate={el.rate} /> </Col>)}
            </Row>
                     
        </Container>     
    );
}
export default ListCard;