import React from 'react'
import Card from './Card'

const MainBox = () => {
  return (
    <div className='w-full flex flex-col p-4 text-black '>

      <div className=' flex items-baseline justify-between'>

        <h2 className=' font-semibold text-2xl '>
            Hi, Jennie Moss
        </h2>

        <p className=' text-sm '>
          Last scanned March 20th,2023 11:30 PM IST
        </p>

      </div>

      <div className='mt-[-10px]'>
        <Card/>
      </div>

      <div className=' flex flex-col border-2 border-black p-6 mt-8 rounded-md'>

        <h2 className=' font-semibold'>
          Buckets you own 
        </h2>
        
        <div className='border-b border-black mt-2'></div>

        <div className=' flex justify-around '>

          <p className='mx-[-150px]'>Name</p>

          <p>Budget</p>

          <p>Spend</p>

          <p>Forecast</p>

        </div>

        <div className='border-b border-black mt-2'></div>


        <div className=' flex justify-around '>

          <a href='/' className='mx-[-150px] text-blue-400'>ACME Corp</a>

          <p>$ 200,000</p>

          <p>$ 173,762</p>

          <p>$ 205,049</p>

        </div>

        <div className=' flex justify-around mt-3'>

          <a href='/' className='mx-[-150px] text-blue-400'>Ramn Inc</a>

          <p>$ 200,000</p>

          <p>$ 124,762</p>

          <p>$ 292,049</p>

        </div>



      </div>

      <div className=' flex flex-col border-2 border-black p-6 mt-8 rounded-md'>

        <h2 className=' font-semibold'>
          Approvals assigned to you
        </h2>
        
        <div className='border-b border-black mt-2'></div>

        <div className=' flex space-x-32 '>

          <p className=''>Bucket Name</p>

          <p>Current Budget</p>

          <p>Requested Budget</p>

          <p>Requested By</p>

        </div>

        <div className='border-b border-black mt-2'></div>


        <div className=' flex space-x-[170px] mt-2'>

          <a href='/' className='  text-blue-400'>ACME Corp</a>

          <p>$ 200,000</p>

          <p>$ 250,000</p>

          <a href='/' className='  text-blue-400'>Joe Hilfinger</a>


        <div className=' flex gap-3'>
          <button className=' border border-black px-3 rounded-md'>
              Approve
          </button>

          <button className=' border border-black px-3 rounded-md'>
              Reject
          </button>
        </div>

        </div>

        



      </div>

      <div className=' flex flex-col border-2 border-black p-6 mt-8 rounded-md'>

        <h2 className=' font-semibold'>
          Buckets you are member of 
        </h2>
        
        <div className='border-b border-black mt-2'></div>

        <div className=' flex justify-around '>

          <p className='mx-[-150px]'>Name</p>

          <p>Budget</p>

          <p>Spend</p>

          <p>Forecast</p>

        </div>

        <div className='border-b border-black mt-2'></div>


        <div className=' flex justify-around '>

          <a href='/' className='mx-[-150px] text-blue-400'>Longate</a>

          <p>$ 200,000</p>

          <p>$ 173,762</p>

          <p>$ 205,049</p>

        </div>




      </div>

      

    </div>
  )
}

export default MainBox