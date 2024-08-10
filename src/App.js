import Link from './component/Link'
import Route from './component/Route';
import AccordionPage from './pages/AccordionPage'
import DropDownPage from './pages/DropDownPage'
function App() {

  return (
    <div>
      <Link to='/accordion'>go to accordion</Link>
      <Link to='/dropdown'>go to dropdown</Link>
      <div>
        <Route path='/accordion'><AccordionPage/></Route>
        <Route path='/dropdown'><DropDownPage/></Route>
      </div>
    </div>
  )
}

export default App;
