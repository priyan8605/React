import React, { useState }  from "react";
import Card  from "./Card";
const Cards=({courses,category})=>
{
    // const Cards=({courses})==> yha hum {courses} ya prop i.e "courses" ke name se receive krr skte hai from App.js <Cards/>

    const[likedCourses,setLikedCourses]=useState([]);//mtlb starting me koi bhi card liked nhi hai
    let allCourses=[];
    const getCourses=()=>
    { 
        if(category==="All")
        {
        //returns the lsit of allCourses received from api response
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((courseData)=>{
                 allCourses.push(courseData);
            })
        })
        return  allCourses;
        }
        else//else jo title category me hai bss oosi name ka course show hoga
        {
         
         console.log("courses type is "+typeof(courses));
            console.log(`courses[category] = ${courses[category]}`);
            console.log(`courses is ${courses.Development}`);
            console.log(courses["Development"]);
            console.log(courses.Development);
            //console.log(courses[category]);
            console.log(typeof(category));
           return courses[category];
        }
    }
    return(
        <div  className="flex flex-wrap justify-center gap-4 mb-4">
            {!courses?(
                <div>
                    <p>No data found</p>
                </div>
            ):(// getcourses() se aaye hue saare data ke liye hum ekk card bna denge
            getCourses().map((course)=>
             {
                return(
                <Card key={course.id} course={course} likedCourses={likedCourses} 
                setLikedCourses={setLikedCourses} />
                )
             }))
            }
           
       
        </div>
    )
}
export default Cards;