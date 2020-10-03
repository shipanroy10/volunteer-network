
import React from 'react';
import { Button,Card, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Volunteer.css'
const Volunteer = (props) => {
    const data = props.data;
    const {type,img} = data;
console.log(type)
    return (
    
  <div className="col-md-3">

   

   <Card >
  <Card.Img  src={img} />
  <Card.Body>

 <Link to={`/information/${type}`}><h5>{data.type}</h5></Link>
      
  
  </Card.Body>
</Card>


  </div>
       
    );
};

export default Volunteer;