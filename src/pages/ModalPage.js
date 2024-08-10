import Modal from "../component/Modal";
import Button from "../component/Button";
import { useState } from "react";
function ModalPage(){

    const [modalOpen,setModalOpen] = useState(false)

    const handleClick =()=>{
        setModalOpen(true)
    }
    return(
        <div>
            <Button primary rounded onClick={handleClick}>Something to tell you</Button>
          {modalOpen && <Modal/>}  
        </div>
    )
}
export default ModalPage