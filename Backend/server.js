require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// app.use(function (req, res, next) {
//     // Enable CORS for requests from localhost
//     if (req.headers.origin === 'http://localhost:3000') {
//         res.header('Access-Control-Allow-Origin', 'http://localhost:3420');
//         res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//         res.header('Access-Control-Allow-Headers', 'Content-Type');
//     }
//     next();
// });

// const corsOptions = {
//     origin: ['https://tether-2d7d6.web.app'],
//     optionsSuccessStatus: 200
// };

app.use(cors());

const errorHandler = require('./middleware/errorHandler');
const Rates = require('./routes/Rates');
const functions = require("firebase-functions");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/login', require('./routes/login'));

app.use('/rates', Rates);

app.use('/client', require('./routes/client'));

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
});

app.use(errorHandler);

exports.app = functions.https.onRequest(app)