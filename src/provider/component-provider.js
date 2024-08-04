import { createContext,useState,useCallback } from "react";
import axios from 'axios'

const ComponentProvider = createContext()

function Provider({children}){
    const [books,setBooks] = useState([])

    const fetchBooks = useCallback(async()=>{
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    })
    const valueToShare ={
      books,
      fetchBooks
    }
    return (
        <ComponentProvider.Provider value={valueToShare}>
            {children}
        </ComponentProvider.Provider>
    )
}
export {Provider}
export default ComponentProvider