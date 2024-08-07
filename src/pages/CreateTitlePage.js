import useComponentContext from "../hooks/use-component-context";
import { useState } from "react";
import Input from '../component/Input'
import Button from '../component/Button'
function CreateTitlePage({onChange}){
const {createTitle} = useComponentContext()
const [title,setTitle] = useState('')

const handleChange =(event)=>{
    setTitle(event.target.value)
    console.log('setting title',title)
}
const handleSubmit =(event)=>{
  event.preventDefault()
  createTitle(title)
  setTitle('')
  console.log("i was excuted submit")
}
return (
    <div>
        <h3>add a title</h3>
        <form className="" onSubmit={handleSubmit}>
            <label>title</label>
            <Input value={title} onChange={handleChange}/>
            <Button primary rounded>create</Button>
        </form>
    </div>
)
}
export default CreateTitlePage