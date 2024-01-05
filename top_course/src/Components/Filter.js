import React from "react";

// {filterData}
const Filter=({filterData,category,setCategory})=>{

     function filterHandler(){
         
     }

    // jaise Filter=({filterData}) aa jayega hum 5 buttons bna skte hai based on that {filterData
    return (<div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center" >
         {filterData.map( (data) => {
        // harr ekk filter data ke liye ekk button bna do aur harr ek button me title daal do
        return( <button className={`text-lg px-2 py-1 rounded-md font-medium
         text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200`}
        key={data.id}
        //jaise hum button prr click krenge different type of card show hoga based on data ke title ya category pr
        //mtlb button pr evetListener lga hai
        onClick={()=>{
            return filterHandler(data.title)//data ka title pass krr rhe hai
        }}
        >
            {data.title}
        </button>
        )
         })
        }
        </div>
    )
}
export default Filter;