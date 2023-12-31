import React  from "react";
import Card  from "./Card";
const Cards=({courses})=>
{
    // const Cards=({courses})==> yha hum {courses} ya prop i.e "courses" ke name se receive krr skte hai from App.js <Cards/>
    const getCourses=()=>
    {
        Object.values()
    }
    return(
        <div>
        <Card />
        </div>
    )
}
export default Cards;