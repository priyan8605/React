import React  from "react";
import Card  from "./Card";
const Cards=({courses})=>
{
    // const Cards=({courses})==> yha hum {courses} ya prop i.e "courses" ke name se receive krr skte hai from App.js <Cards/>
    let allCourses=[];
    const getCourses=()=>
    { //returns the lsit of allCourses received from api response
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                 allCourses.push(course);
            })
        })
        return  allCourses;
    }
    return(
        <div>
            {
                // getcourses() se aaye hue saare data ke liye hum ekk card bna denge
                getCourses().map((course)=>
                {
                    return(
                    <Card courses={courses}/>
                    )
                })
            }
       
        </div>
    )
}
export default Cards;