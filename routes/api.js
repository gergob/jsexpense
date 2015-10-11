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

router.post('/currencies', function(req, res) {
    var currencyName = req.body['currency'];
    var conversionRate = req.body['conversionRate'];
    var forDate = req.body['forDate'];
    console.log('CurrencyName:' + currencyName);
    console.log('conversionRate:' + conversionRate);
    console.log('forDate:' + forDate);
    currencyManager.addCurrency(currencyName, conversionRate, forDate)
        .then(function(currencyId){
            console.info('Created currency with id:' + currencyId);
            res.status(201).json({currencyId: currencyId});
        })
        .fail(function(err){
            res.status(500).json({error: err.message});
        })
});

router.delete('/currencies/:name', function(req, res) {
    var currencyName = req.params.name;

    if(!currencyName || currencyName === undefined) {
        res.status(404).json({error: 'There is not [name] parameter specified.'})
    }

    console.log('CurrencyName:' + currencyName);
    currencyManager.deleteCurrency(currencyName)
        .then(function(data){
            console.log('AffectedRows:' + data.affectedRows);
            if(data.affectedRows === 1) {
                console.info('Deleted currency with name:' + currencyName);
                res.status(200).json({affectedRows: data.affectedRows});
            }
            else if(data.affectedRows === 0) {
                res.status(404).send();
            }
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