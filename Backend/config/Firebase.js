require('dotenv').config();
var admin = require("firebase-admin");
const app = admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.MY_FIREBASE_TYPE,
    project_id: process.env.MY_FIREBASE_PROJECT_ID,
    private_key_id: process.env.MY_FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.MY_FIREBASE_PRIVATE_KEY,
    client_email: process.env.MY_FIREBASE_CLIENT_EMAIL,
    client_id: process.env.MY_FIREBASE_CLIENT_ID,
    auth_uri: process.env.MY_FIREBASE_AUTH_URI,
    token_uri: process.env.MY_FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.MY_FIREBASE_AUTH_PROVIDER_URL,
    client_x509_cert_url: process.env.MY_FIREBASE_CERT_URL
  })
});
const db = admin.firestore();
const Rates = db.collection('Rates');
const Users = db.collection('Users');

const Buy = Rates.doc('Buy');
const Sell = Rates.doc('Sell');

module.exports = { Users, Buy, Sell, app }