import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'

// App config
const app = express()
const port = process.env.PORT || 4000
connectDB()

// middlewares
app.use(express.json())
app.use(cors())

// API end points
app.get('/', (req, res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=> console.log('Server started on PORT: ' + port))

// tunder client installation at 5:22
// 5:33