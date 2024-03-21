import React, { useEffect, useState } from 'react';
import Fakedata from '../FakeData/fake.json';
import './From.css'
let mark=20;
const From = () => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        setdata(Fakedata);
    },[]);

    return (
        <div className='mainclass'>
            <h1>Name: Rokonur Jaman Riyad</h1>
            <h2>Id is: 220101025</h2>
        </div>
    );
};

export default From;