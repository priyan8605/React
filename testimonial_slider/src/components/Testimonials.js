import React, { useState }  from "react";
import Card from "./Card";
const Testimonials=(props)=>
{
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);

    function leftShiftHandler()
    {
       
            if(index===0)
            {
                console.log(`index ${index}`);
                setIndex(reviews.length-1);
            }
            else
            {
                console.log(`index ${index}`);
             setIndex(index-1);
            }
    }

    function rightShiftHandler()
    {
        if(index===reviews.length-1)
        {
            console.log(`index ${index}`);
           setIndex(0)
        }
        else
        {
            console.log(`index ${index}`);
            setIndex(index+1);
        }
    }
    function surpriseHandler()
    {
        let rnd=Math.random();//gives number range between 0 and 1
        let range=rnd*reviews.length;//gives number between range 0 and reviews.length
        let randomIndex=Math.floor(range);
      //  let randomIndex = Math.floor(Math.random() * reviews.length);
        console.log("randomIndex = "+randomIndex);
        
        setIndex(randomIndex);
    }
    return(
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">

            <Card review={reviews[index]}></Card>

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
                <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500" >
                    ◀
                </button>
                <button onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500">
                    ▶
                </button>
            </div>

            <div  className="mt-6">
                <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                    Surprise Me
                </button>
            </div>

        </div>
    )
}
export default Testimonials;