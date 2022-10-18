import mailgun from "mailgun-js";
import dotenv from "dotenv";

dotenv.config();

const mg = mailgun({ apiKey: process.env.API_KEY, domain: process.env.DOMAIN });

export const sendMail = async (req, res) => {
    try {
        const mailData = {
            from: req.body.email,
            // to: "makaryyrakam@gmail.com",
            to: "kubaw.iluzja@gmail.com",
            subject: `${req.body.email} wysłał wiadomość ze strony kubawarkocz.pl`,
            html: `<html><body><h3>Dostałeś wiadomość od ${req.body.email} o treści:</h3><p>${req.body.message}</p></body></html>`
        };
        mg.messages().send(mailData, () => {
            console.log(`Sending message from ${req.body.email}...`);
        });

        res.send("Message sent");
    } catch (error) {
        res.send("There was an error sending your message, try again");
        console.log(error);
    }
};
