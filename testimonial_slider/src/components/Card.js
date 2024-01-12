import React from "react";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

//import Testimonials from "./Testimonials";
const Card=(props)=>{
    let review=props.review;
    // data.js me 5 reviews hai but ek Card me ek hi review aa skta hai
    return(
        <div>
            <div>
               <img src={review.image} alt=""/> 
            </div>

            <div>
                <p>{review.name }</p>
            </div>

            <div>
                <p>{review.job}</p>
            </div>

            <div>
            <FaQuoteLeft />
            </div>

            <div>
                <p>{review.text}</p>
            </div>

            <div>
                <FaQuoteRight/>
            </div>

            <div>
                <button>◀</button>
                <button>▶</button>
            </div>

            <div>
                <button>Surprise Me</button>
            </div>
        </div>
    )
}
export default Card;