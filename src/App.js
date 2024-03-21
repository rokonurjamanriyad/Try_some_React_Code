
import { useState } from 'react';
import './App.css';
import From from './Components/From/From';
import Try from './Components/Try/Try';


const status = true;

function App() {
  
const [a,b]=useState(0);
function onclick(){
  b(2);
  b(3);
}

  return (
    <div>
      <h1>{a}</h1>
      <button onClick={onclick}>SUbmit</button>
      {(
        ()=>{
          if(a==2)
          {
            return <From></From>
          }else if(a==3)
          {
            return <Try></Try>
          }
        }

      )()}
    </div>
  );
}

export default App;
