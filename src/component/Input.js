import { useState } from "react";
import { GoSearch } from "react-icons/go";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
function Input({onChange,value,className}){
    const classes = twMerge(classNames(className,'placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'))
    const handleChange =(event)=>{
       
       console.log(event.target.value)
    };

    
  return <div className="relative block">
    
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
      <GoSearch className="h-5 w-5 fill-slate-300"/>
      </span>
    <input onChange={onChange} value={value}className={classes} placeholder="type something"/>
   
  </div>
}
export default Input