const express = require('express')
const router = express.Router();
const { getRates, setRates } = require('../controller/Rates');

router.use((req, res, next) => {
    next()
});
router.get('/', getRates);

router.patch('/', setRates)
module.exports = router
