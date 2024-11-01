const express = require('express')
const app = express()
const puerto = 3000
const localhost = '127.0.0.1'

app.get('/', (req, res) => {
  res.send('servidor funcionando')
})

app.listen(puerto, localhost, () => {
  console.log(`escuchando al puerto ${puerto}`)
})