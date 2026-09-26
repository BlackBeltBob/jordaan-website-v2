const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const PORT = 8007;
require("dotenv").config();

const app = express()
app.use(express.json())
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000"
}))

const transporter = nodemailer.createTransport({
    host: process.env.REACT_APP_SMTP_HOST,
    port: process.env.REACT_APP_SMTP_PORT,
    auth: {
        user: process.env.REACT_APP_SMTP_EMAIL,
        pass: process.env.REACT_APP_SMTP_PASS
    }
})

transporter.verify((err) => {
    if (err) {
        console.log("Mail config error:", err)
    } else {
        console.log("Mail server ready");
    }
})

app.post("/send", (req, res) => {
    const { voornaam, tussenvoegsel, achternaam, straatnaam, huisnummer, postcode, woonplaats, telefoonnummer, emailadres, ref, product, hulpvraag, email } = req.body;

    let mailConfig;

    if (voornaam !== undefined) {
        // Intake / contact form
        const naamDelen = [voornaam, tussenvoegsel, achternaam].filter(Boolean);
        const volledigeNaam = naamDelen.join(" ");

        mailConfig = {
            from: process.env.REACT_APP_SMTP_EMAIL,
            to: process.env.REACT_APP_CONTACT_EMAIL || process.env.REACT_APP_SMTP_EMAIL,
            replyTo: emailadres,
            subject: `[AANMELDING] ${volledigeNaam} - ${telefoonnummer} ${emailadres}`,
            text:
`Er is een nieuwe aanmelding op de website:

Naam: ${volledigeNaam}
Adres:
${straatnaam} ${huisnummer}
${postcode} ${woonplaats}

Telefoon en Email:
${telefoonnummer} ${emailadres}

Behandeling / product:
${product || "—"}

Hulpvraag:
${hulpvraag || "—"}

Verwijzing:
${ref || "—"}`,
        };
    } else {
        // Newsletter form (just email)
        mailConfig = {
            from: process.env.REACT_APP_SMTP_EMAIL,
            to: process.env.REACT_APP_CONTACT_EMAIL || process.env.REACT_APP_SMTP_EMAIL,
            replyTo: email,
            subject: "Nieuwe nieuwsbrief aanmelding",
            text: `Nieuw e-mailadres aangemeld voor de nieuwsbrief:\n\n${email}`,
        };
    }

    transporter.sendMail(mailConfig, (err) => {
        if (err) {
            console.log("Send error:", err);
            res.json({ status: "fail" })
        } else {
            res.json({ status: "success" })
        }
    })
})

app.listen(PORT, () => {
    console.log(`Mail server running on port ${PORT}`);
})
