import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import Filter from "./Components/Filter"
import Cards from "./Components/Cards"
import {apiUrl,filterData} from "./data"//{filterData} pass krenge <filter filterData={filterData} as props/>
import Spinner from "./Components/Spinner"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'//css file of toast
import {toast} from 'react-toastify'

function App() {
  // starting me hum saare courses ke card dikhayenge mtlb "All" category ke card dikhayenge
  //jb web page load hoga for the first time
  const [category,setCategory]=useState(filterData[0].title);//filterData array ke 0th index ke 
  // object pe jo title property hai (i.e. title:"All") vo by  default category ke andr store hoga
  // iske baad setCategory ko pass kro as props in Filter component
  // "category" is an  array as it's defined in useState and useState returns an "array"

  const [loading,setLoading]=useState(true)//for buffering jbb tkk load nhi hota
  const [courses,setCourses]=useState(null)
  // hmare pss sare "Card" ka data pda hai hmare "apiUrl" me isliye hum APi call krenge in APP.js
  // abb "App.js" se "Cards" component me hum data pass krenge using props
  //hum API call krenge using UseEffect=> agr component render hone ke baad hume koi bhi task perform krna hai jaise ki api call krna to hum 
  // use krenge useEffect() ko

  
  const fetchData=async()=>{

    // agr humne webpage khola aur abhi tkk data nhi aaya hai url se or ya to jbb tkk url se aaye hue data ka processing chal rha hai hoga tbb tk hum buffering show krenge
  //jaise url se data aajayga buffering show hona bnd krr denge
  setLoading(true);//jbb tkk url se data nhi aaya hai tbb tkk true rhega mtlb "spinner" dikhega
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
      toast.error(error);
    }
    setLoading(false);//jaise url se data aa jayga to setLoading ko hum false krr denge mtlb "spinner" not shown
  }
  useEffect(()=>
  {
  fetchData();//
},[]);//mounting ke time bss render hoga ooske baad nhi

  return (
  <div className="min-h-screen  flex flex-col">
      <div>
      <Navbar/>
      </div>
      <div className='bg-blue-400'>
      <div>
      <Filter setCategory={setCategory}
      filterData={filterData}
      />
      </div>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
      {/* agr "loading" ka value true hai then "spinner" will be seen and if "loading" value
      is false then spinner won't be seen instead cards will be seen*/}
     { loading?(<Spinner/>):(<Cards courses={courses}/>)}
      </div>
    </div >
      <div>
        <ToastContainer/>
        </div>                                                                                            
  </div>
  )
}

export default App
