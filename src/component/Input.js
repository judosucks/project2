import { useState } from "react";

function Input(){
  
    const handleChange =(event)=>{
       
       console.log(event)
    };

    
  return <div>
    <input onChange={handleChange} className="border-gray-100 rounded-full enabled:hover:boreder-gray-100" placeholder="type something"/>
  </div>
}
export default Input