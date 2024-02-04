const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const { User } = require('./models/User')
const bodyParser = require('body-parser')
const config = require('./config/key')
//mongo DB
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB is Connected...'))
.catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended:"true"}))
//아래 명령어를 해석을 해보자면..
//1) 우리는 bodyparser를 불러왔음
//2) 그 bodyparser의 메소드인 json을 이 앱(app)에서 사용(use)하겠다고 한거임
//3) 그걸 한번에 코드로 쓰면 'app'이 'use'한다 'bodyParser.json()'를 이 됨
//4) 그래서 나중에 우리가 데이터를 json 형태로 응답(res)할 수 있는거임
app.use(bodyParser.json())

app.get('/', (req, res) => {
  // frontend에 던져줌  
  res.send('백엔드 잘 작동되고 있음')
})


app.post('/register', (req, res) => {
  const user = new User(req.body)
  user.save((err, userInfo) => {
    //바로 여기서! 데이터를 json 형태로 res 함!
    if (err) return res.json({success: false, err})
    return res.status(200).send({success: true})
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})