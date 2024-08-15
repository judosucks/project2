import useComponentContext from "../hooks/use-component-context";
import {useState} from "react";
import Input from '../component/Input'
import Button from '../component/Button'
import TitleList from "./TitleList";
function CreateTitlePage() {
    const {createTitle} = useComponentContext()
    const [title,
        setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
      
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        createTitle(title)
        setTitle('')
    }
    return (
        <div>
            <TitleList/>
            <h3>add a title</h3>
            <form className="form" onSubmit={handleSubmit}>
                <label className="label">title</label>
                <Input value={title} onChange={handleChange}/>
                <Button primary rounded>create</Button>
            </form>
        </div>
    )
}
export default CreateTitlePage