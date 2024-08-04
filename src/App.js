
import ButtonPage from './pages/ButtonPage';
import Accordion from './component/Accordion';
function App() {
   const items =[{
    id:'1',
    label:'first title',
    content:'this is content 1st'
   },{
    id:'2',
    label:'second title',
    content:'this is content 2nd'
   },{
    id:'3',
    label:'third title',
    content:'this is content 3rd'
   }]
    return (
        <div>
            <Accordion items={items}/>
            <ButtonPage/>
        </div>
    )
}

export default App;
