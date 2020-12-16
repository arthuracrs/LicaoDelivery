const PDFDocument = require('pdfkit')
const fs = require('fs')
const tools = require("./tools")

async function generatePdf(content, data) {

    async function createDocument(textContent, path) {
        const doc = new PDFDocument
        doc.pipe(fs.createWriteStream(path));
        doc.text('', 20, 20)
        doc.fontSize(20);
        doc.text(textContent)
        doc.end()

        return path
    }

    const path = './licoes/' + data.resumo.dateLicao.split(' ').join('_') + '.pdf'
    tools.createDirectorys(['licoes'])
    createDocument(content, path)
    console.log('Document Created')
    
    return path
}

module.exports = { generatePdf }