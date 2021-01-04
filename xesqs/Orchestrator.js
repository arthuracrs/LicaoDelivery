const DataStructure = require('./DataStructure')
const TXTGenerator = require('./TXTGenerator')
const SendEmail = require('./SendEmail')
const txtFileGenerator = require("./TxtFileGenerator")

async function main() {
    try {
        
        const data = await DataStructure.dataGenerator('https://mais.cpb.com.br/licao-jovens/')
        const txt = TXTGenerator.generateTXT(data)
        const txtPath = await txtFileGenerator.generateFileTxt(txt, data)
        const sendEmail = await SendEmail.sendEmail(
            process.env.ADDRESSER,
            process.env.ADDRESSER_PASSWORD,
            process.env.ADDRESSEE,
            txtPath
        )
        
        return 'Lesson of week was sent'
    }
    catch (error) {
        
        console.log(error)
        return error
    }
}

module.exports = { main }