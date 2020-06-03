import cors from 'cors'
import express from 'express'
import figlet from 'figlet'
import path from 'path'
import { base_url, port, uploads_route } from './environment'
import router from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.use(`/${uploads_route}`, express.static(path.resolve(__dirname, '..', 'uploads')))

console.log(figlet.textSync('e-coleta'))
console.log(`Listening: ${base_url}`)

app.listen(port)
