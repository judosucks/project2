import SideBar from './component/SideBar';
import Route from './component/Route';
import AccordionPage from './pages/AccordionPage'
import DropDownPage from './pages/DropDownPage'
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage'
import ShanLi from './extra/shanLi'
import ShanLiEx from './extra/ShanLiEx'
function App() {

    return (
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <SideBar/>
            <div className='col-span-5'>
                <Route path='/accordion'><AccordionPage/></Route>
                <Route path='/'><DropDownPage/></Route>
                <Route path='/buttons'><ButtonPage/></Route>
                <Route path='/modal'><ModalPage/></Route>
            </div>
           
            
        </div>
    )
}

export default App;
