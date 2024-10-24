var express = require('express');
var router = express.Router();
const multer = require('multer')
const HC= require ('../controllar/api2');
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

router.post('/create',upload.single('image'),am.tokensecure, HC.create);
router.get('/show',am.tokensecure, HC.show);
router.delete('/Delete/:id',am.tokensecure, HC.Delete);
router.patch('/updete/:id',upload.single('image'),am.tokensecure, HC.updete);
router.get('/createCatagory/:id',am.tokensecure,HC.createCatagory)

module.exports = router;
