import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isLoggedIn }) =>
 {//<Dashboard/> is the 'children of 'PrivateRoute'
    if (isLoggedIn) {
        // agr hum loggedin hai to hume dashboard pr jane dena chahiye
        // so if we are logged in then we will get the children
        //dashboard is the children of PrivateRoute
        return children;
    }
    else {
        //if we are not Loggedin then we have to go to Login page
        //through Navigate
        return <Navigate to="/login" />;
        // iske  wajah se hum hum url me just localhost:3000/dashboard likh krr directly nhi jaa skte
        // dashboard me jane ke liye hume Login kr na must hai
    }
}

export default PrivateRoute