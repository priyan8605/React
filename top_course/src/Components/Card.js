import React from "react";

const Card=({courses})=>
{
    return(
        <div>
           <img src={courses.image.url} alt="#">
            {/* <img src={courses.image.url}> ==>isme "image" is property preses in {courses} object
            jo ki aaya hai api call se */}
            </img>   
        </div>
    )
}
export default Card;