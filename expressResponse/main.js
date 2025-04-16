const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('<h1>Hello! World</h1>')
})

app.post('/', (req, res) => {
    res.send('<h1>Its a post req</h1>')
})


// app.get('/:slug', (req, res) => {
//     console.log(`this is the file named ${req.params.slug}`);
//     res.sendFile('package.json', { root: __dirname })
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})