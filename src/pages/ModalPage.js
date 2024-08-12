import Modal from "../component/Modal";
import Button from "../component/Button";
import {useState} from "react";
import ShanLi from '../extra/shanLi'
function ModalPage() {

  const [modalOpen,
    setModalOpen] = useState(false)

  const handleClick = () => {
    setModalOpen(true)
    console.log(modalOpen)
  }
  const handleClose = () => {
    setModalOpen(false)
    console.log('clicked', modalOpen)
  }
  const actionButton = <div>
    <Button onClick={handleClose} primary rounded>
      I Accept
    </Button>
  </div>
  const modal = <Modal onClose={handleClose} actionBar={actionButton}>
    <ShanLi/>
    <p>test test test test</p>
  </Modal>
  return (
    <div className="relative">
      <Button primary rounded onClick={handleClick}>Something to tell you</Button>
      {modalOpen && modal}
      
      <p>locdkkljkjdsajlkjadskljsladjlksjdksjadlkjsadkljskadljalkd
        sjklasdjlksajdkljsakldjkasldjaslkjdklsajdkdjsdaljdalkjskal
        jsdakljsakljdsakljsaljlsadjklsajsaljsakjsdaldjlsajklsajkas
        dljsaljsadljasljdddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddllocdkkljkjdsajlkjadskljsladjlksjdksjadlkjsadkljskadljalkd
        sjklasdjlksajdkljsakldjkasldjaslkjdklsajdkdjsdaljdalkjskal
        jsdakljsakljdsakljsaljlsadjklsajsaljsakjsdaldjlsajklsajkas
        dljsaljsadljasljdddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
     
    </div>
  )
}
export default ModalPage