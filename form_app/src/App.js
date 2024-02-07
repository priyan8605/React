import { useState } from 'react';
import './App.css';
//import { isVisible } from '@testing-library/user-event/dist/utils';

function App() 
{
const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",comments:"",isVisible:true,mode:'',favcar:""})//ekk "formData" object bnaya jiske 3 properties hai "firstName" , "lastName" and "email" initialized with empty string
console.log(formData) ;
function changeHandler(event)
    {
      const {name,value,checked,type}=event.target;//jis bhi event pr click hua hai oon event ke andr ke attribute
      // "name","value","checked","type" ke ande ka values hum destructuring krr ke nikal lenge
      
      setFormData(prev=>{
       return {
        ...prev,//copy old data
        // [event.target.name]:event.target.value,//form ke liye hume square bracket ka use krna hi pdega[]
       //for firstName=> [firstName]:a, where event.target.value is a because we typed a in <input name='firstName'/>

        [name] :type==="checkbox" ? checked : value
         //agr name "checkbox" ka hai then[name]:"checkbox" nhi to [name]:value
        //const {name,value,checked,type}=event.target==> inke wajah se [event.target.name] likhne ki jroorat nhi hai bss [name] kaafi hai
        
       }
      }
    )
    
    }

    function submitHandler(event){
        event.preventDefault();//isse form ko submit krne se jo default behavior hota hai vo nhi hoga
        console.log('form data is = '+formData);
       // console.log(formData);
    }
  return (
    <div className="App">
     <form onSubmit={submitHandler}>
      
      <input type='text' placeholder='first Name' onChange={changeHandler} name='firstName' value={formData.firstName}></input>
      <br>
      </br> 
      <input type='text' placeholder='last Name' onChange={changeHandler} name='lastName' value={formData.lastName}></input>
     
      <br>
      </br> 
      <input type='email' placeholder='enter email' onChange={changeHandler} name='email' value={formData.email}></input>

      <br></br>
      <textarea
      placeholder='enter your comments here' onChange={changeHandler} name='comments' value={formData.comments}>
      </textarea>

      <br></br>
      <input type='checkbox' onChange={changeHandler} name='isVisible' id='isVisible'  checked={formData.isVisible}></input>
        {/* checkbox check hai ya nhi ye data nikalne ke liye hum "checked" attribute ka use krenge instead of using "value" attribute */}
        {/* <label></label> ko attach krna hai "checkbox" ke saath so we will use 'htmlFor' */}
      <label htmlFor='isVisible'>Am I Visible?</label>
      {/* Am I Visible => <label> </label> or <checkbox></checkbox> inme me se kis pr bhi click krenge to tick ho jayega */}

       {/* Radio Button */}
      <br></br>
      <fieldset>
        <legend>
          Mode:
        </legend>
        <input type='radio' onChange={changeHandler} name='mode' value='Online-Mode' id='Online-Mode' checked={formData.mode==="Online-Mode"}></input>
      <label htmlFor='Online-Mode'>On</label>

      <br></br>
      <input type='radio' onChange={changeHandler} name='mode' value='Offline-Mode' id='Offline-Mode' checked={formData.mode==="Offline-Mode"}></input>
      <label htmlFor='Offline-Mode'>Off</label>
      </fieldset>
     
      {/* drop down menu creation using <select></select> */}
      <select  name="favcar" id='favCar' onChange={changeHandler}>
        <option value="scarpio">Scarpio</option>
         <option value="fartuner">Fartuner</option>
         <option value="Legender">Legender</option>
         <option value="Thar">Tharr</option>
         <option value="Defender">Defender</option>
      </select>
      <label htmlFor='favCar'>Tell me your Favorite Car</label>

      {/* creating a button */}
      <br></br>
      {/* <input type='submit' value='submit'/> another way of creating submit button*/}
      <button>Submit</button> 
      {/* form me agr <button></button> daala to button click krne se onSubmit event trigger hoga
      iisiliye we will do <form onSubmit={submitHandler}></form> */}
     </form>
    </div>
  );
}
export default App;
