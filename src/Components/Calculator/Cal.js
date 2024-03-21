import React from 'react';
import './Cal.css';
const Cal = () => {
    const btnName=['C','1','2','+','3','4','-','5','6','*','7','8','9','R'];
    return (
        <div className='cal'>
            
            <div className="sit">

            </div>
            <div className='Btn'>
                {
                    btnName.map(name=>{
                        return 
                    })
                }
           
            </div>
        </div>
    );
};

export default Cal;