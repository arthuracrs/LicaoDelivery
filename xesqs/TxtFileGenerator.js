const fs = require("fs")
const tools = require("./tools")

async function generateFileTxt(content, data) {
    const path = './licoes/' + data.resumo.dateLicao.split(' ').join('_') + '.txt'
    
    tools.createDirectorys(['licoes'])
    
    fs.writeFile(path, content, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    return path
}

module.exports = { generateFileTxt }
