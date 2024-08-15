import SideBar from './component/SideBar';
import Route from './component/Route';
import AccordionPage from './pages/AccordionPage'
import DropDownPage from './pages/DropDownPage'
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'
import ChatGpt from './pages/ChatGpt';
import CounterPage from './pages/CounterPage';
import CarPage from './pages/CarPage'
import ShanLi from './extra/shanLi'
import ShanLiEx from './extra/ShanLiEx'
import PlayMovieSongPage from './pages/PlayMovieSongPage';
function App() {

    return (
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <SideBar/>
            <div className='col-span-5'>
                <Route path='/accordion'><AccordionPage/></Route>
                <Route path='/'><DropDownPage/></Route>
                <Route path='/buttons'><ButtonPage/></Route>
                <Route path='/modal'><ModalPage/></Route>
                <Route path='/table'><TablePage/></Route>
                <Route path='/chatgpt'><ChatGpt/></Route>
                <Route path='/counter'><CounterPage  initialCount={0}/></Route>
                <Route path='/movieandsong'><PlayMovieSongPage/></Route>
                <Route path='/car-page'><CarPage/></Route>
            </div>
           
            
        </div>
    )
}

export default App;
