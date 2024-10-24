var express = require('express');
var router = express.Router();
var UC= require('../controllar/log_si')

/* GET home page. */
router.post('/Login',UC.Login)
router.post('/Singup',UC.Singup)

module.exports = router;