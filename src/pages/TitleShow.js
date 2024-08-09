import {useState} from "react";
import Button from "../component/Button";
import useComponentContext from "../hooks/use-component-context";
import TitleEdit from "./TiTleEdit";
function TitleShow({book}) {

    const {deleteTitleById} = useComponentContext()
    const [showEdit,
        setShowEdit] = useState(false)
    const handleDeleteClick = () => {
        deleteTitleById(book.id)
    }
    const handleEditClick =()=>{
        setShowEdit(!showEdit)
    }
    const handleSubmit =()=>{
        setShowEdit(false)
    }
    let content = <h3 className="strong">{book.title}</h3>
            if(showEdit){
                content = <TitleEdit onSubmit={handleSubmit} book={book}/>
            }

    return (
        <div className="column is-3">
            <div className="column is-info">{content}</div>
            <img alt='book title' src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            <Button secondary rounded className="is-pulled-right" onClick={handleEditClick}>Edit</Button>
            <Button warning rounded className="is-pulled-right" onClick={handleDeleteClick}>Delete</Button>
        </div>
    )
}
export default TitleShow