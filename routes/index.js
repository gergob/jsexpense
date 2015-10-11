var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'JSExpense',
      disableCurrency: false,
      disableMember: false,
      disableExpense: false });
});

/* GET currency page. */
router.get('/currency', function(req, res, next) {
    res.render('currency', {
        title: 'JSExpense',
        disableCurrency:true,
        disableMember: false,
        disableExpense: false });
});

module.exports = router;
