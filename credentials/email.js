const addresser = process.env.addresser
const addresserPassword = process.env.addresserPassword
const addressee = process.env.addressee

if (!addresser) {
    console.log('addresser not valid!')
}
else if (!addresserPassword) {
    console.log('addresser password not valid!')
}
else if (!addressee) {
    console.log('addresse not valid!')
}
else {
    module.exports = {
        addresser,
        addresserPassword,
        addressee
    }
}

 