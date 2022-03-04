const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
const todoRoute = require('./routes/todo')

app.use(cors())
app.use(express.json())
app.use('/todo', todoRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})