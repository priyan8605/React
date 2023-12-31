import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const[text,setText]=useState('');

  // case1 of useEffect(<function>) without passing 2nd parameter 
  // useEffect(()=>{
  //   console.log("UI rendering done");
  // })

//case2 of useEffect(<fuction>,<2nd parameter empty array>)->yha ui ek hi baar render hoga
// useEffect(()=>{
//   console.log("UI rendering done");
// },[]);

// case3->( jbb dependency change hoga tbb render hoga )
// useEffect(()=>{
//   console.log("change observed");
// },[text]);

// case4-> to handle unmounting of a component
useEffect(()=>{
  console.log("listener added");//execute after "listener removed"
  return ()=>
  {
    console.log("listener removed");//execute before "listener added"
  }
})

  function changeHandler(event)
  {
    setText(event.target.value);
    console.log(text);
    
  }
  return (
    <div className="App">
     <input  type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
