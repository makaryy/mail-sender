import mailgun from "mailgun-js";
import dotenv from "dotenv";

dotenv.config();

const mg = mailgun({ apiKey: process.env.API_KEY, domain: process.env.DOMAIN });

export const sendMail = (req, res) => {
    const mailData = {
        from: req.body.email,
        to: "kubaw.iluzja@gmail.com",
        subject: `${req.body.email} wysłał wiadomość ze strony kubawarkocz.pl`,
        html: `<html><body><h3>Dostałeś wiadomość od ${req.body.email} o treści:</h3><p>${req.body.message}</p></body></html>`
    };
    mg.messages().send(mailData, () => {
        console.log(`Sending message from ${req.body.email}...`);
    });
};
