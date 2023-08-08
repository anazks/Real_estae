var express = require('express');
var router = express.Router();
const {addProperty} = require('../controllers/adminController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login');
});
router.get('/home', function(req, res, next) {
  res.render('admin/home');
});
router.post('/add-Property',addProperty)

module.exports = router;
