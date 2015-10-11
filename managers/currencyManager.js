/**
 * Created by greg on 2015.10.11..
 */

var q = require('q');
var connectionManager = require('./connectionManager');

function getCurrencies() {
    var deferred = q.defer();

    connectionManager.getConnection()
        .then(function (connection) {
            connection.query('SELECT * FROM currency', function (error, results) {
                if (error) {
                    console.error(error);
                    deferred.reject(error);
                }
                deferred.resolve(results);
            });
        })
        .fail(function (err) {
            console.error(JSON.stringify(err));
            deferred.reject(err);
        });

    return deferred.promise;
}

function addCurrency(name, conversionRate, forDate) {
    var deferred = q.defer();

    var currencyInsert = 'INSERT INTO currency(name, conversionRate, forDate) VALUES (?,?,?)';

    connectionManager.getConnection()
        .then(function (connection) {
            var query = connection.prepareQuery(currencyInsert, [name, conversionRate, forDate]);
            connection.query(query, function (error, result) {
                if (error) {
                    console.error(error);
                    deferred.reject(error);
                }
                deferred.resolve(result.insertId);
            });
        })
        .fail(function (err) {
            console.error(JSON.stringify(err));
            deferred.reject(err);
        });

    return deferred.promise;
}

module.exports = {
    getCurrencies: getCurrencies
};