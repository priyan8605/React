import React from "react";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

//import Testimonials from "./Testimonials";
const Card=(props)=>{
    let review=props.review;
    // data.js me 5 reviews hai but ek Card me ek hi review aa skta hai
    return(
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-10 mx-auto ">
               <img src={review.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-25"/> 
               <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p>{review.name }</p>
            </div>

            <div className="text-center mt-4">
                <p>{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500 ">
                <p>{review.text}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>

            
        </div>
    )
}
export default Card;