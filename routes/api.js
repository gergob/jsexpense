/**
 * Created by greg on 2015.10.11..
 */

var express = require('express');
var router = express.Router();
var currencyManager = require('../managers/currencyManager');


/*  */
router.get('/currency', function(req, res) {
    currencyManager.getCurrencies()
        .then(function(data){
            console.info(data);
            res.json(data);
        })
        .fail(function(err){
            res.status(500).json({error: err.message});
        })
});

module.exports = router;