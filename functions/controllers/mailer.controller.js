const nodemailer = require('nodemailer');


const WelcomeEmail = (res) => {
    console.log(res);
    let email = res;
    // let email = "austin@miscotech.co.uk";
    let subject = "Welcome to London City Roast";
    let html = `
        <h2>Thank you for setting up an account in our site</h2>
        </br>
        <p>Feel fee to browse through our website. </p>
        https://www.londoncityroast.com
        <p>Please contact us on info@londoncityroast.com if you need help?</p>
        <h3>Customer Support Team</h3>
        `;
    let text = `
        Thank you for setting up an account in our site,
        Feel fee to browse through our website.
        https://www.londoncityroast.com
        Please contact us on info@londoncityroast.com if you need help?.
        Customer Support Team
        `;
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'shop@urgy.co.uk', // generated ethereal user
            pass: 'london123@'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"London City Roast 👻" <shop@urgy.co.uk>', // sender address
        to: `${email}`, // list of receivers
        subject: `${subject}`, // Subject line
        text: `${text}`, // plain text body
        html: `${html}` // html body
    };
    // console.log(mailOptions);
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // res.json({ "Date": `${Date.now()}`, "Report": info.messageId});
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

    
};
const orderSuccessMail = (req) => {
    let email = req.email;
    let name = req.name;
    let subject = "Order Confirmation";
    let html = `
        <h2>Dear ${name}</h2>
        <h3>Thanks for placing order on our website</h3>
        </br>
        <p>Your items will be with you shortly. </p>
        <p>Feel fee to browse our website if you need anything else. </p>
        https://www.londoncityroast.com
        <p>Please email us on info@londoncityroast.com if you have any query?</p>
        <h3>Sales Support Team</h3>
        `;
    let text = `
        Dear ${name}
        Thanks for placing order on our website
        Your items will be with you shortly. 
        Feel fee to browse our website if you need anything else.
        https://www.londoncityroast.com
        Please email us on info@londoncityroast.com if you have any query?.
        Sales Support Team
        `;
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'shop@urgy.co.uk', // generated ethereal user
            pass: 'london123@'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"London City Roast 👻" <shop@urgy.co.uk>', // sender address
        to: `${email}`, // list of receivers
        subject: `${subject}`, // Subject line
        text: `${text}`, // plain text body
        html: `${html}` // html body
    };
    
    // Sending Mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // res.json({ "Date": `${Date.now()}`, "Report": info.messageId});
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

}

module.exports = { WelcomeEmail, orderSuccessMail };