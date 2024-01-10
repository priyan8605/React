import React from "react";

// {filterData}
const Filter=({filterData,category,setCategory})=>{

     function filterHandler(title){
        // abb hum chate hai ki Development prr click kre to development ke card show ho 
        //buisneess prr click kre to buisness  ke card show ho  
        // hmare pass to card ka data hai nhi sirf category ,setCategory and
        //filterData hai
       // jaise hum click krenge kisi filter (i.e  all ,development,etc) prr ooska title ooska title hum store
       //kralenge and hum send krr denge fileHandler me oclickHandler ke through
       setCategory(title);
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