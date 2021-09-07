const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var content = fs.readFileSync('data.txt', 'utf8');
  res.send(content);
})

var process = require('process')
process.on('SIGINT', () => {
  console.info("Interrupted")
  process.exit(0)
})

process.on('SIGTERM', () => {
    console.info("Interrupted")
    process.exit(0)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
