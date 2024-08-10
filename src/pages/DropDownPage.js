
import DropDown from "../component/DropDown";

import {useContext, useEffect, useState} from "react";


function DropDownPage() {
  
  const [selection,
    setSelection] = useState(null)

  
  const handleSelect = (option) => {
    setSelection(option)
    console.log('handleselct at dropdownpage',option)
  }

  const options = [
    {
      label: "red",
      value: "red"
    }, {
      label: "green",
      value: "green"
    }, {
      label: "yellow",
      value: "yellow"
    }
  ]

  return (
    <div className="flex">
      
      <DropDown options={options} value={selection} onChange={handleSelect}/>
     
    </div>

  )
}

export default DropDownPage;
