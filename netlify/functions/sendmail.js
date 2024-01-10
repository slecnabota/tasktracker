// netlify/functions/sendmail.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // Parse the JSON body
    const { input1, input2 } = JSON.parse(event.body);

    // Nodemailer setup
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    // Email options
    const mailOptions = {
        from: '"Example " <tasktracker@example.com>', // sender address
        to: 'akbotamold@gmail.com', // list of receivers
        subject: 'New Submission', // Subject line
        text: `Name: ${input1}\nPhone: ${input2}`, // plain text body
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to send email", error: error.message })
        };
    }
};
