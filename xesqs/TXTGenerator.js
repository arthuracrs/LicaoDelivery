function textExist(string) {
    return string ? "\n" + "\n" + string : ''
}

function generateTXT(data) {
// RESUMO SEMANA
    let txt = 
`RESUMO DA SEMANA

${data.resumo.numberLicao}
${data.resumo.dateLicao}

${textExist(data.resumo.titleLicao)}

${textExist(data.resumo.versoMemorizarLicao)}

${textExist(data.resumo.previaSemanaLicao)}

${textExist(data.resumo.leiturasSemanaLicao)}

=====================

`
   
    // OUTROS DIAS

    data.licoesDaSemana.forEach((licaoDoDia) => {
        
        txt +=
`${licaoDoDia.diaExtensoLicao}

${textExist(licaoDoDia.titleLicaoDay)}

${textExist(licaoDoDia.conteudoLicaoDia)}

${textExist(licaoDoDia.maosABiblia.jovemBoxTitle)}

${textExist(licaoDoDia.maosABiblia.contentMaosABiblia)}

${textExist(licaoDoDia.maosAObra.jovemBoxTitle)}

${textExist(licaoDoDia.maosAObra.contentMaosAObra)}

${textExist(licaoDoDia.penseNisto.jovemBoxTitle)}

${textExist(licaoDoDia.penseNisto.contentPenseNisto)}

=====================

`   })

    return txt
}

module.exports = { generateTXT }