import React,{useState} from 'react'
import './App.css';
import Classcomponent from './component/Classcomponent';
import Functional from './component/Functional';


function App() {
  const [click,setClick]=useState(false);
  const [click1,setClick1]=useState(false);
  return (
    <div className="App">
     <h1>Style using Functional component and Class component</h1>
     <button className='btn1' onClick={()=>setClick(true)}><p>To style with Functional component</p></button>
     <button className='btn2' onClick={()=>setClick1(true)}><p>To style with Class component</p></button>
    <div className='container'>
    {
      click && <Functional/>
    }
    {
      click1 && <Classcomponent/>
    }
    </div>
    </div>
  );
}

export default App;
