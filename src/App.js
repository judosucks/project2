import AccordionPage from "./pages/AccordionPage";
import CreateTitlePage from './pages/CreateTitlePage'
import DropDown from "./component/DropDown";
import Button from './component/Button'
import Input from './component/Input'
import {useContext, useEffect, useState} from "react";
import ComponentProvider from './provider/component-provider'
import TitleList from "./pages/TitleList";

function App() {
  const {fetchBooks} = useContext(ComponentProvider)
  const [selection,
    setSelection] = useState(null)

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  const handleSelect = (option) => {
    setSelection(option)
    console.log('handleselct at app',option)
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
      <AccordionPage/>
      <DropDown options={options} value={selection} onChange={handleSelect}/>
      <DropDown options={options} value={selection} onChange={handleSelect}/>
      <CreateTitlePage/>
    </div>

  )
}

export default App;
