const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000


app.use('/', (req, res, next)=>{
    fs.appendFileSync('log.txt', `The date of user loggin is ${new Date()} and the loggin method is ${req.method} \n`)
    console.log('user logged in');
    req.something = "i am a string"
    next()
})

app.use('/', (req,res,next)=>{
    req.some = "hello"
    next()
})
app.use('/', (req,res,next)=>{
    req.some = "no hello"
    next()
})


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1> ' + req.some)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
