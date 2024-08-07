import {useState} from 'react'

function DropDown({options ,selection,onSelect,inputSubmit}) {
    const [isOpen,
        setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen) //pro writing 避免使用者按太快 true
    }
    const handleOptionClick = (option) => {
        setIsOpen((currentIsOpen) => {
            return !currentIsOpen
        }) //pro writing 避免使用者按太快 true
        onSelect(option) //onSelect 
        console.log(option,'!optin',!option,'option isOpen',isOpen)
    }
    const rederedOptions = options.map((option) => { //loop through divs dropdown 
        return <div
            onClick={() => handleOptionClick(option)}
            className="text-center bg-gray-100 hover:bg-gray-300 cursor-pointer"
            key={option.value}>{option.label}</div>
    })

    // let content ='select'
    // if(selection){
    //     content = selection.label
    // }
    //return a new syntax **?.||** 
    return (
        <div>
            <div className='cursor-pointer text-center' onClick={handleClick}>{selection?.label||'select'}</div>
            {isOpen && <div> {rederedOptions} </div>}
        </div>
    )
}
export default DropDown