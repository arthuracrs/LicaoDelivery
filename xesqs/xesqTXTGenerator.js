function textExist(string) {
    return string ? "\n" + "\n" + string : ''
}

function generateTXT(data) {
    let txt = ''
    // RESUMO SEMANA
    txt += "RESUMO DA SEMANA"
    txt += data.resumo.numberLicao + " - " + data.resumo.dateLicao
    txt += textExist(data.resumo.titleLicao)
    txt += textExist(data.resumo.versoMemorizarLicao)
    txt += textExist(data.resumo.previaSemanaLicao)
    txt += textExist(data.resumo.leiturasSemanaLicao)
    txt += "\n\n"
    txt += '====================='
    txt += "\n\n"
    // OUTROS DIAS

    data.licoesDaSemana.forEach((licaoDoDia) => {
        txt += licaoDoDia.diaExtensoLicao
        txt += textExist(licaoDoDia.titleLicaoDay)
        txt += textExist(licaoDoDia.conteudoLicaoDia)
        txt += textExist(licaoDoDia.maosABiblia.jovemBoxTitle)
        txt += textExist(licaoDoDia.maosABiblia.contentMaosABiblia)
        txt += textExist(licaoDoDia.maosAObra.jovemBoxTitle)
        txt += textExist(licaoDoDia.maosAObra.contentMaosAObra)
        txt += textExist(licaoDoDia.penseNisto.jovemBoxTitle)
        txt += textExist(licaoDoDia.penseNisto.contentPenseNisto)
        txt += "\n\n"
        txt += '====================='
        txt += "\n\n"

    })

    return txt
}

module.exports = { generateTXT }