const express = require('express')
const router = express.Router();
const path = require('path')
const { Login, signUp } = require('../controller/Auth');

router.post('/', signUp)

router.patch('/', Login);

module.exports = router 