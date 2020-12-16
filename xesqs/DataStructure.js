const axios = require('axios')
const cheerio = require('cheerio')
const puppeteer = require('puppeteer')

async function dataGenerator(url) {

    async function getMainPage(url) {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const data = await page.evaluate(() => (document.querySelector('*').outerHTML));
        await browser.close()
        
        return data
    }

    async function makeDataStucture(urlOfWeek) {

        try {
            const response = await axios.get(urlOfWeek)

            let $ = cheerio.load(response.data)
            
            const data = {
                resumo: {},
                licoesDaSemana: []
            }

            $('.mdl-grid').each(
                (index, content) => {
                    if (index == 0) {
                        let $ = cheerio.load(content)
                        let t = (selector) => { return $(selector).text().trim() }
                        let imageLicaoURL = $('.imageLicao').css('background-image').split('').slice(4, -1).join('')

                        data.resumo = {
                            numberLicao: t('.numberLicao'),
                            dateLicao: t('.dateLicao'),
                            imageLicao: imageLicaoURL.trim(),
                            titleLicao: t('.titleLicao div'),
                            versoMemorizarLicao: t('.versoMemorizarLicao'),
                            previaSemanaLicao: t('.previaSemanaLicao'),
                            leiturasSemanaLicao: t('.leiturasSemanaLicao')
                        }

                    }
                    else {
                        let $ = cheerio.load(content)

                        let t = (selector) => { return $(selector).text().trim() }
                        const licaoDoDia = {
                            diaExtensoLicao: t('.diaExtensoLicao'),
                            titleLicaoDay: t('.titleLicaoDay'),
                            conteudoLicaoDia: t('.conteudoLicaoDia'),
                            maosABiblia: {
                                jovemBoxTitle: t('.maosABiblia .jovemBoxTitle'),
                                contentMaosABiblia: t('.maosABiblia .contentMaosABiblia')
                            },
                            maosAObra: {
                                jovemBoxTitle: t('.maosAObra .jovemBoxTitle'),
                                contentMaosAObra: t('.maosAObra .contentMaosAObra'),
                            },
                            penseNisto: {
                                jovemBoxTitle: t('.penseNisto .jovemBoxTitle'),
                                contentPenseNisto: t('.penseNisto .contentPenseNisto')
                            }
                        }
                        data.licoesDaSemana.push(licaoDoDia)
                    }
                }
            )

            return data
        }
        catch (error) {
            console.log(error)
         
            return error
        }
    }

    const mainPage = await getMainPage(url)
    let $ = cheerio.load(mainPage)
    const urlOfWeek = ($('cpbm-card a').attr('href'))
    const data = await makeDataStucture(urlOfWeek)
    console.log('Data Structured')

    return data
}

module.exports = { dataGenerator }
