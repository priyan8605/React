import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
const LoginForm=({setIsLoggedIn})=>{
    const navigate=useNavigate()
    const [formData,setFormData]=useState({email:'',password:''})
    const [showPassword,setShowPassword]=useState(false);//at starting we don't want that our password should be seen
    function changeHandler(event)
    {
        setFormData([(prev)=>[
            {
            
                ...prev,
                [event.target.name]:event.target.value
            }
        ],
    ])
    }

    function submitHandler(event)
    {
        event.preventDefault();
        setIsLoggedIn(true)//jaise hum LoginForm ke "Signin" button  click krenge  to  setIsLoggedIn(true) mtlb we have been logged in

        toast.success("Logged in  successfully");
        // after we loggedin we will move to Dashboard
       navigate("/dashboard")
    }
    return(
        <div>
           <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6" >

            <label  className="w-full">
                <p className="text-[0.875rem] text-black-5 mb-1 leading-[1.375rem]">
                    Email address
                    <sub className="text-pink-200">*</sub>
                </p>
                <input required type="text" name="email" value={formData.email} onChange={changeHandler} placeholder="Enter email id" className="bg-yellow-800 rounded-[0.75rem] w-full p-[12px] text-black-5"/>
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-black-5 mb-1 leading-[1.375rem]">
                    Password<sub className="text-pink-200">*</sub>
                </p>
                <input required type={showPassword ? ("text"):("password")} name='email' value={formData.password} onChange={changeHandler} placeholder="Enter Password"  className="bg-yellow-800 rounded-[0.75rem] w-full p-[12px] text-black-5"/>
              
                <span onClick={()=>setShowPassword((prev)=>!prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {/* jaise hum icon pr click krenge then showPassword ka value change ho jayega */}
                    {/* here we will use 2 icons one is normal eye and other is cut line on eye */}
                    {/* ye icons depend krenge 'showPassword' ki value prr / */}
                    {/* jbb password nhi dikh rha hoga mtlb 'showPassword=false' tbb hum password ko dekhne ke liye click on normal eye*/}
                    {/* when password is being seen mtlb 'showPassword=true' tbb to make password invisible we click on cut on eye*/}
                    {/* showPassword=true then cut on <AiOutlineEyeInvisible /> eye */}
                    {/* showPassword=false then normal <AiOutlineEye /> eye */}
                    {showPassword?<AiOutlineEyeInvisible />:<AiOutlineEye />}
                </span>
                <Link to='#'>
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                    Forgot Password
                    </p>
                </Link>
            </label>

            <button  className="bg-yellow-500 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black-900">Sign in</button>
           </form>
          
        </div>
    )
}
export default LoginForm;