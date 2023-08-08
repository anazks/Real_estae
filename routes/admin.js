var express = require('express');
var router = express.Router();
const {addProperty,getProperty,getUpdate,update_property} = require('../controllers/adminController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login');
});
router.get('/home', function(req, res, next) {
  res.render('admin/home');
});
router.post('/add-Property',addProperty)
router.get('/get-property',getProperty)
router.get('/getUpdate/:id',getUpdate)
router.post('/update-Property',update_property)
module.exports = router;
