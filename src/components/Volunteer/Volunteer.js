import { Card } from '@material-ui/core';
import React from 'react';
import { Button } from 'react-bootstrap';
import './Volunteer.css'
const Volunteer = (props) => {
    const data = props.data
    console.log(data)
    return (
    
  <div className="col-md-3">
      <h3>{data.name}</h3>
    <p>{data.type}</p>
  </div>
       
    );
};

export default Volunteer;