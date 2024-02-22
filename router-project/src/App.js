import {Routes,Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Dashboard from './pages/Dashboard';
import PrivateRoute from "./components/PrivateRoute";
import {  useState } from 'react';

function App() {
   const [isLoggedIn,setIsLoggedIn]=useState(false);//false mtlb not Loggedin
   console.log(isLoggedIn);
  //  useEffect(()=>{
  //   setIsLoggedIn(false)
  //  },[])
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col'>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      {/* <Route path='/' element={<div><Outlet></Outlet></div>}>
       <Route index element={<Home/>}/>
      </Route> */}
       <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
       <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path='/dashboard' element={
        <PrivateRoute isLoggedIn={isLoggedIn} ><Dashboard/></PrivateRoute>
       }/>

    </Routes>
    </div>
  );
}

export default App;
