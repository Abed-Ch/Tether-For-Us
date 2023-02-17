const https = require('node:https');
sendWhatsapp = async (req, res) => {
    const Rawmessage =
        `Name: *${req.body.Name}* .%0DNumber: *${req.body.Number}* .%0DHas requested to *${req.body.Type}* USDT. They will be paying ${req.body.Type === "Buy" ? "$" : "USDT "} *${req.body.Paying}* and will be recieving ${req.body.Type === "Buy" ? "USDT " : "$"}*${req.body.Recieving}*, with a commission of $ *${req.body.Commision}*.%0D${req.body.Address === "" ? "They have not given an address." : `Their address is *${req.body.Address}.`}${req.body.Ref === "" ? "" : "%0DThis client was referred to you."} `;
    const message = Rawmessage.split(" ").join("%20");
    const url = `https://api.callmebot.com/whatsapp.php?phone=${process.env.WHATSAPP_NUMBER}&text=${message}&apikey=${process.env.WHATSAPP_API_KEY}`;
    const Adminurl = `https://api.callmebot.com/whatsapp.php?phone=${process.env.ADMIN_WHATSAPP_NUMBER}&text=${message}&apikey=${process.env.ADMIN_WHATSAPP_API_KEY}`;
    const realURL = (req.body.Name === "Jx2-0AdminAbed" ? Adminurl : url)
    https.get(realURL, (response) => {
        response.statusCode === 200 ? res.status(200).json({ message: "Complete" }) : res.status(400).json({ message: "Error" });
    })
}
module.exports = { sendWhatsapp }