const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
//mongo DB
mongoose.connect('mongodb+srv://joshuagermany:joshua2003@boilerplate-final.obqyplm.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB is Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  // frontend에 던져줌  
  res.send('백엔드 잘 작동되고 있음')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})