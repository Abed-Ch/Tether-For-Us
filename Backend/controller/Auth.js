const { Users } = require('../config/Firebase');
const bcrypt = require('bcrypt');
const { logEvents } = require('../middleware/logger');
const Login = async (req, res) => {
    const snapshot = await Users.where('Username', '==', req.body.Username).get();
    if (snapshot.empty) { return res.status(400).json({ message: "User Not Found" }) };
    snapshot.forEach(async (doc) => {
        docData = await doc.data();
        const pass = await bcrypt.compare(req.body.Password, docData['Password']);
        return !pass
            ? res.status(400).json({ message: "Incorrect Password" })
            : [res.status(200).json(docData), logEvents(`${docData['Username']} logged in`, 'loginLog.log')];

    });
}

const signUp = async (req, res) => {
    let Username = req.body.Username;
    let Password = req.body.Password;
    let encryptedPassword = await bcrypt.hash(Password, 11);
    let doc = await Users.add({
        Username: Username,
        Password: encryptedPassword,
        Role: "Admin"
    });
    doc ? res.status(200).json({ message: `User Created, Doc ${doc}` }) :
        res.statud(400).json({ message: "Failed to sign up user" })
}
module.exports = { Login, signUp };