import React, { useEffect, useState } from 'react';
import './Header.css'
import fakedata from '../../Fakedata/fake.json';
import pic from '../../Fakedata/picture.json';
import User from '../User/User';
const Header = () => {
    const [data,setData]=useState([]);
    const first10=pic.slice(0,10);
    const [picture,Setpicture]=useState([]);
    useEffect(()=>{
        setData(first10);
    },[])
    useEffect(()=>{
        setData(fakedata);
    },[])
    return (
        <div>
            <div>
            {
                data.map(a=>(
                <User xy={a} ></User>
                ))
             }
             

            
            </div>
        </div>
    );
};

export default Header;