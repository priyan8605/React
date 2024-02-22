import React from "react";
import Template from "../components/Template";
import loginimage from '../assets/login.png'
const Login=({setIsLoggedIn})=>
{
    return(
        
         <Template 
         title="Welcome back"
         desc1='Build skills for today, tommorow and beyond'
         desc2='Education to future proof your career'
         image={loginimage}
         formtype='login'
         setIsLoggedIn={setIsLoggedIn}
         />
       
    )
}
export default Login;