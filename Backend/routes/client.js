const express = require('express')
const router = express.Router();
const path = require('path');
const { sendWhatsapp } =require('../controller/client');

router.use('/',(req,res,next)=>{
    next();
})
router.patch('/',sendWhatsapp);

module.exports = router