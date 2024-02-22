// jo common component hai Login as well as signup page me oose hum Template me rkh lete hai
// common components are title ,description1(desc1),description2(desc2),image and button

import React  from "react";
import frame from '../assets/frame.png'
import loginimage from '../assets/login.png'
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import SignupForm from "./SignupForm";
const Template=({title,desc1,desc2,image,formtype,setIsLoggedIn})=>{
    // formtype=> ye btayega ki hume Login ka form daalna hai ya Signup ka form daalna hai
    console.log("form type is ");
  console.log(formtype);
   return(
   <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
       
         <div className="w-11/12 max-w-[450px] mx-0 text-white">

            <h1 className="text-black-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
            <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
                <span  className="text-black-100">{desc1}</span>
                <span className="text-blue-100 italic">{desc2}</span>
            </p>
            {
                formtype==='signup'?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>)
                :<LoginForm setIsLoggedIn={setIsLoggedIn}/>
            }
        
            <div className="flex w-full items-center my-4 gap-x-2">
              <div className="h-[1px] w-full bg-black-700"></div>
              <p className="text-black-700 font-medium leading-[1.375rem]">OR</p>
              <div className="h-[1px] w-full bg-black-700"></div>
            </div>
 
            <button
            className="w-full flex items-center justify-center rounded-[8px] font-medium text-black-100 border-black-700 border px-[12px] py-[8px] gap-x-2 mt-6">
               <FcGoogle />
                <p>Sign up with Google</p>
            </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img src={frame} alt="Pattern" width={558} height={504} loading="lazy"></img>
        <img src={loginimage} alt="Pattern" width={558} height={490} loading="lazy" className="absolute -top-4 right-4"></img>
      </div>
   </div>
   )
}
export default Template;