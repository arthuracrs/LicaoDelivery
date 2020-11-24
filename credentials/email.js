const addresser = process.env.addresser
const addresserPassword = process.env.addresserPassword
const addresse = process.env.addresse

if (!addresser) {
    console.log('addresser not valid!')
}
else if (!addresserPassword) {
    console.log('addresser password not valid!')
}
else if (!addresse) {
    console.log('addresse not valid!')
}
else {
    module.exports = {
        addresser,
        addresserPassword,
        addresse
    }
}

 