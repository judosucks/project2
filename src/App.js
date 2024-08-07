import AccordionPage from "./pages/AccordionPage";
import CreateTitlePage from './pages/CreateTitlePage'
import DropDown from "./component/DropDown";
import Button from './component/Button'
import Input from './component/Input'
import {useContext, useEffect, useState} from "react";
import ComponentProvider from './provider/component-provider'
function App() {
  const {fetchBooks} = useContext(ComponentProvider)
  const [selection,
    setSelection] = useState(null)

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  const handleSelect = (option) => {
    setSelection(option)
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
    <div>
      <AccordionPage/>
      <DropDown options={options} selection={selection} onSelect={handleSelect}/>
      <CreateTitlePage/>
    </div>

  )
}

export default App;
