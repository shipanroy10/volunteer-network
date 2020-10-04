import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Information.css'

import 'date-fns';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import fakeData from '../Fakedata/Fakedata';
import Inventory from '../AboutTask/AboutTask';


const Information = () => {
    const {type} = useParams();
    const allType = fakeData.filter(tp=>tp.type===type);

    const [data,seData]= useState(allType);
    console.log(data[0].img)
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
 

    const [selectedDate, setSelectedDate] = useState({
       workDate :new Date()});
      

    const handleDateChange = (date) => {
       const newDate = {...selectedDate}
       newDate.workDate = date;
      setSelectedDate(newDate);
    };


// single user add option

const addWork = ()=>{
   // const img = {...data[0].img}
   const work = {...loggedInUser,...selectedDate,type:type}
   fetch('http://localhost:5000/addBook',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(work)
   }).then(res=>res.json())
   .then(data=>{
      console.log(data)
   })
}

 
    return (
       <div className="container">
           <div className="main-form">
 <div className="form">
            <h1>register as a volunteer</h1>
         
   <form  action="">
   
<input required placeholder="fullName" defaultValue={loggedInUser.name} type="text"/> 
<input required placeholder="email" defaultValue={loggedInUser.email} type="email"/> 

<MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate.workDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       
       
      </Grid>
    </MuiPickersUtilsProvider>
<input required placeholder="description" name="description" type="text"/>
<input value={type}  name={type}   required type="text"/>
<Link to="/aboutTask"> 
<input onClick={addWork} style={{backgroundColor:'rgb(53, 137, 233)'}} type="submit" value="registration"/>
  </Link>

   </form>
        </div>
        </div>

       </div>
    );
};

export default Information;