import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Information.css'
const Information = () => {
    const {type} = useParams();
    console.log(type)
    return (
       <div className="container">
           <div className="main-form">
 <div className="form">
            <h1>register as a volunteer</h1>
           
   <form  action="">
<input required placeholder="fullName" type="text"/> 
<input required placeholder="email" type="email"/> 
<input required type="date" name=""  id=""/>
<input required placeholder="description" type="text"/>
<input value={type} required type="text"/>
<input variant="primary" type="submit" value="submit"/>


   </form>
        </div>
        </div>
       </div>
    );
};

export default Information;