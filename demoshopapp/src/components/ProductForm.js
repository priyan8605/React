import { useState } from 'react';
import './ProductForm.css'

function ProductForm(props) {
    //    const [fullProductInput,setfullProductInput]=useState(
    //     {
    //         //here at once only we can handle various parameter by creating object
    //         newTitle:'',
    //         newDate:'',
    //         // title and date both are initialized as empty
    //     }
    //    )
    // //   function setfullProductInput(event,prevState)
    // //    {
    // //     //return object with updated parameter
          
    // //    }
    //  function titleChangeHandler(event,prevState) {
        
        
    //      let obj={...prevState,title:event.target.value };//title is being updated
    //       //prevState keyword will tell us previous state of our object
    //       console.log(obj);
    //       return obj
    // }
    //  function dateChangeHandler(event) {
    //      setDate(event.target.value);//newDate ke andr value chala jayega and that will be reflected on ui
    //  }

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);//newTitle ke andr value chala jayega and that will be reflected on ui
        //console.log(event.target.value);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);//newDate ke andr value chala jayega and that will be reflected on ui
    }


    function submitHandler(event) {
        event.preventDefault();//jaise hum add product prr click krte hai to input diya gya hai user dwara vo
        //hatt jata hai to oose prevent krne ke liye we use "event.preventDefault()"

        const productData = {
            //jo newTitle and newDate hum submit krwa rhe hai vo productData object ke andr store krwa lenge
            title:newTitle,
            date:newDate
        };

        console.log(productData);
        //calling parent "NewProduct" function
        props.onSaveProduct(productData);

         //abb hum chahte hai ki add product prr click krne ke baad title and date empty ho jaye
        setTitle('');//isse title will get empty but it will happen in console and not in ui
        setDate('');//isse Date will get empty but that will happen in console and not in ui
        //agr mujhe ui me bhi empty show krwana hai then for that we have to use value in <input...  value=newTitle..>
        //kyuki newTitle ui se link hai through value
    }

    return (<form onSubmit={submitHandler}>
    <div className='new-product_controls'>
        <div className='new-product_control'>
            <label>Title</label>
            <input type='text' value={newTitle}  onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
    </div>

    </form>)
}

export default ProductForm;