/**
 * Created by greg on 2015.10.11..
 */

var express = require('express');
var router = express.Router();
var currencyManager = require('../managers/currencyManager');
var memberManager = require('../managers/memberManager');
var expenseManager = require('../managers/expenseManager');


router.get('/currencies', function(req, res) {
    currencyManager.getCurrencies()
        .then(function(data){
            console.info(data);
            res.json(data);
        })
        .fail(function(err){
            res.status(500).json({error: err.message});
        })
});

router.get('/members', function(req, res) {
    memberManager.getMembers()
        .then(function(data){
            console.info(data);
            res.json(data);
        })
        .fail(function(err){
            res.status(500).json({error: err.message});
        })
});

router.get('/expenses', function(req, res) {
    expenseManager.getExpenses()
        .then(function(data){
            console.info(data);
            res.json(data);
        })
        .fail(function(err){
            res.status(500).json({error: err.message});
        })
});


module.exports = router;