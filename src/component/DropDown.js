import {useState} from 'react'
import {GoFoldDown} from "react-icons/go";
import Panel from './Panel';

function DropDown({options, value, onChange}) {
    const [isOpen,
        setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen) //pro writing 避免使用者按太快 true
    }
    const handleOptionClick = (option) => {
        setIsOpen((currentIsOpen) => {
            return !currentIsOpen
        }) //pro writing 避免使用者按太快 true
        onChange(option) //onChange from app.js
        console.log(option, '!optin', !option, 'option isOpen', isOpen)
    }
    const rederedOptions = options.map((option) => { //loop through divs dropdown
        return <div
            onClick={() => handleOptionClick(option)}
            className="hover:bg-sky-100 rounded cursor-pointer p-1"
            key={option.value}>{option.label}</div>
    })

    // let content ='select' if(selection){     content = selection.label } return a
    // new syntax **?.||**
    return (
        <div className='w-48 relative'>
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}>{value
                    ?.label || 'select'}<GoFoldDown/></Panel>
            {isOpen && <Panel className='absolute top-full'>
                {rederedOptions}
            </Panel>}
        </div>
    )
}
export default DropDown