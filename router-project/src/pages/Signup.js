import React  from "react"
import Template from "../components/Template";
import signupImage from '../assets/signup.png'
const Signup=({setIsLoggedIn})=>
{
    return(
        
       <Template 
         title="Join the millions learning to code with studyNotion for free"
         desc1='Build skills for today, tommorow and beyond'
         desc2='Education to future proof your carreer'
         image={signupImage}
         formtype='signup'
         setIsLoggedIn={setIsLoggedIn}
         />
        
    )
}
export default Signup;