import React, { useState } from "react";

//jamare card ke andr city name,image,info aur price hai vo sbb hum yha <card></card> me daalenge
function Card({id,info,name,price,image,removeTour})//(id,info,name,price,image)are of data.js are passed here
{
    const [readmore ,setReadmore]=useState(false);
   // const description='${(info.subString(0,200))}....';//"info ka 0 se le krr 200 words tkk hi description me rhenge along with "...."
    // agr readmore true hai mtlb readmore prr click hua pda hai isliye pura info show hoga and if readmore false mtlb readmore prr click nhi hua
    //isliye pura info show nhi hoga
    const description=readmore?info:`${(info.substring(0,200))}....`;
    function readmoreHandler()
    {
        setReadmore(!readmore);
        // agr readmore true hoga to yha "setReadmore(!readmore)" oose false krr dega
        //agr readmore false hoga to yha "setReadmore(!readmore)" oose true krr dega
    }
    
    return (
        <div className="card">
            <img src={image} className="image" alt=""></img>
            <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                {description}
                {/* but humne description to pass kiya hi nhi hai blki info pass kiya hai
                but we know UI pura info nhi show hota hai pura info show krwane ke liye hume "Read more" 
                prr click krna hota hai on our UI*/}
                <span  onClick={readmoreHandler} className='read-more cursor-pointer text-blue-700'>
                  { readmore ? '  show less':'show more' }
                    {/*using ternary operator 
                   agr readmore is true tbb 'show more' and when readmore is false tbb 'show less */}
                   {/* readmore true means readmore prr click hua pda hai */}
                </span>
            </div>
        </div>
               <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ' onClick={()=>{removeTour(id)}}>
                {/* When we click on button removeTour function will be called for the specific id on which we r clicking Not Interested */}
                Not Interested
                {/* jaise Not Interested pr clickk krenge card  remove ho jayega */}
                </button>
        </div>
    )
}
export default Card;