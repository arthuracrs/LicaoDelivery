const xesqDataStructure = require('./xesqDataStructure')
const xesqPdfGenerator = require('./xesqPdfGenerator')
const xesqTXTGenerator = require('./xesqTXTGenerator')
const xesqSendEmail = require('./xesqSendEmail')
const xesqGetCurrentDate = require("./xesqGetCurrentDate")

const emailCredentials = require('../credentials/email.js')

async function main() {
    try {
        const data = await xesqDataStructure.dataGenerator('https://mais.cpb.com.br/licao-jovens/')
        const txt = await xesqTXTGenerator.generateTXT(data)
        const pdfPath = await xesqPdfGenerator.generatePdf(txt, data)
        
        const sendEmail = await xesqSendEmail.sendEmail(
            emailCredentials.addresser,
            emailCredentials.addresserPassword,
            emailCredentials.addressee,
            pdfPath
        )
        const currentTime = await xesqGetCurrentDate.getDate()
        console.log(currentTime)
        return 'sent'
    }
    catch (error) {
        console.log(xesqGetCurrentDate.currentTime)
        console.log(error)
        return error
    }
}

module.exports = { main }