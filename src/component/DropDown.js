import {useState} from 'react'

function DropDown({options}){
 const [isOpen,setIsOpen] = useState(false)

 const handleClick =()=>{
    setIsOpen((currentIsOpen)=>!currentIsOpen)//pro writing 避免使用者按太快
 }
 const handleOptionClick =(option)=>{
    setIsOpen((currentIsOpen)=>{return !currentIsOpen})//proo writing 避免使用者按太快 
    console.log(option)
 }
    const rederedOptions = options.map((option)=>{
        return <div onClick={()=>handleOptionClick(option)}  className="text-center bg-gray-100 hover:bg-gray-300 cursor-pointer" key={option.value}>{option.label}</div>
    })
    return (
    <div>
        <div onClick={handleClick}className='cursor-pointer text-center'>select</div>
        {isOpen&&<div>{rederedOptions}</div>}
    </div>
    )
}
export default DropDown