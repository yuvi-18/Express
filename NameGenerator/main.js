const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));

app.get('/', (req ,res)=>{
  res.sendFile('/public/form.html', {root: __dirname})
})

app.post('/submit', (req ,res)=>{
  const obj = req.body
  res.send(`
    <h1>Your Band Name is:</h1>
    <h2>${obj['street name']}${obj['pet name']} 😛</h2>
    `)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})