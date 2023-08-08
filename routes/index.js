var express = require('express');
var router = express.Router();
var { getProp } = require('../controllers/userController')
/* GET home page. */
router.get('/', getProp);

module.exports = router;
