var express = require('express');
var router = express.Router();
const multer = require('multer')
const hc= require ('../controllar/api1');
const am= require('../middleware/authorization')

/* GET home page. */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/create',upload.single('image'),am.tokensecure, hc.create);
router.get('/show',am.tokensecure, hc.show);
router.delete('/Delete/:id',am.tokensecure, hc.Delete);
router.patch('/updete/:id',upload.single('image'),am.tokensecure, hc.updete);
router.get('/createCatagory/:id',am.tokensecure,hc.createCatagory)

module.exports = router;
