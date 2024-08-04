import AccordionPage from "./pages/AccordionPage";
import DropDown from "./component/DropDown";
function App() {
  const options =[{
    label:"red",value:"red"},{
    label:"green",value:"green"},{
    label:"yellow",value:"yellow"
  }]
 return(
  <div>
    <AccordionPage/>
    <DropDown options={options}/>
  </div>
  
 )
}

export default App;
