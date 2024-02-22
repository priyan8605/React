import React from "react";
import {useState} from "react"
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
const SignupForm=({setIsLoggedIn})=>
{
    const[formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [accountType, setAccountType] = useState("student");
    const[showPassword,setShowPassword]=useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const navigate=useNavigate()
    function changeHandler(event)
    {
        setFormData((prev)=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }

    function submitHandler(event)
    {
        event.preventDefault();
        if(formData.password!== formData.confirmPassword)
        {
            toast.error("Password do not match")
            return;
        }
       
        setIsLoggedIn(true);//agre create and confirmPassword matches means we are Logged in
        toast.success('Account created');
        
        const accountData={...formData}
        const finalData={
          ...accountData,
          accountType
        }
        console.log("accountData is = ");
        console.log(accountData);
        console.log("finalData is =");
        console.log(finalData);

        // abb user Login hogya therefore we will navigate user to dashboard page
        navigate('/dashboard')
        
    }
return(
    < div>
     <div className="flex bg-violet-500 p-1 gap-x-1 rounded-full max-w-max">
       {/* student ,instructor tab */}
         <button onclick={() => setAccountType("student")} className={`${
            accountType === "student"
              ? "bg-black-900 text-black-5"
              : "bg-transparent text-black-200 "
          } py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
         <button   onclick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-black-900 text-black-5"
              : "bg-transparent text-black-200 "
          } py-2 px-5 rounded-full transition-all duration-200`}>Instructor </button>
     </div>

     <form onSubmit={submitHandler}>
        {/* first name and last name */}
     <div className="flex gap-x-4">
        <label className="w-full">
            <p className="text-[0.875rem] text-black-5 mb-1 leading-[1.375rem]">First Name</p>
            <sup className="text-pink-200">*</sup>
            <input required type="text" name="firstName" value={formData.firstName}onChange={changeHandler} placeholder="Enter first Name" 
            className="bg-yellow-800 rounded-[0.75rem] w-full p-[12px] text-black-5"/>
        </label>

        <label className="w-full">
            <p className="text-[0.875rem] text-black-5 mb-1 leading-[1.375rem]">Last Name</p>
            <sup className="text-pink-200">*</sup>
            <input required type="text" name="lastName" value={formData.lastName}onChange={changeHandler} placeholder="Enter last Name"
            className="bg-yellow-800 rounded-[0.75rem] w-full p-[12px] text-black-5"/>
        </label>
     </div>
      
      {/* email */}
       <label className="w-full">
            <p className="text-[0.875rem] text-black-5 mb-1 leading-[1.375rem]">Email address</p>
            <sup className="text-pink-200">*</sup>
            <input required type="email" name="email" value={formData.email}onChange={changeHandler} placeholder="Enter email"
              className="bg-yellow-800 rounded-[0.75rem] w-full p-[12px] text-black-5"/>
        </label>

        {/* create password and confirmpassword */}
        <div className="flex gap-x-4">
        <label className="w-full relative">
            <p className="text-[0.875rem] text-black-5 mb-1 leading-[1.375rem]">Create Password</p>
            <sup className="text-pink-200">*</sup>
            <input required type={showPassword?('text'):('password')} name="password" value={formData.password} onChange={changeHandler} placeholder="Enter Password"
            className="bg-yellow-800 rounded-[0.75rem] w-full p-[12px] text-black-5"/>
            <span  className="absolute right-3 top-[65px] cursor-pointer z-10" onClick={()=>setShowPassword((prev)=>!prev)}>
                    {/* jaise hum icon pr click krenge then showPassword ka value change ho jayega */}
                    {/* here we will use 2 icons one is normal eye and other is cut line on eye */}
                    {/* ye icons depend krenge 'showPassword' ki value prr / */}
                    {/* jbb password nhi dikh rha hoga mtlb 'showPassword=false' tbb hum password ko dekhne ke liye click on normal eye*/}
                    {/* when password is being seen mtlb 'showPassword=true' tbb to make password invisible we click on cut on eye*/}
                    {/* showPassword=true then cut on <AiOutlineEyeInvisible /> eye */}
                    {/* showPassword=false then normal <AiOutlineEye /> eye */}
                    {showPassword ? (<AiOutlineEyeInvisible
                    fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>
        </label>
      

        <label className="w-full relative">
                <p className="text-[0.875rem] text-black-5 mb-1 leading-[1.375rem]">Confirm Password</p>
                <sup className="text-pink-200">*</sup>
                 <input required type={showConfirmPass?('text'):('password')} name="confirmPassword" value={formData.confirmPassword}onChange={changeHandler} placeholder="Enter Confirm Password" 
                  className="bg-yellow-800 rounded-[0.75rem] w-full p-[12px] text-black-5"/>

                 <span
              onClick={() => setShowConfirmPass((prev)=>!prev)}
              className="absolute right-3 top-[65px] cursor-pointer z-10 "
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={35} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
        </label>
        </div>

           {/* create account button */}
           <button className="bg-yellow-500 py-[6px] px-[12px] rounded-[8px] mt-1 font-medium text-black-900 w-full">Create Account</button>
     </form>  

    </div>
)
}
export default SignupForm;

