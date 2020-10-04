
import React from 'react';
import { Button,Card, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Volunteer.css'
const Volunteer = (props) => {
    const data = props.data;
    const {type,img} = data;

    return (
    
  <div className="col-md-3"  >

   <img style={{ maxWidth: '100%',
        maxHeight: '100%',
        display: 'block'}} src={img} alt=""/>
    <Link to={`/information/${type}`}><h5>{data.type}</h5></Link>

   


  </div>
       
    );
};

export default Volunteer;