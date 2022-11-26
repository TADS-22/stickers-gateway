import cors from 'cors'
import express from 'express'
import { authRequest } from './modules/gateway/middlewares'
import { handleStickersApi, handleUserApi } from './modules/gateway/proxy'

const app = express()

app.use(cors())
app.use(express.json())

app.use(authRequest)
app.use(handleUserApi)
app.use(handleStickersApi)

app.listen(3000, () => console.log('Gateway is up!'))