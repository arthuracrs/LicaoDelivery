const express = require('express')
const app = express()
const port = 3000
const xesqOrchestrator = require("./xesqs/xesqOrchestrator")

app.get('/', async (req, res) => {
  res.send(await xesqOrchestrator.main()) 
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})