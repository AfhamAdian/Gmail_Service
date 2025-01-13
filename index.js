const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();


const senderEmail = process.env.EMAIL;  
const senderPassword = process.env.PASSWORD;
var transporter;

console.log('Sender Email: ' + senderEmail);
console.log('Sender Password: ' + senderPassword);

try{
    transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: senderEmail,
          pass: senderPassword
        },
        tls: {
          rejectUnauthorized: false,
        }
    });

}catch(err){
    console.log('Error while creating the transporter' + err.message);
}


const recieverEMail = 'afhamadian.03@gmail.com';
const mailSubject = 'Sending Email using Node.js';
const mailBody = 'That was easy!';

const resumePdf = fs.readFileSync('resume.pdf');
const dpGithubJpg = fs.readFileSync('DP_Github.jpg');


const mailOptions = {
    from: senderEmail,
    to: recieverEMail,
    subject: mailSubject,
    text: mailBody,
    attachments: [
        {
            filename: 'resume.pdf',
            content: resumePdf
        },
        {
            filename: 'dp-github.jpg',
            content: dpGithubJpg
        }
    ]
};


//function to send the email
async function sendMail( transporter, mailOptions ){
    try{
        // console.log(transporter);
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    }catch(err){
        console.log('Error while sending the email' + err.message);
    }
}


//sending the email
sendMail( transporter, mailOptions );