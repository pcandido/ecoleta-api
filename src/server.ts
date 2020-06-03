import express from 'express'
import figlet from 'figlet'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

const port = 3000

console.log(figlet.textSync('e-coleta'))
console.log(`Listening: http://localhost:${port}`)

app.listen(port)
