import React from 'react'
 import Cloud from '../assest/blue.png'
 import qube from '../assest/qube.png'


const SideBar = () => {
  return (
    <div className='W-[20%] bg-blue-500 flex flex-col items-center justify-between p-3'>

        <div className=''>
            <img src={Cloud} alt='IMG' width={60}/>
        </div>

        <div className='flex flex-col gap-2 mb-72'>
            <img src={qube}  alt='imge' width={50}/>

            <img src={qube}  alt='imge' width={50}/>

            <img src={qube}  alt='imge' width={50}/>

            <img src={qube}  alt='imge' width={50}/>

            <img src={qube}  alt='imge' width={50}/>

            <img src={qube}  alt='imge' width={50}/>
        </div>

        <div className=' bg-purple-400 p-4 rounded-full'>

            <p className=' font-semibold text-lg'>
                DK
            </p>

        </div>

    </div>
  )
}

export default SideBar