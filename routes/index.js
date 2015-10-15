var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'JSExpense',
        disableCurrency: false,
        disableMember: false,
        disableExpense: false,
        disableAdd: false
    });
});

/* GET currency page. */
router.get('/currency', function (req, res, next) {
    res.render('currency', {
        title: 'JSExpense',
        disableCurrency: true,
        disableMember: false,
        disableExpense: false,
        disableAdd: false
    });
});

/* GET add page. */
router.get('/add', function (req, res, next) {
    res.render('add', {
        title: 'JSExpense',
        disableCurrency: false,
        disableMember: false,
        disableExpense: false,
        disableAdd: true
    });
});

module.exports = router;
