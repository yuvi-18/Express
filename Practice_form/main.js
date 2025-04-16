const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(morgan("dev")) // To get the data of the request

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/submit', (req ,res)=>{
    console.log(req.body); // { 'street name': 'yuvi', 'pet name': 'kuch bhi' }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})