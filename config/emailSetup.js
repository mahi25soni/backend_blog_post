const mailchimp = require("@mailchimp/mailchimp_marketing");
require("dotenv").config()

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API,
  server: process.env.MAILCHIMP_PREFIX,
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();

let transporter = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port :  587,
    secure : false,
    auth : {
        user : process.env.EMAIL,
        pass : process.env.EMAIL_PASS
    }
})

const mailOptions = {
    from: process.env.EMAIL,
    to: "mahi25soni@gmail.com",
    subject: "Hello from Nodemailer",
    text: "This is a test email sent using Nodemailer.",
  };

const sendEmail = () => {
    transporter.sendMail(mailOptions, (err, info)=> {
        if(err) {
            console.log(err);
        }
        else{
            console.log("Mail sent successfully")
        }
    })
}
module.exports = sendEmail;