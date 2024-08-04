import AccordionPage from "./pages/AccordionPage";
import DropDown from "./component/DropDown";
import Button from './component/Button'
import Input from './component/Input'
import { useContext, useEffect } from "react";
import ComponentProvider from './provider/component-provider'
function App() {
   const {fetchBooks} = useContext(ComponentProvider)

   useEffect(()=>{
    fetchBooks()
   },[fetchBooks])

  const options =[{
    label:"red",value:"red"},{
    label:"green",value:"green"},{
    label:"yellow",value:"yellow"
  }]

 return(
  <div>
    <AccordionPage/>
    <DropDown options={options}/>
    <Input/>
    <Button primary rounded className="hover:bg-blue-50 hover:text-blue-900">button</Button>
  </div>
  
 )
}

export default App;
