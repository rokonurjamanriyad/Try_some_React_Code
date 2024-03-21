import React from 'react';
import './User.css';
const User = (props) => {
    console.log(props.xy);
    const {name,id}=props.xy;
    return (
        <div className='user'>
            
            <h1>Id is: {id}</h1>
            <h2>Name: {name}</h2>
        </div>
    );
};

export default User;