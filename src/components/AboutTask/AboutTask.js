import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

import './AboutTask.css'


const AboutTask = () => {

 const [booking,setBooking] = useState([])
const [loggedInUser,setLoggedInUser] = useContext(UserContext);
console.log(loggedInUser);

// this is about user task

    useEffect(()=>{
        fetch('http://localhost:5000/bookings?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setBooking(data)
        })
          
    },[]);


    // this is delete function

    const deleteWork = (id)=>{
        fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'
        }).then(res=>res.json())
        .then(data=>{
            if(data){
                
            }
        })
    };
    
    return (
        <div className="container">
        
      
         {
             booking.map(book=><li> email : {book.email} 
             type :{book.type} workDate : {(new Date(book.workDate)
             .toDateString('dd/MM/yyyy'))} <button onClick={()=>deleteWork(book._id)}>delete</button> </li>)
         }
        </div>
    );
};

export default AboutTask;