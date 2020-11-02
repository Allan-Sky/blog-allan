import path from 'path'
import './database'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

import cors from 'cors'

import routes from './routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/files' , express.static(path.resolve(__dirname, '..', 'tmp')))


app.use(routes)

app.use((err: Error, request:Request , response:Response, next:NextFunction) => {
    return response.json({
        message: err.message,
        status: 401
    })
})

app.listen(process.env.PORT || 3030, () => console.log('running in port 3030'))