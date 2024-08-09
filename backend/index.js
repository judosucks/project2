import express from 'express'
import {PORT, mongoDBURL} from './config.js'
import mongoose from 'mongoose'
import {Book} from './module/bookModule.js'
const app = express()

app.use(express.json()) //middleware for parsing request body

app.get('/', (request, response) => {
    console.log(request)
    return response
        .status(404)
        .send('page not found')
})
app.post('/books', async(request, response) => {
    try {
        console.log("request", request.body)
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response
                .status(400)
                .send({message: 'send all required fields:title,author,publishYear'})
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }
        const book = await Book.create(newBook)

        return response
            .status(201)
            .send(book)

    } catch (error) {
        console.log('error here', error.message)
        response
            .status(500)
            .send({message: error.message})
    }
})
app.get('/books',async(request,response)=>{
  try{
    const books = await Book.find({})
    return response.status(200).json({
      count:books.length,
      data:books
    })
  }catch(error){
    console.log(error.message)
    response.status(500).send({message:error.message})
  }
})
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('app connect to database')
        app.listen(PORT, () => {
            console.log(`APp is listen to port:${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })