const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

require('dotenv').config()

const PORT = process.env.PORT;
const AUTH = process.env.AUTH;

console.log(`ENV PORT: ${PORT}`)
console.log(`ENV AUTH: ${AUTH}`)

app.get('/',(req,res) => {
    let randomNumber = Math.random();
    console.log(randomNumber)
    res.send(`<h1>${randomNumber}</h1>`);
})

app.get('/count/:ceiling',(req,res) => {
    console.log(req.params);
    let ceiling = Number(req.params.ceiling);
    let randomNumber = Math.random();
    console.log(randomNumber)
    let roundNumber = Math.round(randomNumber * ceiling)
    console.log(roundNumber)
    let message = '';
    for(let i = 0;i < roundNumber;i++)
    {
        message = message + '[' + i + ']'
    }    

    res.send(`<h1>${message}</h1>`);
})
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))

//PLACES CONTROLLER LOCATION
app.use('/books',require('./controllers/books.js'))

app.get('*', (req, res) => {
    res.send('error404')
})

app.listen(PORT,() => {
    console.log('listening on port: ',PORT);
})