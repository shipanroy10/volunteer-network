import React, { useEffect, useState } from 'react';

import Volunteer from '../Volunteer/Volunteer';
import './Home.css';

const Home = () => {
const [datas,setData] = useState([]);
console.log(datas);

// allWorks are here

useEffect(()=>{
    fetch('https://aqueous-ravine-76666.herokuapp.com/works')
    .then(res=>res.json())
    .then(data=>setData(data))
},[datas])



    return (
                <div className="container">
                    <div className="row">
            
                {
                    datas.map(data=><Volunteer key={data.id} data={data}></Volunteer>)
                }
            
                </div>
                
                </div>
    );
};

export default Home;