const emailjs = require('emailjs');
const path = require("path");

const sendEmail = (fromEmail, fromPassword, toEmail, filePath) => {
	
	const client = new emailjs.SMTPClient({
		user: fromEmail,
		password: fromPassword,
		host: 'smtp.gmail.com',
		ssl: true,
	})
	
	// const pdfFileNameRegex = /[_0-9a-z]{1,30}.pdf/g
	const txtFileNameRegex = /[_0-9a-z]{1,30}.txt/g
	const fileName = filePath.match(txtFileNameRegex)[0].split('_').join(' ')
	
	const message = {
		text: '',
		from: fromEmail,
		to: toEmail,
		subject: 'convert',
		attachment: [
			{ path: path.resolve(filePath), type: 'application/octet-stream', name: fileName },
		],
	};
	client.send(message, function (err, message) {
		console.log(err || 'Kindle email was sent');
	});
	
}

module.exports = { sendEmail }