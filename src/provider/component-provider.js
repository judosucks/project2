import { createContext,useState,useCallback } from "react";
import axios from 'axios'

const ComponentProvider = createContext()

function Provider({children}){
    const [books,setBooks] = useState([])

    const fetchBooks = useCallback(async()=>{
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    })
    
    //create title 
    const createTitle = async(title)=>{
        const response = await axios.post('http://localhost:3001/books',{title})
        console.log(title,response)
        const updateTitle = [
            ...books,
            response.data
        ]
        setBooks(updateTitle)
    }
    const deleteTitleById = async(id)=>{
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updateTitle = books.filter((book)=>{
            return book.id !== id
        })
        setBooks(updateTitle)
    }
    const editTitleById =async(id,newTitle)=>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{title:newTitle})
        const updateTitle = books.map((book)=>{
            if(book.id === id){
                return {
                    ...book,
                    ...response.data
                }
            }
            return book
        })
        setBooks(updateTitle)
    }
    const valueToShare ={
      books,
      fetchBooks,
      createTitle,
      deleteTitleById,
      editTitleById
    }
    return (
        <ComponentProvider.Provider value={valueToShare}>
            {children}
        </ComponentProvider.Provider>
    )
}
export {Provider}
export default ComponentProvider