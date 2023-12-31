
import './App.css';
import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Filter/>
         <Cards/>
      <button onClick={()=>toast.success("Item added to cart!")}>
        Add to cart
      </button>
      <ToastContainer />
      
    </div>
  );
}

export default App;
