import React from 'react'

const Card = () => {

    const data = [
        {
          prise:"$ 400,000",
          desc : " Total budget you own", 
        },

        {
          prise:"$ 299,762",
          desc : " Spent month-to-date", 
        },

        {
          prise:"$ 2,874,582",
          desc : " Forecated till month end", 
        },
    ];

  return (
    <div className=' flex gap-20 justify-center items-center text-center mt-10 '>
        {
          data.map((data,index) => {

            let cardColor = '';
            if (index === 1) {
              cardColor = 'bg-blue-100';
            }
            else if (index === 2) {
              cardColor = 'bg-green-200'
            }
            return(
              <div className= {`border-2 border-black p-4 px-6 rounded-md ${cardColor}`}>
                <h2 className=' font-semibold'>
                  {data.prise}
                </h2>

                <p>
                  {data.desc}
                </p>
              </div>
            )
          })
        }
    </div>
  )
}

export default Card