const imageDownloader = require('image-downloader')
const PDFDocument = require('pdfkit')
const fs = require('fs')

async function generatePdf(content, data) {

    async function downloadimage(url) {
        try {
            const options = {
                url: url,
                dest: './images'
            }
            const filename = await imageDownloader.image(options)
            console.log('Saved to', filename.filename)
            return filename.filename

        } catch (err) {
            (err) => console.error(err)
        }

    }

    async function createDirectorys(directorys) {
        const dirs = directorys
        for (const dir of dirs) {
            if (!fs.existsSync(dir)) fs.mkdirSync(dir);
        }
    }

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
    createDirectorys(['licoes'])
    createDocument(content, path)
    console.log('Document Created')
    
    return path
}

module.exports = { generatePdf }