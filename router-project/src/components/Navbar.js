import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';
import {toast} from 'react-hot-toast';
const Navbar=(props)=>
{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

    return(
       <div className="flex gap-7">
        <Link to='/'>
            <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"></img>
        </Link>
        <nav>
            <ul className="flex gap-3">
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
        <div className="flex ml-5 gap-3">
            { !isLoggedIn &&
             /* Login button will be visible when we r not logged in */
            <Link to='/login'>
                <button>Login</button>
            </Link>
             }
            { !isLoggedIn &&
              /* Signup button will be visible when we r not logged in */
            <Link to='/signup'>
                <button >Signup</button>
            </Link>
            }
            { isLoggedIn &&
              /*when user is Loggedin then he will see Logout button */
            <Link to='/'>
                {/* <Link to='/'> mtlb jaise Logout pr click krenge we will go on Home "/" page */}
                <button onClick={()=>{
                    setIsLoggedIn(false) 
                    toast.success('Logged out')}}>Logout</button>
            </Link>
            }
            { isLoggedIn&&
              /* when user is Loggedin then he will se Dashboard button */
            <Link to='/dashboard'>
                <button>Dashboard</button>
            </Link>
            }
        </div>
       </div>
    )
}
export default Navbar;