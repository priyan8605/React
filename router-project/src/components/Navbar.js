import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';
import {toast} from 'react-hot-toast';
const Navbar=(props)=>
{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    console.log('value of isLoggedIn =>');
    console.log(isLoggedIn);
    return(
       <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <Link to='/'>
            <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"></img>
        </Link>
        <nav>
            <ul className=" text-white flex gap-3">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login,Signup,Signout,Dashboard button */}
       
        <div className="flex items-center gap-x-4">
            { isLoggedIn===false &&
            
             /* Login button will be visible when we r not logged in */
            <Link to='/login'>
                <button className="bg- black-700 text-white py-[8px] px-[12px] rounded-[8px] border border-black-700">Login</button>
            </Link>
             }
            { isLoggedIn===false &&
              /* Signup button will be visible when we r not logged in */
            <Link to='/signup'>
                <button className="bg- black-700 text-white py-[8px] px-[12px] rounded-[8px] border border-black-700">Signup</button>
            </Link>
            }
            { isLoggedIn===true &&
              /*when user is Loggedin then he will see Logout button */
            <Link to='/'>
                {/* <Link to='/'> mtlb jaise Logout pr click krenge we will go on Home "/" page */}
                <button onClick={()=>{
                    setIsLoggedIn(false) 
                    toast.success('Logged out')}}
                    className="bg- black-700 text-white py-[8px] px-[12px] rounded-[8px] border border-black-700">Logout</button>
            </Link>
            }
            { isLoggedIn===true &&
              /* when user is Loggedin then he will se Dashboard button */
            <Link to='/dashboard'>
                <button className="bg- black-700 text-white py-[8px] px-[12px] rounded-[8px] border border-black-700">Dashboard</button>
            </Link>
            }
        </div>
        
       </div>
    )
}
export default Navbar;

