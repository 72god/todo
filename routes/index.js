var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/save', indexController.saveData)
router.get('/get', indexController.getData)


module.exports = router;
