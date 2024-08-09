import express from 'express'
import { PORT , mongoDBURL} from './config.js'
import mongoose from 'mongoose'
import {Book} from './module/bookModule.js'
const app = express()
app.get('/',(request,response)=>{
    console.log(request)
    return response.status(404).send('page not found')
})

mongoose.connect(mongoDBURL).then(()=>{
  console.log('app connect to database')
  app.listen(PORT,()=>{
    console.log(`APp is listen to port:${PORT}`)
})
}).catch((error)=>{
   console.log(error)
})