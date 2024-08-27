import nodemailer from "nodemailer";
import applyRateLimit from "../../middlewares/rateLimit";

const transporterForUser = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.USEREMAIL,
        pass: process.env.USERPASSWORD,
    },
});

const transporterForMe = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.USEREMAIL2,
        pass: process.env.USERPASSWORD2,
    },
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    applyRateLimit(req, res);
    const { name, email, message } = req.body;

    const mailOptionsForMe = {
        from: process.env.USEREMAIL2,
        to: process.env.USEREMAIL,
        subject: `🔔 ${name} want to connect with You`,
        text: `${message}\nHis email is ${email}`,
    };

    const mailOptionsForUser = {
        from: process.env.USEREMAIL,
        to: email,
        subject: `🔔 Thank you for contacting with me`,
        text: `Hi ${name},\nThank you for contacting with me. I will get back to you as soon as possible.\n\nRegards,\nMd Mahfujur Rahman`,
    };

    try {
        await Promise.all([
            transporterForUser.sendMail(mailOptionsForUser),
            transporterForMe.sendMail(mailOptionsForMe),
        ]);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while sending the email",
        });
    }
}
