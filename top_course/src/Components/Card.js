import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import  {toast} from "react-toastify"
const Card=({course,likedCourses,setLikedCourses})=>
{
    // jbb bhi webpage khoolta hai tbb to har ek card unliked rhega mtlb heart ka color pink rhega
    // jaise ki sare card unliked hai starting of webpage ke samay isiliye hume  Cards.js me jana hoga

    function clickHandler(){
        //jaise heart button pr click krenge clickHandler check krega ki kya vo current course
        //pahle se liked hai nhi
         if(likedCourses.includes(course.id))//ye dikhayg vo course jo ki pahle se liked hai
          {
            // agr "likedCourses" ke andr current "course" ki id pdi hai to iska mtlb vo current "course"
            // pahle se liked hua pda hai
            setLikedCourses((prev)=>{
               
                return prev.filter((cid)=>{
                    return (cid !== course.id)
                // agr likedCourses ke andr 5 id hai i.e 1,2,3,4,5
                //current course component jis prr humne click kiya hai let's say ooski id 4 hai
                //to hum previous ko oothaynge aur oospr filter lgayenge  aur bolenege ki iss filter ke aage bss wahi jayega jiski id!=4
                //iske wajah se id 1,2,3,5 filter ke through pass ho jayenge and  likedCourse ka id ho jayga 1,2,3,5
                //aur ab current course jiska id 4 hai vo unliked ho jayga
            })
          });
                toast.warning('like removed');
            }
            // and agr koi pahle se liked hai to use unlike krenge hum
        else//agr pahle se liked nhi hai to or unliked hai to use else{}
        {
             if(likedCourses.length===0)//jb webpage open hota hai 1st time tbb likedCourses is empty mtlb all are unliked
             {
                 setLikedCourses([course.id])//agr pahle se likedCourses ke andr kuchh nhi hai to current course ko inser krr
                 //denge likedCourses ke andr
             }
             else//jbb likedCourse empty na ho
             {
               setLikedCourses((prev)=>{
               return [...prev,course.id]
               //    previous state as well as course id both will be inserted
                 }

                //    previous state as well as course id both will be inserted
               )
             }
             toast.success("Liked successfully");
        }
          
    }
    return(
        <div className='bg-blue-800 bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
        <div className="relative">
           <img src={course.image.url} alt=""/>
            {/* <img src={courses.image.url}> ==>isme "image" is property preses in {courses} object
            jo ki aaya hai api call se */}
            
      
        <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
            <button onClick={clickHandler}>
                {
                    // agr likedCourses ke andr current id "course.id" hai then true else false
                    likedCourses.includes(course.id)?(
                        <FcLike fontSize="1.75rem"/>
                    ):(
                        <FcLikePlaceholder fontSize="1.75rem"/>
                    
                    )
                }
            </button>
        </div>
        </div>
        <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {/* agr course ka description ka length 100 se bda hai to hum humm description jo ui prr show hoga vo bss 100 length 
                tkk ka show hoga
                and agr course ke description ka length 100 se chhota hai to poora description dikhayenge */}
                {course.description.length>100?(
                    course.description.substring(0,100)+"..."
                ):(
                    course.description
                )}</p>
        </div>
        </div>
    )
}
export default Card;
//7562026908