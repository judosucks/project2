import useComponentContext from "../hooks/use-component-context";
import { useState } from "react";
import Button from "../component/Button";

function TitleEdit({book,onSubmit}){
    const {editTitleById} = useComponentContext()
    const [title,setTitle] = useState(book.title)
    const handleChange=(event)=>{
        setTitle(event.target.value)
        console.log(event)
    }
    const handleSubmit=(event)=>{
       event.preventDefault()
       onSubmit()
       editTitleById(book.id,title)
       console.log(book,title)
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
       <div className="control">
        <label className="label">Title</label>
        <input className="input is-small" value={title} onChange={handleChange}/>
        <Button primary outline rounded>save</Button>
       </div>
        </form>
    )
}
export default TitleEdit