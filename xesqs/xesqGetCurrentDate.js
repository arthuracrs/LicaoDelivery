const axios = require("axios")
//using api from http://worldtimeapi.org/
const getDate = async() => {
    try {
        const res = await axios.get("http://worldtimeapi.org/api/timezone/America/Bahia")
        const date = res.data.datetime
        return date
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = { getDate }
