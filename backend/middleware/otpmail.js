const nodemailer = require("nodemailer");
const mail = ({ otp, email }) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: "mnc91125@gmail.com",
            pass: "wrfljzvjgtvaxcps",
        },
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function sendMail() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: {
                name: "MNC",
                address: 'mnc91125@gmail.com'
            }, // sender address
            to: `${email}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: `Your otp for creating account in MNC is ${otp}`, // plain text body
            // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }
    sendMail().catch(console.error);
}
module.exports = { mail }