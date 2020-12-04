import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';



const AddMovie=({handleAdd})=>{
    const [name,setName]=useState("");
    const [src,setSrc]=useState("");
    const [desc,setDesc]=useState("");
    const [rate,setRate]=useState("");
    //change state inputName
    const handleNameChang=(e)=>setName(e.target.value);
//change state inputSrc
    const handleSrcChange=(e)=>setSrc(e.target.value);
//change state inputDesc
    const handleDescChange=(e)=>setDesc(e.target.value);
//change state inputRate
    const handleRateChange=(e)=>setRate(e.target.value)
    return(
        <React.Fragment>
            <Form onSubmit={(e)=>{e.preventDefault()}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Movie name</Form.Label>
    <Form.Control placeholder="Enter name" value={name}  onChange={handleNameChang}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Movie Link</Form.Label>
    <Form.Control placeholder="link" value={src}  onChange={handleSrcChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Movie descreption</Form.Label>
    <Form.Control placeholder="descreption" value={desc}  onChange={handleDescChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Movie level</Form.Label>
    <Form.Control placeholder="level" value={rate} onChange={handleRateChange}/>
  </Form.Group>
  
  <Button variant="primary" onClick={()=>handleAdd(name,src,desc,rate)}>
    Add </Button>
</Form>

        </React.Fragment>

    );
}
export default AddMovie;