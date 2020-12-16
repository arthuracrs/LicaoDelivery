const prompts = require('prompts');
const emailjs = require('emailjs');
const express = require('express')

const trigger = require("./trigger")

const app = express()
const port = 3031

const questions = [{
        type: 'text',
        name: 'addresser',
        message: 'What is the addresser\'s email?',
        validade: value => value == '' ? 'Put a email' : true
    },
    {
        type: 'password',
        name: 'addresserPassword',
        message: 'Whats is the addresser\'s email password?',
        validade: value => value == '' ? 'Put a password' : true
    },
    {
        type: 'text',
        name: 'addressee',
        message: 'Whats is the addressee\'s email?',
        validade: value => value == '' ? 'Put a email' : true
    }

]

const sendCheckEmail = (fromEmail, fromPassword, randonKey) => {

    const url = `http://18.229.161.145:${port}/` + '?randonKey=' + randonKey

    const client = new emailjs.SMTPClient({
        user: fromEmail,
        password: fromPassword,
        host: 'smtp.gmail.com',
        ssl: true,
    })

    const message = {
        text: 'Checking email Login',
        from: fromEmail,
        to: fromEmail,
        subject: 'Email Verification',
        attachment: [{
            data: `
                    <html>
                        <body>
                            <h2>click here to confirm your email: </h2> 
                            <a href="${url}">Click Here</a>
                        </body>
                    </html>`,
            alternative: true
        }]
    }

    client.send(message, function(err, message) {
        console.log(err || 'Check email was Sent')
    })
}

const emailCredentials = async() => {
    
    const response = await prompts(questions)

    const randonKey = Math.floor(Math.random() * 100000)
    const { addresser, addresserPassword, addressee } = response
    
    sendCheckEmail(addresser, addresserPassword, randonKey)
    
    app.get('/', (req, res) => {
        if (req.query.randonKey == randonKey) {
            console.log('Email Checked =D')
            
            process.env.ADDRESSER = addresser
            process.env.ADDRESSER_PASSWORD = addresserPassword
            process.env.ADDRESSEE = addressee
            
            trigger.main()
            
            res.send('email confirmed')
            server.close()
        }
    })
    
    const server = app.listen(port, () => {
        console.log('Waiting for check email\'s response...')
    })
}

emailCredentials()
