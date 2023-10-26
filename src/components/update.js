import React, {useState } from 'react';
import "./update.css"
import { useStateContext } from '../contexts/ContextProvider';
import Updatebutton from './updatebutton';

const Update = () => {
  //to open the Popup (used ContextApi)
 const { open,setOpen } = useStateContext();
/// const [open, setOpen] = useState(false);
 
 const buttonhandler =()=>{
    //console.log("reached button");
     
      setOpen(true);
    
     }

 
  return (
    <div className='update'>
      <div className="updateLeft">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="" />
        <div className="updateLeftContent">
          <h3>Hypertext Markup Language</h3>
          <p>Questions: 08 | Duration: 15 mins | Submitted on 26 October 2023</p>
        </div>
      </div>
      <div className="updateRight">

        <button onClick={buttonhandler}>Update</button>
        {open && <Updatebutton />}
      </div>
    </div>

  )
}

export default Update


