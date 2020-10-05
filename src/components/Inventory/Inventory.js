import React, { useEffect, useState } from 'react';

import './Inventory.css';


const Inventory = () => {


    const [info,setInfo]= useState()
    const [bookings,setBookings] = useState([]);
    console.log(bookings)

// this is total tasks

useEffect(()=>{
    fetch('http://localhost:5000/booking')
    .then(res=>res.json())
    .then(data=>{
        setBookings(data)
    })
      
},[])



const handleChange = (e)=>{
    const name = e.target.value;
    console.log(name)
    setInfo(name)
    console.log(name)
    }


// this is add function

   const addWorks = ()=>{
const addOne = {...info}
        fetch('http://localhost:5000/addWorks',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(addOne)
        })
   
   }


// this is delete function

   const deleteWork = (id)=>{
    fetch(`http://localhost:5000/delete/${id}`,{
        method:'DELETE'
    }).then(res=>res.json())
    .then(data=>{
        if(data){
            
        }
    })
}


    return (
        <div className="container">
         <div style={{display:'flex'}}>
             <div style={{float:'left',margin:'5px'}}>
             <div className="form-style">
          <form  action="" method="post">
                <input value="" onChange={(e)=>handleChange(e)} placeholder="name" name="name" type="text"/>
   
                <input  onChange={(e)=>handleChange(e)} value="" type="file"/>
              <input onClick={addWorks}  type="submit" value="submit"/>
            </form>
          </div>

           
             </div>
             <div style={{float:'right',margin:'5px',textAlign:'center'}}>
                 <h3>Total task :{bookings.length} </h3>
             {
                bookings.map(bk=><h4><button onClick={()=>deleteWork(bk._id)}>delete</button> Email : {bk.email} Date : {bk.workDate} Task : {bk.type} </h4>)
            }

             </div>
         </div>
        </div>
    );
};

export default Inventory;