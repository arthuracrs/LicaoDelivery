const getDate = () => {
    function formateDate(date) {
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        const dateString = `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`
        return dateString
    }

    const currentTimeMs = Date.now()
    const GMT_less3 = new Date(currentTimeMs - (3 * 60 * 60 * 1000))

    return (formateDate(GMT_less3))
}

module.exports = { getDate }
