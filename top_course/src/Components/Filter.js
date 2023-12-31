import React from "react";


const Filter=({filterData})=>{
    // jaise Filter=({filterData}) aa jayega hum 5 buttons bna skte hai based on that {filterData
    return (<div key={filterData.id}>
         {filterData.map( (data) => {
        // harr ekk filter data ke liye ekk button bna do aur harr ek button me title daal do
        return( <button>
            {data.title}
        </button>
        )
         })
        }
        </div>
    )
}
export default Filter;