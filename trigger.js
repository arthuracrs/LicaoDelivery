const express = require('express')
const app = express()
const port = 3000
const Orchestrator = require("./xesqs/Orchestrator")
const GetCurrentDate = require("./xesqs/GetCurrentDate")

async function main() {
  app.get('/lesson', async(req, res) => {
    console.log('############### Request Info ################')
    console.log(req.ip)
    const currentTime = GetCurrentDate.getDate()
    console.log(currentTime)
    console.log('#############################################')

    const response = await Orchestrator.main()
    res.send(response)
  })

  app.listen(port, () => {
    console.log(`Listening at http://18.229.161.145:${port}/lesson`)
  })
}

module.exports = { main }
