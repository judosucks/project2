import Modal from "../component/Modal";
import Button from "../component/Button";
import { useState } from "react";
function ModalPage(){

    const [modalOpen,setModalOpen] = useState(false)

    const handleClick =()=>{
        setModalOpen(true)
        console.log(modalOpen)
    }
    const handleClose=()=>{
        setModalOpen(false)
        console.log('clicked',modalOpen)
    }
    return(
        <div className="relative">
            <Button primary rounded onClick={handleClick}>Something to tell you</Button>
          {modalOpen && <Modal onClose={handleClose}/>}  
        </div>
    )
}
export default ModalPage