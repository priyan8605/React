import React, { useState } from 'react';
import data from './data';
import Tours from './Components/Tours';
import "./App.css"; 
const App=()=>
{
  const[tours,setTours]=useState(data);//tours is intialized with "data" here data is an array present in data.js
  function removeTour(id)//(id  of data is passed here bscoz id of  every tour is not same and hum chahte bhi hai ki jis 
     //jis specific "Not Interested"  prr click ho bss whi tour nikale
    {
       const newTours=tours.filter((tour)=>  tour.id !== id );//jo bhi id equal nhi hai that will get filter
        
       //newTours  ke andr wohi id aayga jo ki equal nhi hai "removeTour(id)" ke andr wale "id" se
       setTours(newTours);//aur jo "id" newTours ke andr hai that will be shown
    }
   if (tours.length ===0)
   {
    //  agr koi bhi card nhi dikh rha hoga then hum alg se UI return krr denge
    return(
      <div className=" w-[100vw] h-[100vh] flex justify-center items-center flex-col">
        <h2 className="text-2xl">No Tours Left</h2>
        <button  onClick={()=>setTours(data)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' >
          {/* jaise hum button prr click krenge to jitne bhi cards hai wapas se show hone lgenge */}
          Refresh
        </button>
      </div>
    )
   }
  return(<div className='App'>
          <Tours tours={tours} removeTour={removeTour}> </Tours>
          </div>
        );
}
export default App;