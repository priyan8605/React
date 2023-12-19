import { useState } from 'react';
import './ProductForm'

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
            //jo newTitle and productData hum submit krwa rhe hai vo productData object ke andr store krwa lenge
            title:newTitle,
            date:newDate
        };

        //console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

    return (<form onSubmit={submitHandler}>
    <div className='new-product_controls'>
        <div className='new-product_control'>
            <label>Title</label>
            <input type='text'  onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type='date'  onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
    </div>

    </form>)
}

export default ProductForm;