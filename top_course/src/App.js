import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import Filter from "./Components/Filter"
import Cards from "./Components/Cards"
import {apiUrl,filterData} from "./data"//{filterData} pass krenge <filter filterData={filterData} as props/>
//import {BrowserRouter as Router} from "react-router-dom"


function App() {

  const [courses,setCourses]=useState(null)
  // hmare pss sare "Card" ka data pda hai hmare "apiUrl" me isliye hum APi call krenge in APP.js
  // abb "App.js" se "Cards" component me hum data pass krenge using props
  //hum API call krenge using UseEffect=> agr component render hone ke baad hume koi bhi task perform krna hai jaise ki api call krna to hum 
  // use krenge useEffect() ko
useEffect(()=>
{
  const fetchData=async()=>{
    try{
      const res=await fetch(apiUrl);//jo bi data laayga apiUrl that will be stored in "res"
      const output=await res.json();//jo bhi "res" ke andr data hai that will be converted into json format 
      // bcoz of res.json() and that json format data will be stored in "output" variable
      
      console.log(output);
      //save data in a variable
      setCourses(output.data);//"output" variable ke andr jo data(key) hai that will get stored in courses
      // abb "courses" ke andr "output" ka data aa gya so we will pass it into <Cards courses={courses}/>
    }
    catch(error)
    {
      alert(error);
    }
  }
  fetchData();//
},[]);//mounting ke time bss render hoga ooske baad nhi

  return (
    <div>
      
      <Navbar/>
      <Filter 
      filterData={filterData}
      />
      <Cards courses={courses}/>
  </div>
  )
}

export default App
