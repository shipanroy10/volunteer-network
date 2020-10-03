import React, { useState } from 'react';
import fakeData from '../Fakedata/Fakedata';
import Volunteer from '../Volunteer/Volunteer';
import './Home.css';

const Home = () => {
const [data,setData] = useState(fakeData)
    return (
        <div className="container">
   <div className="row">
      
          {
              data.map(data=><Volunteer key={data.id} data={data}></Volunteer>)
          }
    
   </div>
          
        </div>
    );
};

export default Home;