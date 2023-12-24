import React from 'react'
import Card from './Card';
function Tours ({tours,removeTour})
{
return(
<div className='container'>
    <div>
        <h2 className='title'>Plan with Love</h2>
    </div>
    <div className='cards'>
    {
    tours.map( (tour) =>
     {
     /* <Card {...tour}> se Card ke andr "tours" prop jo ki App.js ka hai ooska data or array of object copy hojayaga because of spread operator
     simple bhasa me <card ></card> ke andr "data" of "data.js" jo ki "tours" prop ke and hai in "App.js" vo copy ho jata hai
     if we have 7 card then 7 time we wont write the card instead we will use map() */
    return(
       <Card key={tour.id} {...tour} removeTour={removeTour}>
       </Card>
         )
     }
    )
    } 
   </div>   
 </div>
 )
}
export default Tours;
