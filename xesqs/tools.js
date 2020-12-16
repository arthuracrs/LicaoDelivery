const fs = require("fs")
const imageDownloader = require('image-downloader')

async function createDirectorys(directorys) {
        const dirs = directorys
        for (const dir of dirs) {
            if (!fs.existsSync(dir)) fs.mkdirSync(dir);
        }
    }
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
    
module.exports = {createDirectorys, downloadimage}    