import TitleShow from './TitleShow'
import useComponentContext from '../hooks/use-component-context'

function TitleList(){
    const {books} = useComponentContext()
    const renderedTitle = books.map((book)=>{
      return <TitleShow key={book.id} book={book}/>  
    //    return console.log('boook',book)
    })
    return <div>{renderedTitle}</div>
}
export default TitleList